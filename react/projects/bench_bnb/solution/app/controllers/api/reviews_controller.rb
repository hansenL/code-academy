class Api::ReviewsController < ApplicationController
  def create
    review = Review.new(review_params)

    if review.save
      render json: review.bench, include: :reviews
    else
      render json: review, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :bench_id)
  end
end
