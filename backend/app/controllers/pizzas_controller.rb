class PizzasController < ApplicationController
  def index
    @pizzas = Pizza.all
    render json: @pizzas
  end
  def create
    pizzas = []
    pizza_params[:pizza].each do |pizza_data|
      pizza = Pizza.new(pizza_data)
      if pizza.save
        pizzas << pizza
      else
        render json: { error: pizza.errors.full_messages }, status: :unprocessable_entity
        return
      end
    end

    render json: { pizzas: pizzas }, status: :created
  end

  private

  def pizza_params
    params.permit(pizza: [:name, :price, :image, :description, :size])
  end
end
