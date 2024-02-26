class Cart < ApplicationRecord
  belongs_to :user
  belongs_to :pizza, optional: true
  has_many :orders

  validates :user, presence: true
  validates :quantity, presence: true
end
