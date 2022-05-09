class CreateDishes < ActiveRecord::Migration[6.1]
  def change
    create_table :dishes do |t|
      t.string :name
      t.string :description
      t.references :category, foreign_key: true, index: true

      t.timestamps
    end
  end
end
