class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
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
  after_commit :create_cart, on: :create
  has_many :orders
  has_one :cart, dependent: :destroy

  private
  def create_cart
    build_cart unless cart.present?
    cart.save!
  end

  def set_role_as_customer
    update(role: 'customer') if role.nil?
  end
end
