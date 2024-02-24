class OrdersController < ApplicationController
  def new
    @order = Order.new
    render json: @order
  end

  def create
    @order = Order.new(order_params)
    if @order.save
      redirect_to @order, notice: 'Order was successfully created.'
    else
      render json: @order
    end
  end

  private

  def order_params
    params.require(:order).permit(:order_reference_number, :total_price, :status, :customer_id, :user_id, pizza_ids: [])
  end
end
