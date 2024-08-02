class Location < ActiveRecord::Base
  has_many :trips

  def self.traveled_abroad
    Location.where.not(country: "USA").pluck(:country)
  end
end
