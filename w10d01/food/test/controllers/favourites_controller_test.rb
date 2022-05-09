require "test_helper"

class FavouritesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @favourite = favourites(:one)
  end

  test "should get index" do
    get favourites_url
    assert_response :success
  end

  test "should get new" do
    get new_favourite_url
    assert_response :success
  end

  test "should create favourite" do
    assert_difference('Favourite.count') do
      post favourites_url, params: { favourite: {  } }
    end

    assert_redirected_to favourite_url(Favourite.last)
  end

  test "should show favourite" do
    get favourite_url(@favourite)
    assert_response :success
  end

  test "should get edit" do
    get edit_favourite_url(@favourite)
    assert_response :success
  end

  test "should update favourite" do
    patch favourite_url(@favourite), params: { favourite: {  } }
    assert_redirected_to favourite_url(@favourite)
  end

  test "should destroy favourite" do
    assert_difference('Favourite.count', -1) do
      delete favourite_url(@favourite)
    end

    assert_redirected_to favourites_url
  end
end
