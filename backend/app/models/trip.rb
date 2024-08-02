class Trip < ActiveRecord::Base
  belongs_to :location
  has_many :activities, dependent: :destroy
  has_many :lodgings, dependent: :destroy

  def self.order_by_start_date
    Trip.order(start_date: :asc)
  end

  def total_activities_cost
    activities.sum(:price)
  end

  def length_of_trip
    (end_date - start_date).to_i
  end

  def total_cost_of_stay
    lodging_duration = lodgings.sum do |lodging|
      (lodging.check_out.to_date - lodging.check_in.to_date).to_i
    end

    lodgings.sum do |lodging|
      (lodging_duration * lodging.price_per_night)
    end
  end

  # def self.most_frequent_city
  #   Trip
  #   .select("trips*, COUNT(location_id) as location_count")
  #   .group("location_id")
  #   .order("location_count DESC")
  #   .first
  # end

  # def self.trip_data
  #   {
  #     total_activities_cost: trip.total_activities_cost,
  #     length_of_trip: trip.length_of_trip,
  #     total_cost_of_stay: trip.total_cost_of_stay
  #   }
  # end
end