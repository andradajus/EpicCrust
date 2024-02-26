class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
  :registerable,
  :recoverable,
  :rememberable,
  :validatable,
  :jwt_authenticatable,
  jwt_revocation_strategy: self

  after_create :set_role_as_customer
  after_create :create_cart
  has_many :orders

  private
  def create_cart
    build_order_pizza unless order_pizza.present?
    order_pizza.save!
  end

  def set_role_as_customer
    update(role: 'customer') if role.nil?
  end
end
