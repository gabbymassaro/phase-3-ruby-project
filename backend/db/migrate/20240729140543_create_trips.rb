class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :title
      t.date :start_date
      t.date :end_date
      t.references :location, foreign_key: true
      t.references :activity, foreign_key: true
      t.references :lodging, foreign_key: true
      t.timestamps
    end
  end
end
