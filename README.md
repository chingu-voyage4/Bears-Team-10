# Bears-10 Cohort Project

![rocketimage](client/src/images/launch.svg)


## Project Set Up

### Fork and then clone *your version* of the repo

### Install Node Modules in BOTH the outside directory and inside the client folder

    npm install
    cd client
    npm install
    cd ..

### Start the Local Development Server(s)

    npm run dev

* This npm run dev command will run both the create-react-app server and the express back-end server at the same time.
* create-react-app server runs on localhost:3000
* back-end express server runs on localhost:5000

### Testing with Jest
    npm test -- --watch

* This command keeps Jest running and hot-reloads test results when changes are made
* Jest can also be ran without hot-reloading with the command npm test
