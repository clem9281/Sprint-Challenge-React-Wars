# Answers

1.  What is React JS and what problems does it try and solve?

    React is a javascript library for building user interfaces. It allows the developer to build reusable components. It helps keep code DRY by allowing us to create one small piece of code, and render it multiple times. React also lets us track and manipulate state changes. React uses a kind of virtual DOM to manipulate the DOM. When an update occurs on the virtual DOM, React updates the actual DOM.

1.  What does it mean to _think_ in react?

    You have to think about a webpage as it's parts, rather than as a whole. Which pieces can be made into reusable components, how should you use and reuse them, and how are they going to interact with or change the page. You have to consider what kind of data composes the page, and how you should break that data down to best display it, and which parts need access to that data. You want the state to be controlled by one component, so you need to figure out how your other components can see and display the state changes.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

    A class/stateful component has state, while a functional component does not. A functional component is primarily visual. It is still a reusable component, it just does not have it's own state. The state of the application is stored in a class component, and then passed to a functional component through props. Class components also have access to lifecycle methods like componentDidMount.

1.  Describe state.

    The state is the heart of a react app. It is the main source of data for the application. For now we store it on the constructor. It is an object in our class component that can be accessed, and read, and updated. When the state is updated, the virtual dom updates the dom. It is persistent as long as the component is mounted.

1.  Describe props.

    Props are properties passed from a parent component to a child component. They are usually data from the state, or functions from the parent. Props are immutable. Props are accessed from the child component, as a parameter of the constructor.
