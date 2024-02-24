class Pizza < ApplicationRecord
  has_many :order_pizzas
  has_many :orders, through: :order_pizzas

  after_create :set_pizza_availability

  private
  def set_pizza_availability
    update(is_available: 'false') if is_available.nil?
  end
end
