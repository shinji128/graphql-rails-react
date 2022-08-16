Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "graphql#execute"
  end
  post "/graphql", to: "graphql#execute"
  root to: 'site#index'

  # namespace :api do
  #   resources :tasks, only: %i[index show create destroy update]
  # end
end
