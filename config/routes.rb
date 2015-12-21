Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }

  authenticated :user do
    root 'home#index', as: :authenticated_root
  end

  unauthenticated do
    devise_scope :user do
      root 'users/sessions#new', as: :unauthenticated_root
    end
  end
end
