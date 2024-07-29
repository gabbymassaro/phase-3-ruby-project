class ChangeColumnTypeOnLodging < ActiveRecord::Migration[6.1]
  def change
    change_column :lodgings, :lodging_type, :string
  end
end
