class Trip < ActiveRecord::Base
  has_many :activities
  has_many :locations
  has_many :lodgings
end
