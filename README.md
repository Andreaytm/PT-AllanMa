# Allan Ma -PT

## Overview

### What is this Site for?

This is a website for a client promoting his personal training business. Users will find information on nutrition and services offered by the client with a map and contact form for users to get in touch.


## Features 

### Features to Implement
- Navigation Features 
	- Home
	- About Me 
	- Your Workout
	- Nutrition
	- FAQ
	- Contact Me

- User Interactive Features
	- Contact Me Form
	- Rotational Gallery
	- Mobile Responsive Design

- Features TBC
	- Potential Video
	- Accordian Panels


## Tech Used

### Some of the tech used includes:
- [AngularJS](https://angularjs.org/)
	- We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives. 
- [Bootstrap](https://getbootstrap.com/)
	- We use **Bootstrap** to give our project a simple, responsive layout
- [jQuery](https://jquery.com) 
	-We use **jQuery** to provide user interactivity with the site.
- [npm](https://www.npmjs.com/)
	- We use **npm** to help manage some of the dependencies in our application. 
- [bower](https://bower.io/)
	- **Bower** is used to manage the installation of our libraries and frameworks.

## Contributing 

### Getting the code up and running 
1. Firstly you will need to clone this repository by running the ```git clone <https://github.com/Andreaytm/S1-project>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed 
	1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
	2. Once you've done this you'll need to run the following command: 
	`npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
	```

	npm install

	bower install 

	```
4. After those dependencies have been isntalled you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request
