# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: "this" refer to the current class'es object.

  Researched answer: The JavaScript this keyword refers to the object it belongs to. It has different values depending on where it is used: In a method, this refers to the owner object. Alone, this refers to the global object. In a function, this refers to the global object.



2. What is React? Why would you use it?

  Your answer: JavaScript Lib.

  Researched answer: React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. 



3. Which lifecycle method is required in a React class component?

  Your answer: render()

  Researched answer: The render() method is the only required method in a class component.

When called, it should examine this.props and this.state and return one of the following types:

React elements.        Typically created via JSX. For example, <div /> and <MyComponent /> are React elements that instruct React to render a DOM node, or another user-defined component, respectively.
Arrays and fragments.  Let you return multiple elements from render. See the documentation on fragments for more details.
Portals.               Let you render children into a different DOM subtree. See the documentation on portals for more details.
String and numbers.    These are rendered as text nodes in the DOM.
Booleans or null.      Render nothing. (Mostly exists to support return test && <Child /> pattern, where test is boolean.)




4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer:JSX is JavaScript XML, an extension of JavaScript that allows writing HTML in React.

  Researched answer:JSX is JavaScript XML, an extension of JavaScript that allows writing HTML in React. One of the major differences between HTML and JSX is that in JSX, you must return a single parent element, or it won't compile.



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Package manager 

  Researched answer: Yarn is a JavaScript package manager that creates the file structure of a React app and manages the dependencies.



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: no function name

  Researched answer: Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.
  Example 1: In this example, we define an anonymous function that prints a message to the console. The function is then stored in the greet variable. We can call the function by invoking greet().

<script>
var greet = function () {
    console.log("Welcome to GeeksforGeeks!");
};
  
greet();
</script>
Example 2: In this example, we pass arguments to the anonymous function.


<script>
var greet = function (platform) {
    console.log("Welcome to ", platform);
};
  
greet("GeeksforGeeks!");
</script>
Arrow functions

ES6 introduced a new and shorter way of declaring an anonymous function, which is known as Arrow Functions. In an Arrow function, everything remains the same, except here we don’t need the function keyword also. Here, we define the function by a single parenthesis and then ‘=>’ followed by the function body.

Example 5:


<script>
var greet = () => 
{
    console.log("Welcome to GeeksforGeeks!");
}
  
greet();
</script>

## Looking Ahead: Terms for Next Week

1. Conditional rendering:Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

2. Props: React Props are like function arguments in JavaScript and attributes in HTML. To send props into a component, use the same syntax as HTML.

3. JavaScript Events: HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.

4. Object-oriented programming: Object-oriented programming is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields, and code, in the form of procedures. A feature of objects is that an object's own procedures can access and often modify the data fields of itself.

5. Ruby:Ruby is an open source, object-oriented programming language created by Yukihiro "Matz" Matsumoto in the early 1990s. Ruby has a reputation for simplicity and a style that is both easy to read and write. Ruby is a general-purpose, interpreted, dynamically-typed, server-side scripting language. Ruby has many helpful built in methods and great documentation.
