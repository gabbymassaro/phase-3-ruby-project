# frozen_string_literal: true

class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  # Add your routes here
  get "/trips" do
    trips = Trip.includes(:activity, :location, :lodging)
    trips.to_json(include: %i[activity location lodging])
  end
end
