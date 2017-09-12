class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.string :row
      t.string :col
      t.integer :user_id
      t.integer :flight_id

      t.timestamps
    end
  end
end
