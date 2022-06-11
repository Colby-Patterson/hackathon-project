class Api::TvshowsController < ApplicationController
  before_action :set_tvshow, only:[:show, :update, :destroy]

def index 
  #tvshows=Tvshow.all
  render json: Tvshow.all
end

def show
  render json: @tvshow
end

def create
  @tvshow = Tvshow.new(tvshow_params)
  if @tvshow.save
    render json: @tvshow
  else
    render json:{ errors: @tvshow.errors.full_messages,status:422}
 end
end

def update
  if @tvshow.update(tvshow_params)
    render json: @tvshow
  else
  end
end

def destroy
  render json: @tvshow.destroy
#  if @tvshow.destroy
#   render json: @tvshow
#  else
#  end
end
  


private

  def set_tvshow
    @tvshow = Tvshow.find(params[:id])
  end

  def tvshow_params 
    params.require(:tvshow).permit(:name,:qoute,:releasedate)
  end
end

