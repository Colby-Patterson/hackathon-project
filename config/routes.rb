Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do

  get '/movies', to: 'movies#index' # return all movies
  post '/movies', to: 'movies#create' # create a dish {name(required), price, descrption}
  get '/movies/:id', to:'movies#show' # return 1 dish
  put '/movies/:id', to:'movies#update' # update 1 dish {name(required), price, descrption}
  delete '/movies/:id', to:'movies#destroy' # destroy 1 dish

  get '/tvshows', to:'tvshows#index'
  post '/tvshows', to:'tvshows#create'
  get '/tvshows/:id', to:'tvshows#show'
  put '/tvshows/:id', to:'tvshows#update'
  delete '/tvshows/:id', to:'tvshows#destroy'
  
  get '/books', to:'books#index'
  post '/books', to:'books#create'
  get '/books/:id', to:'books#show'
  put '/books/:id', to:'books#update'
  delete '/books/:id', to:'books#destroy'

  end
end
