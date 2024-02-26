class Cart < ApplicationRecord
  belongs_to :user
  belongs_to :order
  belongs_to :pizza
end
