class CreateCactus < ActiveRecord::Migration[6.1]
  def change
    create_table :cactus do |t|

      t.timestamps
    end
  end
end
