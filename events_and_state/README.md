# React Events and State

## Setup

Recall that to setup a project you will need a local [HTTP server](https://github.com/indexzero/http-server) ```npm install -g htt-server```.

For each of these problems you will want to create two files; an HTML file and a JSX file. Here is a sample for how the HTML file might be set up (assuming `node_modules` is in the same directory):

```
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <script type="text/javascript" src="node_modules/react/dist/react.js"></script>
  <script type="text/javascript" src="node_modules/react-dom/dist/react-dom.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
  <script type="text/babel" src="name_of_my.jsx"></script>
</head>
<body>
  <div id="entry-point">
  </div>
</body>
</html>
```

It may be useful to know that you can still use this approach inside of an Express app by adding the following line to your `app.js` file:

```
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
```

## Problem 0: Events

* Read through some of the React events in the [docs](https://facebook.github.io/react/docs/events.html) - is this similar to anything else we have seen?
* Read how DOM events bubble up and become component events [here](http://www.newmediacampaigns.com/blog/react-bubble-events)
* Build an application that contains two components; `App` and `Form`.
    * The `App` component should contain a `<button>` that when clicked alerts "Hi!". The `App` component should contain the `Form` component.
    * The `Form` component should contain an HTML form with (1) a text input, (2) a checkbox and (3) a submit button. When the form is submitted you should prevent the default action (form submission) and `console.log` "SO AWESOME!". When there is a keypress inside of the text input, you should `console.log` the `keyCode` of the character you just typed. When the checkbox is checked, you should `console.log` the `nativeEvent`.
    * Demonstration of what you are building (do not worry about style): [![Gyazo](https://i.gyazo.com/9719b8b5250297696ed8610863560318.gif)](https://gyazo.com/9719b8b5250297696ed8610863560318)

## Problem 1: State

* Read [this](https://medium.com/react-tutorials/react-state-14a6d4f736f5) Tutorial
* Presidents Challenge
  - Create Three components; `PresidentList`, `AddPresident` and `President`.
    + `PresidentList` should render a `<div>` with the `AddPresident` and `President` components.
    + `AddPresident` should render a `<div>` with a `<form>`. Inside the form there should be an text input and an input to submit the form.
    + When the form is submitted, you should capture the value of what the user typed in an add it to an array called `presidents`.
    + The `presidents` array should start with the value of `["Washington", "Adams", "Jefferson"]`
    + When you add a president, you will change the state of the array, which means that what you return will be a new array with the president you have just added. Recall that you want to add additional items to an array, but return a new array with the added item.
  - In order to capture form value you can use `e.target`. Take a look at [these docs](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) for some more insight.
  - Demonstration of what you are building (do not worry about style): [![Gyazo](https://i.gyazo.com/09ea982695533095e274db62a363db0c.gif)](https://gyazo.com/09ea982695533095e274db62a363db0c)

## Problem 2: Pulling it all together

Recall what you built in [Problem Set 7](https://github.com/gSchool/xp_problem_set_7). In case you have forgotten here is the same mockup of the Twitter-like application called "Thought Board":

<center>
  ![](https://galvanize.mybalsamiq.com/mockups/3730026.png?key=b3f2e7892786b042ae58fdded0d6b3c0ca3072f6)
</center>

Re-write this application again using a TDD Express API, but this time using React and `XMLHttpRequest` to handle exchanging data between the client and server. As you look at the mockup try to dissect what the different React Components will be, if you need a refresher on how to do that, [this article](https://facebook.github.io/react/docs/thinking-in-react.html) is quite helpful. Additionally, what is the minimum set of API endpoints do you need to create to make this work?

In terms of approach, it may be useful to start by just factoring towards a simple, working layout the page, then refactor it into React components using a static data set. Next, determine how state/props play into the picture. Additionally, [this article](https://facebook.github.io/react/tips/initial-ajax.html) on loading initial data may be useful. After creating your Express app, `cd` into the directory that has the application and run `npm install --save react react-dom`. To now serve the `node_modules` directory, simply add `app.use('/node_modules',  express.static(__dirname + '/node_modules'));` to `app.js`.

## Reflection Questions

1. Were you and your pair able to effectively leverage documentation to drive your development?
1. What are the similarities and differences between native event handling (e.g. `addEventListener`) and React Event handling?
1. As a pair decide what thing you like most about React and what thing you like least about it.
