class Trip < ActiveRecord::Base
  belongs_to :location
  has_many :activities, dependent: :destroy
  has_many :lodgings, dependent: :destroy
end
