class CreatePizzas < ActiveRecord::Migration[7.1]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.decimal :price
      t.string :image
      t.string :description
      t.belongs_to :order, foreign_key: true
      t.timestamps
    end
  end
end
