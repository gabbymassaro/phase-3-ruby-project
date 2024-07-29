class CreateLodgings < ActiveRecord::Migration[6.1]
  def change
    create_table :lodgings do |t|
      t.integer :type
      t.string :name
      t.decimal :price_per_night
      t.datetime :check_in
      t.datetime :check_out
      t.timestamps
    end
  end
end
