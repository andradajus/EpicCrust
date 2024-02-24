class Order < ApplicationRecord
  before_create :generate_order_reference_number

  belongs_to :customer, optional: true
  belongs_to :user, optional: true
  has_many :order_pizzas
  has_many :pizzas, through: :order_pizzas

  private
  def generate_order_reference_number
    self.order_reference_number = SecureRandom.random_number(1_000_000_000..9_999_999_999).to_s
  end
end
