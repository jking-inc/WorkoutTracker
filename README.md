# WorkoutTracker
App that logs your workout information

Install NPM

May also need nodemon, mongodb, mongoose, webpack(unlikely). 

To Run the application open a terminal or command prompt and change the directory to the file path where you saved the application then type in "nodemon".

** Current bugs **

1) Tabs don't stay highlighted when navigating between the tabs. Need to add the workouts for each paticular tab (i.e) chest workouts under the chest tab, leg workouts under the legs tab. 

2) Weight isn't displayed in the text field and the increase/decrease buttons no longer work after adding angular to the workouts list. Likely due to the weight Angular uses scopes. Will look more into that in the future and resolve this. 

3) Rep count buttons highlight on click but the information currently doesn't get stored into the database. 

4) Removed about and contact tabs from the nav bar due to an issue with express not able to locate the file paths. 

5) Delete feature has not been added at this time. 
