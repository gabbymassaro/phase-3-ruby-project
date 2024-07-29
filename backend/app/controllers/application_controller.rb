# frozen_string_literal: true

class ApplicationController < Sinatra::Base
  set :default_content_type, "application/json"

  # Add your routes here
  get "/trips" do
    trips = Trip.all
    trips.to_json
  end
end
