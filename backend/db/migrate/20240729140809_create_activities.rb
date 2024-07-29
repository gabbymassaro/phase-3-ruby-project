class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :name
      t.decimal :price
      t.date :date
      t.timestamps
    end
  end
end
