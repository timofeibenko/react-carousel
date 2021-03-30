# React Carousel

## 1. Project Description

This is a React carousel component built with React Hooks. You can see it live by clicking on [this link](https://timofei-benko.github.io/react-carousel/).

*(In order to be able to see swipes in action, make sure to use a touch device OR enable touch device emulation in 
your browser's 
DevTools).*

Technologies used:
* React core
* [Emotion CSS in JS library](https://emotion.sh/docs/introduction)
* Webpack and Babel to set up the environment
* gh-pages npm package to publish the app

Features:
* The carousel is fully responsive and adapts dynamically to screen size change
* On desktop, you can use the navigation buttons in order to proceed to the next / previous slide
* On touch devices, you can also use swipes for navigation:
    * on short swipe, the carousel will immediately proceed  to the next / previous slide
    * long swipe will make the slide follow your finger, on release, the carousel will proceed to the next / 
      previous slide
      
* You can also navigate through the slides via navigation panel on the bottom of the carousel

## 2. Environment

In order to set up the project proceed as follows:
1. Clone the repo:
`https://github.com/Timofei-Benko/react-carousel.git`
   
1. Run `npm install`
   
The project uses the following scripts:
1. `dev` - used to run the project against localhost in development mode
1. `prod` - used to create an optimized project build
1. `deploy` - deploys the project build to gh-pages