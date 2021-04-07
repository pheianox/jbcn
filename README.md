# JBCN

A lightweight module for working with class names.

JBCN provides a really friendly interface for working with dynamic and complex class names.

* Supports BEM

## Installation 
You can install JBCN using npm

```
npm install jbcn
```

or yarn

```
yarn add jbcn
```

## Examples
### Basic example
The idea is to pass a decriptive object into the JBCN function. After that, it will filter those class names out based on their valies. If the class name value is falsy it'll to ignore it.  
```js
// Import jbcn module
const jbcn = require("jbcn");

// Create a variable for the output
const classNames = jbcn({
    tiny: true,
    expand: false,

    btn: {
        alpha: true,
        beta: true,
        gamma: false
    }
});

// Output: "tiny btn btn--alpha btn--beta"
console.log(classNames);
```
<hr>

### Using with React
You can use JBCN with React to create customizable components.

In this example we create a dynamic component which takes a couple of predefined class names as a prop as well as extra class names. Any extra class name will be added if it's being passed as a prop. That makes our component way poweful.

*App.jsx*
```jsx
import React from "react";
import "styles.css";
import jbcn from "jbcn";



// Let's define our Button component!
const Button = ({ primary, outline, underline, onClick, children, ...extraClassNames }) => {
    const classNames = jbcn({ ...extraClassNames, btn: { primary, outline, underline } });
    return (
        <button onClick={onClick} className={classNames}>
            {children}
        </button>
    );
};



/*
  Here we create a button with passed props "primary", "outline", "center" "mb-5" and "onClick".
  
  However as you can see the class names such as "center" and "mb-5" are not part of the button's defined class names.
  In this case our button is going to add them without any problem, with the help of JBCN.
*/

const App = () => <Button primary outline center mb-5 onClick={console.log}>Click me</Button>

```

*styles.css*
```css
... 

/* Button specific styles */
.btn { ... }
.btn--primary { ... }
.btn--outline { ... }
.btn--underline { ... }


/* General styles that can be applied not only to buttons */
.mb-4 { ... }
.center { ... }

...
```
## License
JBCN is licensed under the MIT license.






