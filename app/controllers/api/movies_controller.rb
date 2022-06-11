class Api::MoviesController < ApplicationController
    before_action :set_movie, only: [:show, :update, :destroy]

    # get '/appi/movie'
    def index 
    render json: Movie.all
    end
    
    # get one movie
    def show 
        render json: @movie
    end

    # create new movie
    def create
        @movie =Movie.new(movie_params)
        if @movie.save
            render json: @movie
        else
            render json: {errors: @user.errors.full_messages}, status: 422
        end
    end

    #put to update movie
    def update
        if @movie.update(movie_params)
            render json: @movie
        else
            render json: {errors: @user.errors.full_messages}, status: 422
        end
    end

    # delete movie
    def destroy
        render json: @movie.destroy
    end

    private

    def set_movie
        @movie = Movie.find(params[:id])
    end

    def movie_params
        params.require(:movie).permit(:name, :quote, :releasedate)
    end
end
