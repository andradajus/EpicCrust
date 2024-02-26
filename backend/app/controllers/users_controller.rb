class UsersController < ApplicationController
  before_action :authenticate_user!
  def index
    @users = User.includes(orders: :cart).all
    render json: @users, include: {
      orders: {
        include: {
          cart: { only: :order_id }
        }
      },
      cart: { only: :order_id }
    }
  end

  def current_user_order_id
    if current_user.present?
      cart_id = current_user.cart&.id
      if cart_id.present?
        render json: { cart_id: cart_id }
      else
        render json: { error: 'No cart found for the current user' }, status: :not_found
      end
    else
      render json: { error: 'User not authenticated' }, status: :unauthorized
    end
  end
end
