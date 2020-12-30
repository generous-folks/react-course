# React Course

This project is meant to be a 3 days long course on React fundamentals, but especially on **managing the state** and **dealing with hooks**.

## Table of Contents

1. [Requirements](README/#requirements)
2. [Introduction](README/#introduction)
3. [Getting Started](README/#getting_started)
4. [What you'll learn](README/#what_you'll_learn)
5. [Workflow](README/#workflow)
6. [Resources](README/#resources)

## Requirements

[![Generic badge](https://img.shields.io/badge/Node->=12-lightgreen.svg)](https://shields.io/) [![Generic badge](https://img.shields.io/badge/Yarn->=1.22-lightgreen.svg)](https://shields.io/)

## Introduction

Here is the tree architecture of the project.

```txt
.
├── __mocks__
├── config
├── examples
├── exercise-1
├── exercise-2
├── exercise-3
├── exercise-4
├── exercise-5
├── exercise-6
├── exercise-7
├── exercise-8
├── exercise-9
├── exercise-10
├── final-version
├── fixtures
├── node_modules
├── public
├── scripts
└── theory
```

Each `exercise-*` directory is the solution of the previous one.
Validation of an exercise is made through passing the unit tests, it is a **TDD approach** with the tests already written.

### Exercise architecture

This is the bare minimum files you'll see in all the exercises.

```txt
exercise-1
├── README.md
└── src
    ├── __hints__
    │   ├── dialog.js
    │   └── instructions.md
    ├── __tests__
    │   └── App.spec.js
    ├── App.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── utils
        └── api.utils.js

```

- **\_\_hints\_\_** directory: contains the code use to wrap the whole application and display a "README" button in the app so you can see the instructions on the page you are building, in a slightly more graphical way.

### Knowledge Prerequisites

- Knowing the basics of React, having already done something basic like a to do list. [See Documentation](https://reactjs.org/)

- Being familiar with JS Native Objects and their methods (Array, String, Object, Number, Boolean) [See Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

- Having notions of destructuring, spreading, currying, functional programming, immutability is a huge plus.

- Read **Kent C. Dodds** articles [Application state management](https://kentcdodds.com/blog/application-state-management-with-react)
  and [How to use Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

## Getting Started

In your terminal

- Install the project locally: `git clone https://github.com/generous-folks/react-course.git`
- Install the dependencies: `cd react-course && yarn`

Start the app:

- For the demo: `yarn start:demo`
- For an exercise: `yarn ex $exerciseNumber`
  > e.g. : `yarn ex 1`

## What you'll learn

You will create a simple shopping app step by step.
From the basic vanilla React example to a nicely featured one with routing, global state management, lazy loading and so on.
It consists on a shared layout, a list of products, a product page, a shopping cart and a checkout form mostly.

We can't cover everything in this course, but we try to give a good overview of some common ways to build react apps.

> \* = optional

### react

- Understanding of React principles
- Using Class\* and Functional components
- Managing state and props
- PropTypes checking
- Understanding components life cycles
- Context API
- Using hooks
- Architecture and good practices

### react-router

- Basic Routing
- Param Matching
- Dynamic Routing and Code splitting\*

### styling

- CSS
- CSS-in-JS
- Material-UI library
- Styled-Components\*
- Global Theme usage\*

### redux\*

- Configuration and Architecture
- Basic global state management usage
- Middleware
- Connected Router

## Workflow

The repository contains a bunch of folders like :

- **examples** : samples of everything you need to develop the app and to avoid spending time on stack overflow
- **theory** : some important concepts you should know to master this course
- **final-version** : a demo, or the actual final version of the app we're aiming to develop.
- **exercise-X** : All the exercises folders. We thought it was important to jump from an exercise to another having a corrected version of the previous exercise. It also makes more sense for group learning to always be on an equal state while going further.

### Index

#### 1/ Fetching, persisting data locally and list rendering

See [instructions](./exercise-1/src/__hints__/instructions.md)

#### 2/ Using react-router-dom to create pages

See [instructions](./exercise-2/src/__hints__/instructions.md)

#### 3/ Wrapping pages, building layout with Material-UI

See [instructions](./exercise-3/src/__hints__/instructions.md)

#### 4/ Component composition, modules architecture, understanding responsibility

See [instructions](./exercise-4/src/__hints__/instructions.md)

#### 5/ Event Driven Design and shared store, the Redux philosophy within React Context

See [instructions](./exercise-5/src/__hints__/instructions.md)

#### 6/

See [instructions](./exercise-6/src/__hints__/instructions.md)

#### 7/

See [instructions](./exercise-7/src/__hints__/instructions.md)

#### 8/

See [instructions](./exercise-8/src/__hints__/instructions.md)

#### 9/

See [instructions](./exercise-9/src/__hints__/instructions.md)

#### 10/

See [instructions](./exercise-10/src/__hints__/instructions.md)

### My insights

- Most problems are avoided by keeping components single purposed.

What is this component role ? Should it display something ? Ok then, that's the only thing it does. Should it fetch some data ? Ok, if it must, but all the logic should be factorize elsewhere, components are not the place for business functions definitions.

- Prefer using the state setter callback to access the state current value in your effects. Return the current value in case you shouldn't update the state, it will do nothing.

```js
export const Counter = ({ changingProp }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // if count were included to do the addition, we'll get an infinite loop
    setCount(currentCount => currentCount + 1);
  }, [changingProp]);
};
```

- BE VERY CAREFUL ABOUT REFERENCES, everywhere.

Anonymous Objects, Functions, whatever, are bad. Always use constants for almost everything: strings, objects and functions. Generally create any object or function outside the scope of the component. If you must, then memoize them with useCallback and useMemo. Doing something like the following could lead to dramatic events :

```js
// BAD
const Component = (props) => {
  // imagine some props or state that makes it re-renders...
  // until props.bar is defined, the reference of foo will change because on each re-render a new object is created
  const foo = props.bar || {};

  return <OtherComponent someProp={foo}>
}
```

Instead do

```js
// GOOD
const emptyFoo = {};

const Component = (props) => {
  // Waw, you saved the planet and get to the next stage
  return <OtherComponent someProp={props.bar || emptyFoo}>
}
```

- KEEP YOUR EFFECTS CLEAN: use eslint plugin hooks to be warned about needed dependencies, you can't rely on let and refs to trigger your effects.

While effects dependencies allow to detect changes between updates and trigger the effect consequently, react does only update on props and state change. If your value is mutated after a re-render, or before, you might not get the expected behavior. Embrace immutability the most you can.

- Learn redux, it is hard to grasp at first but it feels very natural after you clearly visualize each piece and its underlying mechanics. Everything fits together and enforce the event driven design. Be careful as you can only store static data and limit the amount of it.

- Whatever I say, react was thought to let you free in implementation details choices

### Ideas for remote groups learning

#### Mob programming

A well organized and timed mob programming could be a good format for a remote session. See how Live share + Teams|Meet|Slack screen sharing works

#### Live share on common branch

- Create a set of User Stories for each participant
- Each participant should see every concepts (unless if able to target different needs for each participant => very personalized but hard to coordinate)
- Format cannot be the same as this one. There should be a set of visual components / business modules and state management => see to add features (user account, search, product customizing)

## Resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [React docs](https://reactjs.org/)
- [hooks lifecycles schema](https://wavez.github.io/react-hooks-lifecycle/)
- **Kent C. Dodds** articles [Application state management](https://kentcdodds.com/blog/application-state-management-with-react)
  and [How to use Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
