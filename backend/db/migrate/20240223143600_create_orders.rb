class CreateOrders < ActiveRecord::Migration[7.1]
  def change
    create_table :orders do |t|
      t.string :order_reference_number
      t.decimal :total_price, precision: 10, scale: 2
      t.string :status
      t.belongs_to :customer, foreign_key: true
      t.belongs_to :user, foreign_key: true
      t.timestamps
    end

    create_table :order_pizzas do |t|
      t.belongs_to :order, foreign_key: true
      t.belongs_to :pizza, foreign_key: true
      t.integer :quantity, default: 1
    end
  end
end
