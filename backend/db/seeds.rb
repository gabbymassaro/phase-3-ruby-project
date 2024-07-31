# frozen_string_literal: true

Trip.destroy_all
Activity.destroy_all
Location.destroy_all
Lodging.destroy_all

puts "🌱 Seeding locations..."
location1 = Location.create(country: "USA", state: "California", city: "Los Angeles")
location2 = Location.create(country: "USA", state: "New York", city: "New York City")
location3 = Location.create(country: "France", state: "", city: "Paris")
location4 = Location.create(country: "Japan", state: "", city: "Tokyo")
location5 = Location.create(country: "Australia", state: "New South Wales", city: "Sydney")
location6 = Location.create(country: "Brazil", state: "Rio de Janeiro", city: "Rio de Janeiro")

puts "🌱 Seeding trips..."
trip1 = Trip.create(title: "Beach Vacation", start_date: "2024-08-01", end_date: "2024-08-07",
                    location_id: location1.id)
trip2 = Trip.create(title: "City Break", start_date: "2024-09-10", end_date: "2024-09-15",
                    location_id: location2.id)
trip3 = Trip.create(title: "European Tour", start_date: "2024-10-05", end_date: "2024-10-20",
                    location_id: location3.id)
trip4 = Trip.create(title: "Tokyo Adventure", start_date: "2024-11-01", end_date: "2024-11-10",
                    location_id: location4.id)
trip5 = Trip.create(title: "Sydney Exploration", start_date: "2024-12-01", end_date: "2024-12-10",
                    location_id: location5.id)
trip6 = Trip.create(title: "Rio Carnival", start_date: "2024-02-10", end_date: "2024-02-20",
                    location_id: location6.id)

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
Lodging.create(lodging_type: "Hotel", name: "Shibuya Hotel", price_per_night: 200.0,
               check_in: "2024-11-01 15:00", check_out: "2024-11-10 11:00",
               trip_id: trip4.id)
Lodging.create(lodging_type: "Hotel", name: "Sydney Harbour Hotel", price_per_night: 180.0,
               check_in: "2024-12-01 15:00", check_out: "2024-12-10 11:00",
               trip_id: trip5.id)
Lodging.create(lodging_type: "Hotel", name: "Copacabana Palace", price_per_night: 250.0,
               check_in: "2024-02-10 15:00", check_out: "2024-02-20 11:00",
               trip_id: trip6.id)

puts "🌱 Seeding activities..."
Activity.create(name: "Surfing", price: 60.0, date: "2024-08-03", trip_id: trip1.id)
Activity.create(name: "Beach Volleyball", price: 0.0, date: "2024-08-04", trip_id: trip1.id)
Activity.create(name: "Sunset Cruise", price: 40.0, date: "2024-08-05", trip_id: trip1.id)

Activity.create(name: "Museum Visit", price: 20.0, date: "2024-09-12", trip_id: trip2.id)
Activity.create(name: "Broadway Show", price: 120.0, date: "2024-09-13", trip_id: trip2.id)
Activity.create(name: "Central Park Picnic", price: 0.0, date: "2024-09-14", trip_id: trip2.id)

Activity.create(name: "Eiffel Tower Visit", price: 25.0, date: "2024-10-10", trip_id: trip3.id)
Activity.create(name: "Louvre Museum Tour", price: 30.0, date: "2024-10-12", trip_id: trip3.id)
Activity.create(name: "Seine River Cruise", price: 20.0, date: "2024-10-15", trip_id: trip3.id)
Activity.create(name: "Wine Tasting", price: 50.0, date: "2024-10-18", trip_id: trip3.id)

Activity.create(name: "Tsukiji Fish Market Tour", price: 45.0, date: "2024-11-02",
                trip_id: trip4.id)
Activity.create(name: "Tokyo Tower Visit", price: 20.0, date: "2024-11-04", trip_id: trip4.id)
Activity.create(name: "Shibuya Crossing Experience", price: 0.0, date: "2024-11-06",
                trip_id: trip4.id)
Activity.create(name: "Sushi Making Class", price: 70.0, date: "2024-11-08", trip_id: trip4.id)

Activity.create(name: "Sydney Opera House Tour", price: 35.0, date: "2024-12-02", trip_id: trip5.id)
Activity.create(name: "Bondi Beach Day", price: 0.0, date: "2024-12-04", trip_id: trip5.id)
Activity.create(name: "Blue Mountains Hike", price: 50.0, date: "2024-12-06", trip_id: trip5.id)
Activity.create(name: "Sydney Harbour Bridge Climb", price: 150.0, date: "2024-12-08",
                trip_id: trip5.id)

Activity.create(name: "Christ the Redeemer Visit", price: 30.0, date: "2024-02-11",
                trip_id: trip6.id)
Activity.create(name: "Samba Dance Class", price: 60.0, date: "2024-02-13", trip_id: trip6.id)
Activity.create(name: "Sugarloaf Mountain Tour", price: 40.0, date: "2024-02-15", trip_id: trip6.id)
Activity.create(name: "Carnival Parade", price: 100.0, date: "2024-02-18", trip_id: trip6.id)

puts "✅ Done seeding!"
