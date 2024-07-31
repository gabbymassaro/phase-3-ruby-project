# frozen_string_literal: true

class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  get "/trips" do
    trips = Trip.includes(:activities, :location, :lodgings).all
    trips.to_json(include: %i[activities location lodgings])
  end

  get "/trips/:id" do
    trips = Trip.find(params[:id])
    trips.to_json
  end

  get "/locations" do
    locations = Location.all
    locations.to_json
  end

  get "/activities" do
    activities = Activity.includes(:trip).all
    activities.to_json(include: %i[trip])
  end

  get "/lodgings" do
    lodgings = Lodging.all
    lodgings.to_json
  end

  post "/trips" do
    trip = Trip.create(
      title: params[:title],
      start_date: params[:start_date],
      end_date: params[:end_date],
      location_id: params[:location_id]
    )
    trip.to_json(include: %i[activities location lodgings])
  end

  post "/activities" do
    activity = Activity.create(
      name: params[:name],
      price: params[:price],
      date: params[:date],
      trip_id: params[:trip_id]
    )
    activity.to_json(include: %i[trip])
  end

  patch "/trips/:id" do
    trips = Trip.find(params[:id])
    trips.update(
      title: params[:title],
      start_date: params[:start_date],
      end_date: params[:end_date],
      location_id: params[:location_id]
    )
    trips.to_json(include: %i[activities location lodgings])
  end

  delete "/trips/:id" do
    trips = Trip.find(params[:id])
    trips.destroy
    trips.to_json
  end
end
