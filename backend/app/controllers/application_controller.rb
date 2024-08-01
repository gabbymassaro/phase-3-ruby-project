# frozen_string_literal: true

class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  get "/trips" do
    trips = Trip.order_by_start_date.includes(:activities, :location, :lodgings).all
    trips.to_json(include: %i[activities location lodgings],
                  methods: %i[total_activities_cost length_of_trip
                              total_cost_of_stay])
  end

  get "/trips/:id" do
    trip = Trip.find(params[:id])
    trip.to_json(include: %i[activities location lodgings])
  end

  post "/trips" do
    trip = Trip.create(
      title: params[:title],
      start_date: params[:start_date],
      end_date: params[:end_date],
      location_id: params[:location_id]
    )
    trip.to_json(include: %i[activities location lodgings], methods: %i[total_activities_cost length_of_trip
    total_cost_of_stay])
  end

  patch "/trips/:id" do
    trips = Trip.find(params[:id])
    trips.update(
      title: params[:title],
      start_date: params[:start_date],
      end_date: params[:end_date],
      location_id: params[:location_id]
    )
    trips = Trip.order_by_start_date.includes(:activities, :location, :lodgings)
    trips.to_json(include: %i[activities location lodgings], methods: %i[total_activities_cost length_of_trip total_cost_of_stay])
  end

  delete "/trips/:id" do
    trips = Trip.find(params[:id])
    trips.destroy
    trips.to_json
  end

  get "/activities" do
    activities = Activity.order_by_trip_title
    activities.to_json(include: %i[trip])
  end

  post "/activities" do
    activities = Activity.create(
      name: params[:name],
      price: params[:price],
      date: params[:date],
      trip_id: params[:trip_id]
    )
    activities = Activity.order_by_trip_title
    activities.to_json(include: %i[trip])
  end

  get "/lodgings" do
    lodgings = Lodging.all
    lodgings.to_json
  end

  get "/locations" do
    locations = Location.all
    locations.to_json
  end
end
