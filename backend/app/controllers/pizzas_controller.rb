class PizzasController < ApplicationController
  def index
    @pizzas = Pizza.all
    render json: @pizzas
  end
  def create
    pizzas = []
    pizza_params[:pizzas].each do |pizza_data|
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

  def update_availability_true
    @pizza = Pizza.find(params[:id])
    @pizza.update(is_available: true)
    render json: @pizza
  end

  def update_availability_false
    @pizza = Pizza.find(params[:id])
    @pizza.update(is_available: false)
    render json: @pizza
  end

  private

  def pizza_params
    params.permit(pizzas: [:name, :price, :image, :description, :size])
  end
end
