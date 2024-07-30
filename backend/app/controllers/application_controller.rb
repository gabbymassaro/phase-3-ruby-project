# frozen_string_literal: true

class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  get "/trips" do
    trips = Trip.includes(:activity, :location, :lodging)
    trips.to_json(include: %i[activity location lodging])
  end

  get "/locations" do
    locations = Location.all
    locations.to_json
  end

  get "/activities" do
    activities = Activity.all
    activities.to_json
  end

  get "/lodgings" do
    lodgings = Lodging.all
    lodgings.to_json
  end

  post "/trips" do
    trips = Trip.create(
      title: params[:title],
      start_date: params[:start_date],
      end_date: params[:end_date],
      location_id: params[:location_id],
      activity_id: params[:activity_id],
      lodging_id: params[:lodging_id]
    )
    trips.to_json
  end
end
