class HomeController < ApplicationController
  def index
    @channel = current_user.channels
  end
end
