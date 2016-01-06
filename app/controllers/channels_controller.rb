class ChannelsController < ApplicationController
  def index
  end

  def new
    @channels = current_user.channels
    @channel = Channel.new
  end
end
