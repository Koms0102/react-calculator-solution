## Part 1
#### Use React JSX to build a user interface.

Someone from the design team sent over some mockups of our camera shops home page.
Your first step should be to diagram out the component hierarchy of the app on a whiteboard or piece of paper.
Feel free to partner up with someone on this part.
Talking out with someone on how the component hierarchy will be setup will be a great way to work through this stage of the app.
If it's easier to write things out while you are trying to solidify things, consider using a simple bulleted list.
They are a simple tool for quickly mocking out a tree, which is what a component hierarchy is.
If jumping straight to a whiteboard or piece of paper works best for you and your parter, do that.

Don't worry about the sorting, add-to-cart functionality or styling at the moment,
just focus on the arrangement and nesting of components and content on the page.
Take a look at the `<App />` component provided for you as a starting point for your diagram.

Ask yourself. What logical collection of elements should be grouped together to comprise a component?
Of those components which ones should be subcomponents of another component?

![Mock Up](https://students-gschool-production.s3.amazonaws.com/uploads/asset/file/480/camera-shop-mock.jpg)

Once you have sketched out the component hierarchy start to implement a static version of it in React.
Have your components render out placeholder text of the name of the component if that helps you visulize the components.

#### HINT:
For components that iterate over a collection to generate a list of sub components,
you can create a temp array with a few items in it (doesn't matter what is in it, could just be `[1,2,3]`).
Doing that will populate a component on the page for each item in the placeholder array.
Your render method would look something a little like the following:

```jsx
  render() {
    const someList = [1,2,3].map((item) => {
      return <ItemComponent />
    });

    return (
      <div>{ someList }</div>
    )
  }
```

We will replace the temp array later on with a collection of cameras that we will be passing down from the parent component.

You will likely see the following **Warning** in the console
>"Warning: Each child in an array or iterator should have a unique "key" prop."

You can ignore that *for now*. It is just a warning and should not break anything.

In a later lecture we will talk about how to pass data into these components so that each one will be different.

<hr />

## Part 2
#### Style your app.

Use Materalize to style the app.
You will want to include the CSS, JS and jQuery via CDN as well as the google fonts Material Icons.
Everything should work just the same with the exception of the `<select>` form control.
Later on we will talk about what it will take to get it to show up on the page.

Clear out the boilerplate styles provided by Brunch (they hijack things like the H1 element with their logo).

#### ⚠️ WARNING:
It is generally considered a bad idea to mix jQuery with React.
Materialize depends on jQuery to function properly, so using Materialize would typically be a bad deal.
Rest assured, the scope of this assignment is defined in such a way that we will be avoiding the major pitfalls that come with mixing the two libraries.
There are options to use in place of plain ol' Materalize that provide the features of a CSS framework that we will discuss later,
but at this stage would add an extra layer of noise on top of learning the fundamentals of React.

<hr />

## Part 3
#### State + Props

At this point your camera shop app should have the component structure all laid out and styled up with Materialize.
Your next step will be to provide your application with some state (data).

Your catalog of cameras and live cart display should be sibling components and share a parent component.
It is in this parent component where we will want to set the initial state since both the catalog component (and its children)
as well as the live cart display component (and its children) will want access to this state.

Use the following camera data to set the initial state of your app.

```javascript
[
  {
    id: 1,
    title: 'Nikon D3100 DSLR',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    rating: 4,
    price: 369.99,
    onSale: true
  }, {
    id: 2,
    title: 'Canon EOS 70D',
    image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',
    rating: 2,
    price: 1099.0,
    onSale: false
  }, {
    id: 3,
    title: 'Nikon D810A',
    image: 'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',
    rating: 3,
    price: 3796.95,
    onSale: true
  }
]
```

Once you have set the initial state of the app, utilize props to have the relevant data flow down to the components that need it.
Start by passing the state into the catalog component, and down through all of its subcomponents that need the data.
This is a great time to start using the React Dev Tools extension.
You will be able to click through the components in the dev tool and see if props are being passed down properly.
Once those components have that data, you will be able to use `{this.props.YOUR_DATA}` to populate your subcomponents with the camera data.

### Synthetic Event Handlers

With our initial data in place you can start working on event handlers, of the synthetic kind.
Think about the events you will want to handle on the page...

You will need to handle a click event with the "ADD TO CART" button.
When clicked that button will fire a corisponding handler function on the component.
That handler function should call initiate a chain of fn calls up the component tree,
passing along the camera object that is being added to the cart.
The final function called will be the one defined on the component where you have your state defined.
That function will be the one that will then add the camera to your cart array.

Any event handlers in which you update the state, with `this.setState({ STATE_TO_BE_UPDATED })`,
will be defined in the same component where the `getInitialState` method for the state to be updated is defined.

Remember, you can give subcomponents access to methods defined in parent components through props,
much in the same was as you would with state.

Look at your page... What are all the interaction points for the user?
What event will those points generate? -- which type of event handler is used on the DOM element? i.e. `onChange`
Which component will an event originate from? -- which component will you define the event handler on?
On which component is the state defined that this action changes? -- which component will you define the update handler/fn on?
How will you connect the event handler to the update handler? -- how will the function calls be passed up the chain of components?

<hr />

## Part 4
#### Manipulate components throughout the component life cycle

When a camera is added to the cart, the state is updated.
Any component that makes use of that changed state is updated and will go through a series of component lifecycle events.
One of those lifecycle events relates to receiving new props.
So when you add a camera to the cart, the cart's subtotal, tax and total should also update.
Tap into the appropriate lifecycle event so that those values get updated whenever a new camera is added or removed from the cart.

Our select field has not been showing up and now is the time to fix that.
Materalize fires off an initialization method on that select element after the page loads.
Like with jQuery where you would want to wait for the page to load,
similarly with React you may want to wait for a component to mount before you can apply logic.

Once you have the select field displaying on the page it's time to get it sorting the camera catalog.
The first thing to do is to apply an on change attribute to the select element with an event handler defined in your component.
Toss a console.log() in your event handler and get it to spit out the selected value.
Once you see the selected value getting logged you are ready to start applying the business logic.

NOTE:
Materialize does a fair amount of DOM manipulation which can create issues for React.
We are using it in this portion of the assignment to quickly style our app while also building out the components ourselves.
In the near future we'll be using a library that will replace Materialize.
This library, and other similar styling libraries, will be the preferred method for those who want to use styling frameworks.

HINT: Materialize works in a way that blocks the default behavior.
There are ways to get around that, a couple of which are discussed here:
https://github.com/Dogfalo/materialize/issues/1160

BONUS: Add a filter that converts the numeric rating into stars.

<hr />

## Part 5

- Use React Router v4 to build a React user interface.

Install React Router v4, double checking your *package.json* that version 4 is the version that was in fact installed.
Wrap the content of your top level component with the BrowserRouter component.
Update the anchor tags in your navbar to utilize React Router's `<Link />` component.
You likely have your camera list, filter elements, and cart all in your `<Main />` component.
Now that you are setting up routing, consider shifting those components to something like a Home or Homepage component.
In their place in the `<Main />` component you will want to define your routes with React Router's `<Match />` component.
When a user visits "/" your new Home component should render.
When a user visits "/cart" a Cart, or checkout, component should render.
This is different from your live cart preview component, but instead the page where users will fill in their info when submitting an order.
Build out that component and use it as the Match for "/cart"

You will need to pass props down to the Matched components.
Utilize the Match component's `render` prop to render the corresponding components and required props.

For example:

```jsx
<Match pattern="/what-about-bob" exactly render={
  () => <Bob
    { ...this.state }
    handleBabySteps={this.handleBabySteps}
  />
}/>
```

#### Bonus 1:

Add a `<Miss />` component that renders a NotFound component for when a user visitings a path that does not exist in your app.

#### Bonus 2:

You have a new checkout page, and that very first component looks quite similar to our live cart preview component on the home page.
The only difference is that it doesn't display the list of items and there is no button.

Find a way to reuse your live cart preview component on the checkout page but so that the list and button don't get rendered.

<hr>

# React Camera View Solution

In this assignment, you will make a React clone of the Angular Camera
View app you recently built.

## Example in action

![Camera Shop Example](camera_example.gif)

## Example Data


## Part 1 - Requirements

The camera shop page will require the following:

1. Display of the data in some format.
1. The price is formatted into a currency
1. The words "On SALE!" (or some form) are used when `onSale` is true
1. The ability to sort by name or rating (default is name)
1. The ability to search to filter the results (keeping the same order).
1. A custom filter to handle the conversion of the rating from a number
   to asterisks. It is assumed that the rating will be an integer.

## Part 2 - Requirements

The goal of part 2 is to add cart functionality.

![Camera Shop Example Part 2](camera_example_part2.gif)

1. When the user clicks "Add to Cart", the cart manages the item
   inserted. Subsequent adds increase the quantity of the item.
1. User can remove an item from the cart by clicking on a button (it
   will remove the entire quantity of that item).
1. The subtotal, tax, and total are calculated in place.

<hr>

## Setup

Use Brunch to create a new React application and install its dependencies.

```shell
brunch new react-camera-view --skeleton ryansobol/with-react
```

To start up your application run the npm start script.

```shell
npm start
```

Create a server.js file




React components are placed in the `app/components` directory and are combined into the `public/app.js` file on build.

**NOTE:** Each React component lives in a module so can be shared with other modules using [ES6 module](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) syntax.

```shell
la app/components
```

## Resources
- [Brunch](http://brunch.io)
- [React](https://facebook.github.io/react/)
