![cf](http://i.imgur.com/7v5ASc8.png) lab 25 - Tree Data Structure
====

## Overview
In this lab, a tree data structure was created from an HTML document. The Node.js fs module was used to read the document, and parsed data (i.e., root <html> element and subsequent html tags) was used to build the tree with constructor methods.

## Installation
  * You will need to have Node.js installed
  * Clone this repository
  * Run `npm i` in your command line to install the following developer dependencies listed in the package.json:
    * chai: 4.0.0
    * mocha: 3.4.2

## Viewing the tree
  * To view the DOM tree, run `node index.js` in your command line.
  * Below is a snippet of the tree with `<HTML>` as its root.

  ```javascript
  { val: '<html>',
  children:
   [ { val: '<head>', children: [Object] },
     { val: '<body>', children: [Object] } ] }
{ val: '<head>',
  children: [ { val: '<title>minimal html to tree</title>', children: [] } ] }
{ val: '<title>minimal html to tree</title>', children: [] }
```
* Tree.Protype.add() method was used to create a node and append it as a child of its corresponding parent node.
* Tree.Prototype.preOrder() method was used to implement a depth-first traversal for logging each traversed node.
* Each node has a value and an array of children elements/nodes (empty if none).
* Sample node with val of `<nav>` element and its child with val of `<ul>`   
```javascript
  { val: '<nav>',
  children: [ { val: '<ul>', children: [Object] } ] }
  { val: '<ul>',
  children:
  [ { val: '<li>home</li>', children: [] },
   { val: '<li>about</li>', children: [] },
   { val: '<li>contact</li>', children: [] },
   { val: '<li>signin</li>', children: [] } ] }
```

## File organization and testing
  * Assets folder
    * **minimal.html** - HTML file that was used for this lab
  * Lib folder
    * **fs-read.js** - helper file for reading and parsing the HTML document
    * **tree-node.js** - contains new Node constructor.
    * **tree.js** - contains methods for constructing and traversing tree.
    * **create-dom.js** - required in helper files and built DOM tree with the parsed data. An legend was created to help more easily identify the corresponding array index value.
  * **index.js** - root file for running the application
  * Test
      * To run test, run `npm test` in your command line
