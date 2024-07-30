# frozen_string_literal: true

Trip.destroy_all
Activity.destroy_all
Location.destroy_all
Lodging.destroy_all

puts "🌱 Seeding locations..."
location1 = Location.create(country: "USA", state: "California", city: "Los Angeles")
location2 = Location.create(country: "USA", state: "New York", city: "New York City")
location3 = Location.create(country: "France", state: "", city: "Paris")

puts "🌱 Seeding trips..."
trip1 = Trip.create(title: "Beach Vacation", start_date: "2024-08-01", end_date: "2024-08-07",
                    location_id: location1.id)
trip2 = Trip.create(title: "City Break", start_date: "2024-09-10", end_date: "2024-09-15",
                    location_id: location2.id)
trip3 = Trip.create(title: "European Tour", start_date: "2024-10-05", end_date: "2024-10-20",
                    location_id: location3.id)

puts "🌱 Seeding lodgings..."
Lodging.create(lodging_type: "Hotel", name: "Beachside Resort", price_per_night: 150.0,
               check_in: "2024-08-01 15:00", check_out: "2024-08-07 11:00",
               trip_id: trip1.id)
Lodging.create(lodging_type: "Airbnb", name: "Downtown Apartment", price_per_night: 100.0,
               check_in: "2024-09-10 14:00", check_out: "2024-09-15 12:00",
               trip_id: trip2.id)
Lodging.create(lodging_type: "Hostel", name: "Central Hostel", price_per_night: 50.0,
               check_in: "2024-10-05 13:00", check_out: "2024-10-20 10:00",
               trip_id: trip3.id)

puts "🌱 Seeding actvities..."
Activity.create(name: "Surfing", price: 60.0, date: "2024-08-03", trip_id: trip1.id)
Activity.create(name: "Museum Visit", price: 20.0, date: "2024-09-12",
                trip_id: trip2.id)
Activity.create(name: "Eiffel Tower Visit", price: 25.0, date: "2024-10-10",
                trip_id: trip3.id)

puts "✅ Done seeding!"
