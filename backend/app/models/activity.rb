class Activity < ActiveRecord::Base
  belongs_to :trip

  def self.order_by_trip_title
    Activity.joins(:trip).includes(:trip).order("trips.title ASC")
  end
end
