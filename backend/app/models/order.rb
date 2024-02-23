class Order < ApplicationRecord
  has_many :pizzas
  belongs_to :customer, optional: true
  belongs_to :user, optional: true
end
