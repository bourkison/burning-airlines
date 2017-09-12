json.extract! flight, :id, :flight_number, :date, :to, :from, :airplane_id, :created_at, :updated_at
json.url flight_url(flight, format: :json)
