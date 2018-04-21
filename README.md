# Stream 1 Project -Personal Training Website

## Overview

### About Personal Training -Allan Ma
This is a responsive website for a client promoting his personal training business, with information on what he offers, visuals to excite potential customers, general information on personal training and a contact me form and visual google map allowing the user to get in touch.

## Features

- General Site Navigation
	- Home
	- About Me
	- Your Workout
	- FAQ
	- Contact Me
	
- User Based Features
	- Contact Me Form
	- Gallery (Rotational Carousel)
	- Interactive Map
	- Video
	- Audio Tracks

## Development
- Planning 
	- I had an initial conversation with the client, who detailed aspects he required of the site, a contact form for potential customers to get in touch, some information about him as a personal trainer a general page for what personal training involves a FAQ and some images around exercise. 
	- I used [Pencil](https://pencil.evolus.vn/) to create **wireframes** for the project instead of [Balsamiq](https://balsamiq.com/) due to the trial expiring, and shown these to the client. I talked through the pages, and noted changes required to reflect my clients needs. Some initial aspects that have changed over time include: 
		- the removal of a page on nutrition as the client deemed that although important, he is not a nutritionist there is not much to say on this aspect
		- selection of styling color-scheme and images to be displayed 
		- layout of content within the page 
		- inclusion of an interactive GoogleMap page
		- inclusion of tabs at bottom of HomePage so to have alternative navigation
		- inclusion of return to top button at bottom of pages
		- decision to use a pop-up thankyou message instead of routing to a thank you page

-Testing
	- Iterative testing has been included throughout the process of the project through observation of complex changes on [localhost](http://127.0.0.1:8080) this was shared iteratively with the client especially once new functionality was built in the project.
	- Checking syntax for errors against existing [Code Institute](https://www.codeinstitute.net/) learnt code
	- Validation of syntax through [CSS](http://jigsaw.w3.org/css-validator/) and [HTML](https://validator.w3.org/) Validators and of JavaScript code on [JSHint](jshint.com)
	- Used ```CTRL+SHIFT+P``` to reindent tabs to ensure code is structured cleanly.
	- Checked console for errors in JavaScript.
	- Installed various browsers: Opera, IE, Edge, Firefox, Chrome for testing for cross-compatibility in various platforms and devices: Android, Apple ipad and iphone.

- Implementation
	- For mobile responsiveness and font and image-sizing I referred to best practice discussed on StackOverflow and ensured font-size was 16px = 1em. Initially I had thought of keeping this font for all devices however have decided to alter font sizes for each device upon reflection and through conversation with the client. I have also included a line-height of 1.25em for easy legibility of paragraphs on mobile devices.
	- Minor stylistic aspects have been included in the design such as [font-awesome](https://fontawesome.bootstrapcheatsheets.com/) glyphicons instead of standard Bootstrap glyphicons, and social media icons have been provided by [Axialis](https://www.axialis.com/free/icons). 
	- Images were taken from free stockphoto website [Pexels](https://www.pexels.com) and from personal photos taken by the client.
	- Video clips were taken from free stockvideo website [Pexels](https://videos.pexels.com).

	- Other changes included excluding services and directives in the use of AngularJS and not including a0-angular-storage bower-components. These decisions were made as they were not required for the implementation of the website as it does not require REST API, access to data in local storage, or need for API calls.

- Challenges/ Reflections for next project
	- To be patient with Github especially with rendering the website for the first time.
	- To deploy only when website is near completion. 
	- To test even more regularly especially with IE11 and Apple which has compatibility issues.

- Finalisation 
	- The project is deployed on GitHub and is accessible through [andreaytm.github.io/PT-AllanMa/](https://andreaytm.github.io/PT-AllanMa/).
	- A 404 page has been used to redirect the user back to the homepage on 404 and refresh errors due to routing of AngularJS. 


## Technologies Used
- [AngularJS](https://angularjs.org/) to manage page routing with angular-route.
- [Bootstrap](https://getbootstrap.com/) provides responsive simplistic layouts.
- [jQuery](https://jQuery.com/) to manage events and effects for enhanced user experience.
- [npm](https://www.npmjs.com/) for management of dependencies on the website 
- [bower](https://bower.io/) for easy installation of libraries and frameworks.
- [moment.js](https://momentjs.com/) dependency for the datetimerpicker application.
- [eonasdan- Bootstrap-datetimepicker](http://eonasdan.github.io/bootstrap-datetimepicker/) for calendar use in modal form.

## Additional Technologies Used
- Video creation [Windows Live Movie Maker](https://www.topwin-movie-maker.com/)
- Video conversion websites for various formats of videos 
	- OGG video conversion and AAC audio conversion: [https://www.online-convert.com](https://www.online-convert.com)
	- MPEG video conversion: [http://www.convertfiles.com](http://www.convertfiles.com)
	- [VLC Media Player](https://www.videolan.org)
	- MPEG-4 video conversion [MacX HD Video Converter Pro For Windows](https://www.macxdvd.com/macx-hd-video-converter-pro-for-windows/)
	- Iphone compatible video conversion[Miro Video Converter](http://www.mirovideoconverter.com/download_win.html) 


### Acknowledgements/ Copyright
- (c) 2015 Jonathan Peterson (@Eonasdan) for the [Bootstrap DateTimePicker](http://eonasdan.github.io/bootstrap-datetimepicker/)
- Video and Audio resources from [Pexels](https://www.pexels.com) and [Pexels Videos](https://videos.pexels.com)
- Audio files on [freemusicarchive.org](http://freemusicarchive.org/genre/Soundtrack/)
- Glyphicons from [Axialis](https://www.axialis.com/free/icons), [font-awesome](https://fontawesome.bootstrapcheatsheets.com/) and Bootstrap default glyphicons
- Various solutions and help found on www.w3schools.com (Refsnes Data), StackOverflow (Stack Exchange)- Nathan Long, javascript-coder.com, Code Institute and Slack.


### Special Thanks and Mentions to...
- My tutor Mohamed Melouk @mmelouk
- @eventyret and @miroslavsvec fellow students of Code Institute for advice on Slack


### Getting the code up and running 
1. Firstly you will need to clone this repository by running the ```git clone <https://github.com/Andreaytm/PT-AllanMa>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed 
	1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
	2. Once you've done this you'll need to run the following command: 
	`npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
	```

	npm install

	bower install 

	```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can  install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request