# breads-render-example

An example of server side rendering (SSR) using custom jsx rendering with react-dom/server

## Getting started

### Install dependencies

Install the following depedencies (in addition to express and dotenv)

-   @babel/core
-   @babel/preset-react
-   @babel/register
-   react
-   react-dom

Command:

```bash
$ npm install --save @babel/core @babel/preset-react @babel/register react react-dom
```

### Configure nodemon for jsx

Create a file at the route of your project named `nodemon.json` and place the following content in:

```json
{
    "watch": ["./"],
    "ext": "js,mjs,cjs,json,jsx"
}
```

### Create the render function

Create a new file `render.js` at the root of your repo and paste in the following content.

```javascript
require('@babel/register')({
    presets: ['@babel/preset-react'],
});

const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const render = (viewName, props) => {
    const componentPath = path.join(__dirname, 'views', viewName);
    const Component = require(componentPath);

    return ReactDOMServer.renderToString(React.createElement(Component, props));
};

module.exports = render;
```

## How to use render

Anywhere in the instructions where it says to use either:

```javascript
res.render('viewname');
```

or

```javascript
res.render('viewname', { data: data });
```

Instead import the `render` function and use it as:

```javascript
res.send(render('viewname'));
```

or

```javascript
res.send(render('viewname', { data: data }));
```

_(Example import statement)_

```javascript
const render = require('../render.js');
```
