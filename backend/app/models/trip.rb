class Trip < ActiveRecord::Base
  belongs_to :location
  has_many :activities
  has_many :lodgings
end
