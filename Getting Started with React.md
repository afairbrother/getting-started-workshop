# Getting Started with React
#react

## React Basics
* React is a view library
	* Used at FB since 2011; open sourced in 2013. 
	* It’s just JS
	* Doesn’t care about the underlying stack, only affects the view layer
	* You can decide which parts of your app are going to be driven by react
	* Plays nicely with legacy codebases for incremental update
* React manages the state of your app using a tree structure
	* React components are just a pretty boring data structure that are then rendered to the screen
* Leverages virtualDOM to update only what’s changed on the screen
	* React reconciler looks at the changes to your view layer and only renders what has changed
* Supports component based development - think like website legos

## Components
* Single responsibility components that are highly composable
* Building blocks of your front end code
* <Introduce codesandbox> 
* Two kinds of components 
* JSX

## Thinking in Components 
* Like turtles all the way down, but better
* Don’t overcomponetize
* If it’s being reused a lot, probably make it a component

## Props
* Passing in props to change data
* Composing Components 101

## Making Components DO something
* It really is just javascript. Let’s add an onClick to the button

## Managing State
* Lets have this onClick manage some state for us
* `this.handleButtonClick = this.handleButtonClick.bind(this);` 

## Component Lifecycle



