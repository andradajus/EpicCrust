class CreatePizzas < ActiveRecord::Migration[7.1]
  def change
    create_table :pizzas do |t|
      t.string :name
      t.decimal :price
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
