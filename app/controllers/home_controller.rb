class HomeController < ApplicationController
  def index
    @channel = Channel.all
  end
end
