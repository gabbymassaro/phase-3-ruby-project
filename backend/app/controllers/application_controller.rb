# frozen_string_literal: true

class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  get "/trips" do
    # trips = Trip.includes(:activity, :location, :lodging)
    # trips.to_json(include: %i[activity location lodging])
    trips = Trip.includes(:activities, :location, :lodgings).all
    trips.to_json(include: {
                    activities: { only: %i[id name price date] },
                    location: { only: %i[id country state city] },
                    lodgings: { only: %i[id lodging_type name price_per_night check_in check_out] },
                  })
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
    activities = Activity.all
    activities.to_json
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
    trip.to_json(include: {
                   location: { only: %i[id country state city] },
                   activities: { only: %i[id name price date] },
                   lodgings: { only: %i[id lodging_type name price_per_night check_in check_out] },
                 })
  end

  patch "/trips/:id" do
    trips = Trip.find(params[:id])
    trips.update(
      title: params[:title],
      start_date: params[:start_date],
      end_date: params[:end_date],
      location_id: params[:location_id]
    )
    trips.to_json(include: {
                    location: { only: %i[id country state city] },
                    activities: { only: %i[id name price date] },
                    lodgings: { only: %i[id lodging_type name price_per_night check_in check_out] },
                  })
  end
end
