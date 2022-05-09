class CreateFavourites < ActiveRecord::Migration[6.1]
  def change
    create_table :favourites do |t|

      t.timestamps
    end
  end
end
