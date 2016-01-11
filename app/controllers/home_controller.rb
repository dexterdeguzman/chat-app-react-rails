class HomeController < ApplicationController
  def index
    @channels = current_user.channels
    @mychannels = Channel.where(owner_id: current_user.id)
  end
end
