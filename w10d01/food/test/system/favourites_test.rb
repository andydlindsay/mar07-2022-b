require "application_system_test_case"

class FavouritesTest < ApplicationSystemTestCase
  setup do
    @favourite = favourites(:one)
  end

  test "visiting the index" do
    visit favourites_url
    assert_selector "h1", text: "Favourites"
  end

  test "creating a Favourite" do
    visit favourites_url
    click_on "New Favourite"

    click_on "Create Favourite"

    assert_text "Favourite was successfully created"
    click_on "Back"
  end

  test "updating a Favourite" do
    visit favourites_url
    click_on "Edit", match: :first

    click_on "Update Favourite"

    assert_text "Favourite was successfully updated"
    click_on "Back"
  end

  test "destroying a Favourite" do
    visit favourites_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Favourite was successfully destroyed"
  end
end
