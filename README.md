# WorkoutTracker
App that logs your workout information

Install NPM, nodemon, mongodb and mongoose.

To Run the application open a terminal or command prompt and change the directory to the file path where you saved the application then start mongodb "mongod" then open another terminal or command prompt window and type in "nodemon". The application should be running now and then you will need to open a browser and go to localhost:3000.

** Current bugs **

1) Tabs don't stay highlighted when navigating between the tabs. Need to add the workouts for each paticular tab (i.e) chest workouts under the chest tab, leg workouts under the legs tab.

2) Weight isn't displayed in the text field and the increase/decrease buttons no longer work after adding angular to the workouts list. Likely due to the weight Angular uses scopes. Will look more into that in the future and resolve this.

3) Rep count buttons highlight on click but the information currently doesn't get stored into the database.

4) "About" and "Contact" links from the nav bar currently don't work due to an issue with express not able to locate the correct file path to the HTML docs.  

5) The app is saving the new workout but it's not saving the text when it's typed in. It's writing a new entry to the database however. Delete feature working at this time.
