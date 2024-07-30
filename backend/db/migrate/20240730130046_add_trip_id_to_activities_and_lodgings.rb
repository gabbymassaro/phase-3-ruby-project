class AddTripIdToActivitiesAndLodgings < ActiveRecord::Migration[6.1]
  def change
    add_reference :activities, :trip, foreign_key: true
    add_reference :lodgings, :trip, foreign_key: true
  end
end
