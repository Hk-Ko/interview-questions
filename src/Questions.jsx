export const htmlQAs = [
  {
    id: 1,
    question:
      "Describe the difference between `<script>`, `<script async>` and `<script defer>`?",
    answer:
      "- `<script>`: It blocks HTML parsing and executes the script before rendering. - `<script async>`: It loads the script asynchronously and doesn't block parsing, allowing rendering to continue while the script loads.- `<script defer>`: It also loads the script asynchronously but ensures it only executes after HTML parsing is complete.",
  },
  {
    id: 2,
    question:
      "Describe the difference between a cookie, `sessionStorage` and `localStorage`?",
    answer:
      "Cookie: Small data stored in the user's browser, sent with every HTTP request, often used for tracking and maintaining user state but limited in size (around 4KB)." +
      "sessionStorage: Data storage limited to a single session, data is lost when the session ends (e.g., when the browser is closed)." +
      "localStorage: Persistent data storage with no expiration, data remains even after the browser is closed, and has a larger storage capacity (around 5-10MB).",
  },
  {
    id: 3,
    question:
      "Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`?",
    answer:
      "It's generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>` to prioritize faster loading of essential page content, ensuring that styles load before rendering and scripts load after the page structure.",
  },
  {
    id: 4,
    question: "Describe event bubbling.",
    answer:
      "Event bubbling is a propagation mechanism in which an event starts from the target element and moves up through its parent elements in the DOM tree. It allows multiple elements to respond to the same event, with the outermost parent handling it first.",
  },
  {
    id: 5,
    question: "Explain event delegation?",
    answer:
      "Event delegation is a JavaScript technique where you attach a single event listener to a parent element to manage events for its child elements. This improves efficiency and reduces memory usage when handling events on multiple elements. The event bubbles up to the parent, where you can identify the specific child element that triggered the event.",
  },
  {
    id: 6,
    question: `What kind of things must you be wary of when designing or developing for multilingual sites?
      `,
    answer: `Consider text expansion, character encoding, cultural sensitivity, translation accuracy, language switching, SEO Considerations, performance, and content updates when designing multilingual sites.`,
  },
  {
    id: 7,
    question: "How do you serve a page with content in multiple languages?",
    answer:
      "Serve content in multiple languages by setting HTML `lang` attributes, translating content, adding language selection, using hreflang tags, structuring URLs, and ensuring accessibility.",
  },
  {
    id: 8,
    question: "What are `data-` attributes good for?",
    answer:
      "`data-` attributes are useful for storing custom data in HTML elements, often for JavaScript interaction, without affecting the element's visual representation or behavior.",
  },
  {
    id: 9,
    question: "What is progressive rendering?",
    answer:
      "Progressive rendering is a web design technique that prioritizes loading and displaying the most critical content first, allowing a web page to become usable and visually complete more quickly, even as additional content continues to load.",
  },
  {
    id: 10,
    question: "Why you would use a `srcset` attribute in an image tag?",
    answer:
      "You would use a `srcset` attribute in an image tag to provide multiple image sources at different resolutions or sizes, enabling the browser to select the most appropriate one based on the user's device and screen characteristics, improving performance and user experience.",
  },
  {
    id: 11,
    question:
      "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
    answer:
      "The building blocks of HTML5 include:1. Semantic elements 2. Multimedia support 3. Graphics with `<canvas>` and SVG 4. Offline capabilities 5. Improved interactivity and forms 6. Enhanced accessibility 7. CSS3 integration 8. Web APIs for various functionalities 9. Web connectivity features 10. Device access via APIs 11. Performance optimizations 12. Security enhancements.",
  },

  {
    id: 12,
    question: "What does a `DOCTYPE` do?",
    answer:
      "A `DOCTYPE` declaration specifies the type and version of the HTML or XML document, enabling the browser to render the page correctly by determining the document's parsing rules and rendering mode.",
  },
];

export const cssQAs = [
  {
    id: 1,
    question: "What is box model?",
    answer:
      "The box model in CSS defines how elements on a web page are displayed as rectangular boxes, comprising content, padding, border, and margin.",
  },
  {
    id: 2,
    question: "What does `* { box-sizing: border-box; }` do?",
    answer:
      "`* { box-sizing: border-box; }` is a CSS rule that applies the `border-box` box-sizing model to all elements on a web page. This means that an element's width and height include its padding and border, making layout calculations more predictable.",
  },
  {
    id: 3,
    question: "What is CSS selector specificity and how does it work?",
    answer:
      "CSS selector specificity measures how specific a selector is. It's determined by counting the number of IDs, classes, and element selectors. More specific selectors override less specific ones.",
  },
  {
    id: 4,
    question: "What is the CSS display property?",
    answer:
      "The CSS `display` property determines how an HTML element is rendered in the document layout, defining its behavior as either block-level, inline-level, or another type.",
  },
  {
    id: 5,
    question:
      "What's the difference between a `relative`, `fixed`, `absolute` and `static`-ally positioned element?",
    answer:
      "- `static`: Default position; elements flow in the normal document layout.  - `relative`: Positioned relative to its normal position; other elements aren't affected. - `absolute`: Positioned relative to the nearest non-static parent; it's removed from the normal document flow. - `fixed`: Positioned relative to the viewport; remains in the same position even when the page is scrolled.",
  },
  {
    id: 6,
    question: "What's the difference between `inline` and `inline-block`?",
    answer:
      "- `inline`: Elements flow horizontally, and only occupy as much width as necessary, without line breaks.   - `inline-block`: Elements flow horizontally but can have block-level styling, allowing them to have width, height, and vertical alignment while staying in the inline flow.",
  },

  {
    id: 7,
    question:
      "Explain how a browser determines what elements match a CSS selector.",
    answer:
      "A browser determines which elements match a CSS selector by traversing the DOM tree, starting from the root element, and checking each element against the selector's criteria. If an element's attributes and structure match the selector, it's considered a match, and the associated styles are applied. This process is known as CSS selector matching or CSS selector specificity.",
  },
  {
    id: 8,
    question: "Have you played around with the new CSS Flexbox or Grid specs?",
    answer:
      "Flexbox is mainly meant for 1-dimensional layouts while Grid is meant for 2-dimensional layouts.Flexbox solves many common problems in CSS, such as vertical centering of elements within a container, sticky footer, etc. famous CSS frameworks like Bootstrap and Bulma are based on Flexbox, and Flexbox is still the tested and proven way to create layouts.Grid is by far the most intuitive approach for creating grid-based layouts but browser support is not that wide at the moment. Many layout problems can already be solved with Flexbox, so there's not a huge need for Grid.",
  },

  {
    id: 9,
    question:
      " there any reason you'd want to use `translate()` instead of `absolute` positioning, or vice-versa? And why?",
    answer:
      "You might prefer `translate()` over `absolute` positioning for animations and smooth transitions, as `translate()` is generally more efficient for hardware acceleration. `absolute` positioning is better suited when you want to precisely position elements within the layout, regardless of animation considerations. The choice depends on your specific design and performance requirements.",
  },
  {
    id: 10,
    question: "Describe Block Formatting Context (BFC) and how it works.",
    answer:
      "A Block Formatting Context (BFC) is a layout region where block-level elements stack vertically and don't overlap. It's created by certain CSS properties, ensuring predictable layout behavior.",
  },
  {
    id: 11,
    question: "Describe `float`s and how they work.",
    answer:
      "`float` is a CSS property that moves an element to the left or right within its container for purposes like text wrapping or creating multi-column layouts.",
  },
  {
    id: 12,
    question: "Describe pseudo-elements and discuss what they are used for.",
    answer:
      "Pseudo-elements in CSS (::before and ::after) are used for adding decorative or structural content to elements without modifying the HTML. They are often used for styling purposes, like inserting icons or decorative elements before or after text.",
  },
  {
    id: 13,
    question: "Describe `z-index` and how stacking context is formed.",
    answer:
      "`z-index` controls the stacking order of elements. Stacking contexts are formed when elements have certain CSS properties (like `position`, `transform`, or `opacity`), and they determine how elements are stacked relative to each other.",
  },
  {
    id: 14,
    question:
      "Explain CSS sprites, and how you would implement them on a page or site.",
    answer:
      "CSS sprites combine multiple images into one, reducing load times. Use CSS to set background images and positions for elements needing icons, optimizing web performance.",
  },
  {
    id: 15,
    question: "How do you serve your pages for feature-constrained browsers?",
    answer:
      "Serve simpler layouts and feature fallbacks for constrained browsers using feature detection, polyfills, and responsive design. Test for compatibility across various browsers and devices.",
  },
  {
    id: 16,
    question: "How is responsive design different from adaptive design?",
    answer:
      "Responsive design uses fluid layouts and media queries to adapt to different screen sizes and orientations, while adaptive design involves creating multiple layouts tailored to specific devices or screen sizes. Responsive design is more flexible and adaptive design is more tailored and static.",
  },
  {
    id: 17,
    question: "How would you approach fixing browser-specific styling issues?",
    answer:
      "To fix browser-specific styling issues: 1. Identify the specific issue using browser developer tools. 2. Use CSS feature detection or vendor prefixes where necessary. 3. Apply CSS resets or normalizations to create consistent styling. 4. Use polyfills or conditional CSS for unsupported features. 5. Regularly test and update styles across multiple browsers.",
  },
  {
    id: 18,
    question:
      "What are the advantages/disadvantages of using CSS preprocessors?",
    answer:
      "Advantages: 1. Variables and reusability. 2. Nesting for cleaner code. 3. Mixins for efficient styling. 4. Functions and operations. 5. Improved organization.       Disadvantages: 1. Learning curve. 2. Extra compilation step. 3. Overuse of features can lead to complex code. 4. Potential for large CSS output. 5. Limited browser support for certain features.",
  },
  {
    id: 19,
    question:
      "  What are the different ways to visually hide content (and make it available only for screen readers)  ",
    answer:
      "To visually hide content for screen readers: 1. **`position: absolute;`**: Position off-screen with CSS. 2. **`width: 0; height: 0;`**: Set width and height to zero. 3. **`clip-path`**: Clip content to an invisible area. 4. **`text-indent: -9999px;`**: Indent text far off-screen. 5. **`opacity: 0;`**: Make content transparent but readable. 6. **`visibility: hidden;`**: Hide content but keep layout space. 7. **`aria-hidden='true'`**: Use ARIA attribute for accessibility.",
  },
  {
    id: 20,
    question:
      "What's the difference between 'resetting' and 'normalizing' CSS?",
    answer:
      "'Resetting' CSS aims to remove default browser styles, setting all elements to a consistent baseline. 'Normalizing' CSS aims to make default styles consistent across different browsers by preserving useful styles while resetting others. Resetting is more aggressive, while normalizing is more balanced.",
  },
  {
    id: 21,
    question: "Are you familiar with styling SVG?",
    answer:
      "Yes, I am familiar with styling SVG (Scalable Vector Graphics) using CSS to control colors, fills, strokes, and other visual properties.SVG (Scalable Vector Graphics) is an XML-based vector image format used for creating two-dimensional vector graphics that are both scalable and resolution-independent.",
  },
  {
    id: 22,
    question:
      "Can you explain the difference between coding a website to be responsive versus using a mobile-first strategy? ",
    answer:
      "Coding a website to be responsive means designing it to adapt to various screen sizes. A mobile-first strategy starts with designing for mobile devices and progressively enhancing for larger screens. Mobile-first prioritizes smaller screens from the outset.",
  },
  {
    id: 23,
    question:
      "Can you give an example of an `@media` property other than `screen`?",
    answer:
      "Certainly. Another example of an `@media` property is `print`, used for defining styles specifically for printed pages.",
  },
  {
    id: 24,
    question:
      "Describe what you like and dislike about the CSS preprocessors you have used",
    answer:
      "Likes: Variables, nesting, mixins, organization. Dislikes: Learning curve, compilation step, complexity, larger output, limited browser support.",
  },
  {
    id: 25,
    question: "Have you ever worked with retina graphics?",
    answer:
      "Retina graphics are high-resolution images designed for displays with high pixel density, like Apple's Retina displays.",
  },

  {
    id: 26,
    question:
      "Have you used or implemented media queries or mobile-specific layouts/CSS?",
    answer:
      "An example would be transforming a stacked pill navigation into a fixed-bottom tab navigation beyond a certain breakpoint.",
  },
  {
    id: 27,
    question: "What are some of the 'gotchas' for writing efficient CSS?",
    answer:
      "Efficient CSS: Avoid `!important`, limit nesting, be mindful of specificity, optimize code, use preprocessing for organization, minimize reflows/repaints, compress and cache stylesheets for speed.",
  },
  {
    id: 28,
    question:
      "What are the various clearing techniques and which is appropriate for what context?",
    answer:
      "Clearing techniques in CSS include `clear: both;` for clearing floated elements, and `overflow: hidden;` to clear floats and create a new block formatting context. Use them appropriately based on your layout needs.",
  },
  {
    id: 29,
    question:
      "What existing CSS frameworks have you used locally, or in production?",
    answer: "Bootstrap,Tailwind Css",
  },
];

export const javaQAs = [
  {
    id: 1,
    question: "Explain how prototypal inheritance works",
    answer:
      "Prototypal inheritance in JavaScript lets objects inherit properties and methods from a prototype object, creating a chain for sharing behavior and data.",
  },
  {
    id: 2,
    question: "Explain how `this` works in JavaScript",
    answer:
      "In JavaScript, `this` refers to the current execution context, often representing the object that the function or method is called on. Its value depends on how a function is invoked:  1. In a regular function, `this` typically refers to the global object (e.g., `window` in a browser). 2. In a method (a function within an object), `this` refers to the object that owns the method.3. In an event handler, `this` refers to the DOM element that triggered the event. 4. When explicitly set using functions like `bind`, `call`, or `apply`, `this` can be defined explicitly. The value of `this` can change dynamically depending on the context of its execution.",
  },
  {
    id: 3,
    question:
      "What are the differences between variables created using `let`, `var` or `const`?",
    answer:
      "- `var`: Function-scoped, can be redeclared and updated. - `let`: Block-scoped, can be updated but not redeclared.- `const`: Block-scoped, cannot be redeclared or updated (except for objects and arrays, where their properties can be modified).",
  },
  {
    id: 4,
    question: "What is the difference between `==` and `===`?",
    answer:
      "`==` compares values with type coercion, while `===` compares values and types without coercion. `===` is more strict and often recommended for avoiding unexpected type-related issues.",
  },
  {
    id: 5,
    question:
      "What's the difference between a variable that is: `null`, `undefined` or undeclared?",
    answer:
      "- `null`: A deliberate absence of value, assigned by the developer. - `undefined`: A variable declared but not assigned a value, or a missing function argument. - Undeclared: A variable that has not been declared with `var`, `let`, or `const`. Accessing it throws a ReferenceError.",
  },
  {
    id: 6,
    question: "What's the difference between `.call` and `.apply`?",
    answer:
      "`.call` and `.apply` are both JavaScript methods used to invoke functions with a specific `this` context and pass arguments. The key difference is in how you provide arguments: - `.call` takes arguments as a comma-separated list. - `.apply` takes arguments as an array or array-like object. In summary, choose `.call` for individual arguments and `.apply` for an array of arguments.",
  },
  {
    id: 7,
    question: "Can you offer a use case for the new arrow => function syntax?",
    answer:
      "Arrow functions are useful for maintaining the context of `this` within a function, making them particularly handy in event handlers, callbacks, and when defining functions within methods to avoid issues with changing `this`.",
  },
  {
    id: 8,
    question: "Explain `Function.prototype.bind`",
    answer:
      "`Function.prototype.bind` is a method in JavaScript used to create a new function with a specified `this` value and initial arguments. It allows you to set a fixed `this` context for a function, making it useful for event handlers, callbacks, or methods that need a consistent `this` value.",
  },
  {
    id: 9,
    question: "Explain 'hoisting'",
    answer:
      "Hoisting in JavaScript is the behavior where variable and function declarations are moved to the top of their containing scope during compilation, allowing you to use them before they are formally declared in the code. However, only declarations are hoisted, not initializations or assignments.",
  },
  {
    id: 10,
    question:
      "Explain the difference between synchronous and asynchronous functions",
    answer:
      "Synchronous functions execute in a blocking manner, meaning they pause the program's execution until they complete. Asynchronous functions, on the other hand, do not block and allow the program to continue running while they complete their tasks. They often use callbacks, promises, or async/await to manage their execution flow.",
  },
  {
    id: 11,
    question:
      "What are the pros and cons of using Promises instead of callbacks?",
    answer:
      "**Pros of Promises:** 1. Improved readability and maintainability with cleaner code. 2. Better error handling through `.catch()` and `.finally()`. 3. Support for chaining multiple asynchronous operations.     **Cons of Promises:** 1. Slightly more complex syntax compared to simple callbacks. 2. Not supported in older browsers without polyfills or transpilation. 3. Potential for unhandled promise rejections if not properly handled.",
  },
  {
    id: 12,
    question: "What is a closure, and how/why would you use one?",
    answer:
      "A closure in JavaScript is a function that has access to its own scope, the outer function's scope, and the global scope. It 'closes over' variables from its outer scope, preserving them even after the outer function has finished executing. Closures are useful for creating private data, managing state, and implementing data encapsulation in JavaScript.",
  },
  {
    id: 13,
    question: "What is event loop?",
    answer:
      "The event loop is a fundamental concept in JavaScript that continuously checks the message queue for events or tasks to execute, allowing non-blocking asynchronous operations to run efficiently in the background while the main program remains responsive.",
  },
  {
    id: 14,
    question:
      "What language constructions do you use for iterating over object properties and array items?",
    answer:
      "To iterate over object properties, you can use a `for...in` loop or `Object.keys()`, `Object.values()`, or `Object.entries()` methods.To iterate over array items, you can use a `for` loop, `forEach()`, `map()`, `filter()`, `reduce()`, or other array iteration methods provided by JavaScript.",
  },
  {
    id: 15,
    question: "What's a typical use case for anonymous functions?",
    answer:
      "A typical use case for anonymous functions (also known as lambda or inline functions) is when you need a small, one-time-use function for tasks like event handling, callbacks, or quick data transformations without defining a named function.",
  },
  {
    id: 16,
    question:
      "Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?",
    answer:
      "1. `function Person(){}` defines a constructor function for creating objects. 2. `var person = Person()` assigns the result of calling `Person` (if it returns something) to `person`, but it typically doesn't create a new object.3. `var person = new Person()` creates a new object using the `Person` constructor and assigns it to `person`.",
  },
  {
    id: 17,
    question: "Explain Ajax in as much detail as possible.",
    answer:
      "Ajax is a web development technique that enables web pages to communicate with servers without reloading the entire page, providing faster and more interactive user experiences. It uses JavaScript and asynchronous server requests to load or update content dynamically.",
  },
  {
    id: 18,
    question: "Explain how JSONP works (and how it's not really Ajax)",
    answer:
      "JSONP uses a <script> tag to fetch data from another domain and execute it as a script, making it a workaround for cross-domain requests, but it's not a true Ajax method.",
  },
  {
    id: 19,
    question: "Explain the difference between mutable and immutable objects",
    answer:
      "Mutable objects can be changed after creation, while immutable objects cannot be modified once created. Changing a mutable object alters its state, while with immutables, you create a new object when you want to change it.",
  },
  {
    id: 20,
    question:
      "Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`",
    answer:
      "In `function foo() {}`, `foo` is a function declaration and can be called anywhere in its scope. In `var foo = function() {}`, `foo` is a function expression assigned to a variable and can only be called after the assignment statement.",
  },
  {
    id: 21,
    question:
      "Explain what a single page app is and how to make one SEO-friendly",
    answer:
      "A single-page app (SPA) is a web application that loads a single HTML page and dynamically updates content as the user interacts with it. To make an SPA SEO-friendly, use server-side rendering (SSR) or prerendering to generate HTML content for search engine bots, implement proper meta tags, use clean URLs, and provide a sitemap for search engines to crawl.",
  },

  {
    id: 22,
    question:
      "What advantage is there for using the arrow syntax for a method in a constructor?",
    answer:
      "Using arrow syntax for a method in a constructor allows the method to inherit the enclosing context (`this`), ensuring that `this` inside the method refers to the instance of the object created by the constructor. This is particularly useful when defining methods in class constructors.",
  },
  {
    id: 23,
    question:
      "What are the differences between ES2015 class and ES5 function constructors?",
    answer:
      "ES2015 classes provide a more structured and syntactically cleaner way to define constructor functions, inheritance, and methods compared to ES5 function constructors. Classes offer a more intuitive and modern approach to object-oriented programming in JavaScript.",
  },

  {
    id: 24,
    question: "What is the definition of a higher-order function?",
    answer:
      "A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. It treats functions as first-class citizens, enabling advanced functional programming techniques like mapping, filtering, and composing functions.",
  },
  {
    id: 25,
    question: "What is `'use strict';`?",
    answer:
      "`'use strict';` is a pragma in JavaScript that enables strict mode, which enforces a stricter set of rules and better error handling. It helps catch common coding mistakes and prevents the use of certain error-prone features.",
  },
  {
    id: 26,
    question: "What's the difference between an 'attribute' and a 'property'?",
    answer:
      "An 'attribute' is a value in HTML markup, while a 'property' is a value in the DOM (Document Object Model) that represents the current state of an element. Attributes initialize properties, but properties can change due to user interactions or script actions.",
  },
  {
    id: 27,
    question:
      "What's the difference between feature detection, feature inference, and using the UA string?",
    answer:
      "- **Feature Detection:** Checking if a specific feature is supported by the browser using JavaScript or similar methods. - **Feature Inference:** Assuming support for a feature based on the presence of another feature.",
  },

  {
    id: 28,
    question:
      "Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?",
    answer:
      "Leaving the global scope untouched is a good practice to prevent conflicts, maintain code modularity, and avoid unintended side effects when multiple scripts are running on a webpage.",
  },
  {
    id: 29,
    question:
      "Can you describe the main difference between a `.forEach` loop and a `.map()` loop?",
    answer: "The main difference between `.forEach` and `.map()` is that `.forEach` is used for iterating over an array and executing a function for each item without creating a new array, while `.map()` creates a new array by applying a function to each item and returns the results.",
  },
  {
    id: 30,
    question: "Can you give an example of a curry function and why this syntax offers an advantage?",
    answer: "",
  },
  {
    id: 31,
    question: "",
    answer: "",
  },
  {
    id: 32,
    question: "",
    answer: "",
  },
  {
    id: 33,
    question: "",
    answer: "",
  },
  {
    id: 34,
    question: "",
    answer: "",
  },
  {
    id: 35,
    question: "",
    answer: "",
  },
  {
    id: 36,
    question: "",
    answer: "",
  },
];
