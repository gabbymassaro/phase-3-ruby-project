class CreateMissingMigration < ActiveRecord::Migration[6.1]
  def change
    rename_column :lodgings, :type, :lodging_type
  end
end
