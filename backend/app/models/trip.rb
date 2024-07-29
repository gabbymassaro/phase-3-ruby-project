class Trip < ActiveRecord::Base
  belongs_to :activity
  belongs_to :location
  belongs_to :lodging
end
