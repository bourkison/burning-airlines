class AddSeatnumberToReservation < ActiveRecord::Migration[5.1]
  def change
    add_column :reservations, :seatnumber, :integer
  end
end
