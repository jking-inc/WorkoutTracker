# WorkoutTracker
App that logs your workout information

Run the following two commands to clone the app then install all NPM dependencies.

git clone https://github.com/jking-inc/WorkoutTracker.git
$ npm-install-all

To Run the application open a terminal or command prompt and change the directory to the file path where you saved the application then start mongodb "mongod" then open another terminal or command prompt window and type in "nodemon". The application should be running now and then you will need to open a browser and go to localhost:3000.

** Current bugs **

** Tabs don't stay highlighted when navigating between the tabs. Need to add the workouts for each paticular tab (i.e) chest workouts under the chest tab, leg workouts under the legs tab.

** Rep count buttons highlight on click but the information currently doesn't get stored into the database.

** Nav bar tab doesn't change color based on the selected tab. The input fields are just place holders until the backend code is added.

** Delete link doesn't save to the database, it currently just removes the list item from the DOM.
