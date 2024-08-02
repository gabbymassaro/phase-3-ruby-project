# Travel Planner App

## Description

Welcome to your personal travel planner! This app acts as a simple itinerary for all of your travels. This is application uses React as its frontend and Ruby/Sinatra on the backend. 
## Features By Page

- **Welcome**:
	- Landing page
- **Create New Trip:**
	- Select your location, enter a trip name, select start/end dates
	- Submit to create your new trip (POST)
- **My Trips:**
	- View all of your past/present/future trips here
		- Trips are displayed in order of earliest start date
		- Total Cost of Stay, Total Cost of Activities, Length of Trip are calculated on the fly in the same table view
	- Update the name of your trip and/or the duration of your trip (start/end dates) (PATCH)
	- Delete a trip (DELETE)
- **Activities:**
	- A list of all the activities on all of your trips, ordered by alphabetical Trip Name
	- Create a new activity
		- Select an existing trip
		- Enter a new activity name
		- Enter the price of the activity
		- Select the date you will be doing the activity
		- Submit to create your new activity (POST)
- **Stats:** 
	- A read only page with data based on your travels

## Set Up
This application requires the use of two ports, you'll need to have two independent terminal sessions. One for 'backend' and one for 'frontend'. Please follow these steps:

- Clone this repository `git@github.com:gabbymassaro/phase-3-ruby-project.git`
#### Backend: 

- CD into the `backend` folder
- Run `$bundle exec install`
- Run `$bundle exec rake db:migrate`
- Run `$bundle exec rake db:seed`
- Run `$bundle exec rake server`

#### Frontend: 
- CD into the `frontend` folder
- Run `npm install`
- Run `npm start`

### DB Diagram:
![db_diagram](https://github.com/user-attachments/assets/b71354b3-d899-442d-9228-e3ef126135b3)


## Credits
- This app was created by Gabriella Massaro.
