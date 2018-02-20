# Bears-10 Cohort Project

## Project Set Up

### Fork and then clone *your version* of the repo

### Install Node Modules in BOTH the outside directory and inside the client folder

    npm install
    cd client
    npm install
    cd ..

### Insert MongoDB URI into server/config/dev.js

Enter the URI string (will I will send in slack channel) into the string to hook up the MongoDB database. After doing so, add *server/config/dev.js* to the .gitignore (the one not in the client folder) to hide this URI dev key from the github repo.

### Start the Local Development Server(s)

    npm run dev

* This npm run dev command will run both the create-react-app server and the express back-end server at the same time.
* create-react-app server runs on localhost:3000
* back-end express server runs on localhost:5000