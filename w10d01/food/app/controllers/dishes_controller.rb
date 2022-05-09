class DishesController < ApplicationController
  def index
    @category = Category.find params[:category_id]

    @dishes = @category.dishes
  end
end
