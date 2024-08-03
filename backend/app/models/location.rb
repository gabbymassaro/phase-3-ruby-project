class Location < ActiveRecord::Base
  has_many :trips

  def self.traveled_abroad
    where.not(country: "USA").pluck(:country)
  end
end
