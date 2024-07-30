class RemoveActivityLodgingForeignKeys < ActiveRecord::Migration[6.1]
  def change
    remove_foreign_key :trips, :activities
    remove_foreign_key :trips, :lodgings
    remove_column :trips, :activity_id, :integer
    remove_column :trips, :lodging_id, :integer
  end
end
