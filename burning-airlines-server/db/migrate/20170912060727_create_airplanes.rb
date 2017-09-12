class CreateAirplanes < ActiveRecord::Migration[5.1]
  def change
    create_table :airplanes do |t|
      t.string :name
      t.string :rows
      t.string :cols

      t.timestamps
    end
  end
end
