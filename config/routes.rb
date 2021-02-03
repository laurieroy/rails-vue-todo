Rails.application.routes.draw do
  resources :tasks
  root 'welcome#home'
end
