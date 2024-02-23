class CreateOrders < ActiveRecord::Migration[7.1]
  def change
    create_table :orders do |t|
      t.decimal :title, precision: 10, scale: 2
      t.string :status
      t.belongs_to :customer, foreign_key: true
      t.belongs_to :user, foreign_key: true
      t.timestamps
    end
  end
end
