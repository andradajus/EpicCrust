class OrdersController < ApplicationController

  def index_cart
    @cart = OrderPizza.all
    render json: @cart
  end

  def index_orders
    @orders = Order.all
    render json: @orders
  end
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

  def add_to_cart
    pizza_id = params[:pizza_id]
    if current_user.present?
      @order = current_user.orders.in_progress.first_or_create
      @order_pizza = @order.order_pizzas.find_or_create_by(pizza_id: pizza_id)
    else
      @order = Order.in_progress.first_or_create
      @order_pizza = @order.order_pizzas.find_or_create_by(pizza_id: pizza_id)
    end

    render json: { notice: 'Pizza added to cart successfully.' }
  end


  private

  def order_params
    params.require(:order).permit(:order_reference_number, :total_price, :status, :customer_id, :user_id, pizza_ids: [])
  end
end
