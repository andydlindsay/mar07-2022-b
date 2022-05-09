Rails.application.routes.draw do
  resources :favourites
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # GET /login
  # get 'login', to: 'users#index'
  # get 'login', action: :index, controller: 'users'

  # resources :categories, except: [:create, :destroy]
  # resources :categories

  # resources :dishes

  resources :categories do
    resources :dishes
  end
end
