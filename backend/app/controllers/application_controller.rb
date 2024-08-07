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
    Trip.create(
      title: params[:title],
      start_date: params[:start_date],
      end_date: params[:end_date],
      location_id: params[:location_id]
    )
    trip = Trip.order_by_start_date.includes(:activities, :location, :lodgings).all
    trip.to_json(include: %i[activities location lodgings],
                 methods: %i[total_activities_cost length_of_trip
                             total_cost_of_stay])
  end

  patch "/trips/:id" do
    trip = Trip.find(params[:id])
    trip.update(
      title: params[:title],
      start_date: params[:start_date],
      end_date: params[:end_date],
      location_id: params[:location_id]
    )
    trip = Trip.order_by_start_date.includes(:activities, :location, :lodgings)
    trip.to_json(include: %i[activities location lodgings],
                 methods: %i[total_activities_cost length_of_trip
                             total_cost_of_stay])
  end

  delete "/trips/:id" do
    trip = Trip.find(params[:id])
    trip.destroy
    trip.to_json
  end

  get "/activities" do
    activities = Activity.order_by_trip_title.includes(:trip)
    activities.to_json(include: { trip: { include: %i[location lodgings],
                                          methods: %i[total_activities_cost], } })
  end

  post "/activities" do
    Activity.create(
      name: params[:name],
      price: params[:price],
      date: params[:date],
      trip_id: params[:trip_id]
    )
    activities = Activity.order_by_trip_title.includes(:trip)
    activities.to_json(include: { trip: { include: %i[location lodgings],
                                          methods: %i[total_activities_cost], } })
  end

  get "/lodgings" do
    lodging_data = Lodging.lodging_data
    lodging_data.to_json
  end

  get "/locations" do
    location_data = Location.all
    location_data.to_json
  end

  get "/traveled_abroad" do
    abroad = Location.traveled_abroad
    abroad.to_json
  end
end
