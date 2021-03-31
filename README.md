# React Carousel

## 1. Project Description

This is a React carousel component built with React Hooks. You can see it live by clicking on [this link](https://timofei-benko.github.io/react-carousel/).

*(In order to be able to see swipes in action, make sure to use a touch device OR enable touch device emulation in 
your browser's 
DevTools).*

## 2. Features:
* The carousel is fully responsive and adapts dynamically to screen size change
* Works with all kinds of HTML-content
* On desktop, you can use the navigation buttons in order to proceed to the next / previous slide
* On touch devices, you can also use swipes for navigation:
    * on short swipe, the carousel will immediately proceed  to the next / previous slide
    * long swipe will make the slide follow your finger, on release, the carousel will proceed to the next / 
      previous slide
      
* You can also navigate through the slides via navigation panel on the bottom of the carousel

## 4. How to use

The entrypoint for the component is the Carousel.js file, that has to be provided with a slidesData array (a simple 
array with strings or exported to variables images, or an array of objects, each containing the information that the 
slide will show, e.g. title:..., description:..., bg-image:...). Such an array is absolutely necessary for the 
proper functionality of the component. 

In order to set the width and the height of the carousel, you can update carouselStyles object located in Carousel.
js.   

Then you can proceed to styling the slide. In Slide.js, you can define an HTML-structure of the slide, map the 
necessary information from slidesData array 
and provide the slide 
with the styles of your choice by the means of slideStyles object. Keep in mind that the dimensions of the slide are 
directly dependant of those of the carousel itself.

## 3. Environment

In order to set up the project proceed as follows:
1. Clone the repo:`git clone https://github.com/Timofei-Benko/react-carousel.git`
1. Run `npm install`
   
The project uses the following scripts:
1. `dev` - used to run the project against localhost in development mode
1. `prod` - used to create an optimized project build
1. `deploy` - deploys the project build to gh-pages

## 4. Technologies used:
* React
* [Emotion CSS in JS library](https://emotion.sh/docs/introduction)
* Webpack and Babel to set up the environment
* gh-pages npm package to publish the app

## 5. Known issues:
* Carousel reacts to vertical swipes
* Swipe start has a little delay
* On resize, the carousel sets to the first slide