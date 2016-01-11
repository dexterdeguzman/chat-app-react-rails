class ChannelsController < ApplicationController
  def index
  end

  def new
    @channels = current_user.channels
    @channel = Channel.new
    @mychannels = Channel.where(owner_id: current_user.id)
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.owner_id = current_user.id
    if @channel.save
      redirect_to authenticated_root_path 
    else
      render :new
    end
  end

  private
    def channel_params
      params.require(:channel).permit(:name, :owner_id)
    end
end
