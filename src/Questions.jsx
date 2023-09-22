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
    question: "",
    answer: "",
  },
  {
    id: 3,
    question: "",
    answer: "",
  },
  {
    id: 4,
    question: "",
    answer: "",
  },
  {
    id: 5,
    question: "",
    answer: "",
  },
  {
    id: 6,
    question: "",
    answer: "",
  },
  {
    id: 7,
    question: "",
    answer: "",
  },
  {
    id: 8,
    question: "",
    answer: "",
  },
  {
    id: 9,
    question: "",
    answer: "",
  },
  {
    id: 10,
    question: "",
    answer: "",
  },
  {
    id: 11,
    question: "",
    answer: "",
  },
  {
    id: 12,
    question: "",
    answer: "",
  },
  {
    id: 13,
    question: "",
    answer: "",
  },
  {
    id: 14,
    question: "",
    answer: "",
  },
  {
    id: 15,
    question: "",
    answer: "",
  },
  {
    id: 16,
    question: "",
    answer: "",
  },
  {
    id: 17,
    question: "",
    answer: "",
  },
  {
    id: 18,
    question: "",
    answer: "",
  },
  {
    id: 19,
    question: "",
    answer: "",
  },
];
