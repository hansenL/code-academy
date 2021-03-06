class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    if user.save
      render :json => user
    else
      render :json => user.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    User.find(params[:id]).destroy
  end

  def index
    render :json => User.all
  end

  def show
    render :json => User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    if user.update_attributes(user_params)
      render :json => user
    else
      render :json => user.errors, :status => :unprocessable_entity
    end
  end

    private
    def user_params
      params.require(:user).permit(:name, :email)
    end
end
