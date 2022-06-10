class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :name
      t.text :quote
      t.string :releasedate

      t.timestamps
    end
  end
end
