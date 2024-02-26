class UsersController < ApplicationController
  def index
    @users = User.includes(orders: :order_pizza).all
    render json: @users, include: { orders: { include: { order_pizza: { only: :order_id } } } }
  end
end
