Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: 'users/registrations'
  }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  get "api/users" => "users#index"
  post "api/pizzas" => "pizzas#create"
  get "api/pizzas" => "pizzas#index"
  patch "api/pizzas/:id/update_true" => "pizzas#update_availability_true"
  patch "api/pizzas/:id/update_false" => "pizzas#update_availability_false"
  get "api/orders" => "orders#index_orders"
  get "api/cart" => "orders#index_cart"
  post "api/add_to_cart" => "orders#add_to_cart"
  # Defines the root path route ("/")
  # root "posts#index"
end
