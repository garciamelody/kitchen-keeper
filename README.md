# Kitchen Keeper

An app designed to help keep recipes organized and keep an inventory of ingredients.

![kitchen-keeper](https://user-images.githubusercontent.com/102616304/208152468-d338f3d2-1abb-49d6-ba67-a7106228905c.gif)

The user can edit their recipe cards easily.

![kitchen-keeper2](https://user-images.githubusercontent.com/102616304/208154869-d3749d3e-ea10-4b55-b8a1-6f6f7f5aa639.gif)


Ingredients and instructions can be marked as the user works on their recipe to help them keep track.

![kitchen-keeper3](https://user-images.githubusercontent.com/102616304/208155465-2e81241e-842c-4cb6-abe4-e13ecc2c1097.gif)

Users can create new recipes and easily add as many input fields as their recipes require.

![kitchen-keeper4](https://user-images.githubusercontent.com/102616304/208156310-94d190d8-0e77-450f-8e25-1ba4d4f0c61a.gif)

Users can organize their pantry items based on storage categories. Users can add the weight and quantities of each item.
Users can also edit their pantry item specifications or remove items entirely from their pantry tracker.
![kitchen-keeper5](https://user-images.githubusercontent.com/102616304/208170906-bd5a2a84-0e77-4f0c-82c2-ed1c8f25adb5.png)


# What is it made with?
EJS, Javascript, CSS, Node.js, Express.js, MongoDB, Mongoose

# EJS
This app uses EJS to generate HTML using Javascript, allowing the app to render recipes and pantry items based on user data.

# Javascript
Javascript handles what happens when the user interacts with things like buttons. It removes recipe ingredients or instructions as the user 
edits their recipe. It also appends new inputs to the recipe card page, allowing users to add more ingredients and instructions as needed.

# Node.js
Node.js is responsible for the server-side aspect. It uses Javascript to build scalable applications.

# Express.js
Express.js is a framework for Node.js that comes with lots of features. It is responsible for routing and middleware throughout the app.

# MongoDB
MongoDB is the database that stores users' data, such as the data tied to recipe cards and pantry items.

# Mongoose
Mongoose is responsible for defining Schema Objects that map directly to MongoDB. Organizing user data this way makes it easy to reference 
throughout the app. 

# What architecture is used?
MVC architecture organizes the app into three components: Model, View, and Controller. 

The View component holds all of the ejs files the user sees and interacts with.

The Model component holds all of the Mongo schemas that give structure to our user data. It is responsible for adding and retrieving data from the database.

The controller component acts as the middleman between the Model and View components. The Controller will process requests made through 
View components and relay requests related to data to the Model component. The model component will then retrieve the data needed and "pass it" 
to the Controller, which will then interact with the View component to have the data rendered in HTML.
