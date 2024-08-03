class Activity < ActiveRecord::Base
  belongs_to :trip

  def self.order_by_trip_title
    joins(:trip).order("trips.title ASC")
  end
end
