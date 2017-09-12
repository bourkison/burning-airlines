class CreateFlights < ActiveRecord::Migration[5.1]
  def change
    create_table :flights do |t|
      t.integer :flight_number
      t.date :date
      t.string :to
      t.string :from
      t.integer :airplane_id

      t.timestamps
    end
  end
end
