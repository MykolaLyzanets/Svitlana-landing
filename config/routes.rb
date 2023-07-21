Rails.application.routes.draw do
  root 'homes#index'

  get '/css/home.css', to: 'homes#index', format: :css

  # Додати маршрут для home.js
  get '/home.js', to: 'homes#index', format: :js
end
