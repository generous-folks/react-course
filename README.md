# React Course

## Requirements

- Yarn
- Node >=10.13

## Getting Started

In your terminal

- Install project locally : `git clone https://github.com/generous-folks/react-course.git`
- Install the dependencies `cd react-course && yarn`

Start the app :

- For the demo : `yarn start:demo`
- For an exercise : `yarn ex $exerciseNumber`
  > e.g. : `yarn ex 1`

## What you'll learn

You will create a simple shopping app step by step.
From the basic vanilla React example to a fully featured one with routing, global state management, lazy loading and so on.
It consists on a shared layout, a list of products, a product page and a shopping cart mostly.

We can't cover everything in this course, but we try to give a good overview of some common ways to build react apps.

### react

- Understanding of React principles
- Using Class and Functional components
- Managing state and props
- PropTypes checking
- Understanding lifecycles
- Context API
- Using hooks
- Code splitting and lazy loading
- Architecture and code design

### react-router

- Basic Routing
- Param Matching
- Dynamic Routing and Code splitting

### styling

- CSS
- CSS-in-JS
- Material-UI library
- Styled-Components
- Global Theme usage

### redux

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

- Build the JSX: Create a div > h4, ul > li structure under the app-title. You need to use those data-testid attributes: articles-container, articles-title, articles-list, article-\$id. See snapshot for help
- Fetch the articles: use a combination of useState and useEffect to perform the async call and persist the data`,
- Update the JSX: iterate over the articles using .map to display the item title in the `<li data-test-id article-\$id></li>`
- `yarn test 1`

#### 2/ Using react-router-dom to create pages

- Create a "pages" directory, with the files {home,about,contact}.page.js
- In about and contact files create a div with a h2 and a react-router-dom Link to /
- In home.page, copy everything from App.js and add two Links to about and contact page under the h2

#### 3/ Wrapping pages, building layout with Material-UI

- Create a "components" directory, with the file navbar.component.js from material-ui examples
- Add a layout.component.js to the "components" directory, it will only return a Fragment holding the Navbar and a Material-UI container rendering children props as siblings
- In each page component, replace the div parent with the Layout Component, it is the pages container
- In about and contact pages, add a Material-UI Box component to wrap the h2 and the Link. Use a MUI Button component={Link} instead of the simple Link

#### 4/ Component composition, modules architecture, understanding responsibility

- Create `src/modules/articles/articlesList.component.js` and extract the state, effect and the articles markup from the home page, then use ArticlesList inside the home page, everything should look like before
- Create `src/modules/articles/articleCard.component.js` from the Card MUI example, ArticleCard will get article={article} as prop (see API /fixtures/articles.json). Then replace the html markup by the ArticleCard in the ArticlesList

#### 5/ Event Driven Design and shared store, the Redux philosophy within React Context

- Create `src/modules/articles/articles.actions.js`, it should export a `requestArticles` function that is a curried function no parameter on first call and async dispatch on second call. The body of the function should be an awaited call to the `getArticles` API utils method and a return statement that calls dispatch with an object with properties "type" set`articles/RECEIVED_ARTICLES`and "articles" set to the result of getArticles
- Create `src/modules/articles/articles.reducer.js`, export an initialState { articles: [] } and articlesReducer. Catch the RECEIVED_ARTICLES action type and spread the action articles in the state.
- Create `src/modules/articles/articles.context.js`
  Basically copy [This snippet](https://kentcdodds.com/blog/how-to-use-react-context-effectively#conclusion), our reducer/context implementation is based on it
- Create `src/modules/articles/articles.selectors.js`. In redux a selector is a function taking the state as parameter and returning a value from it, in our case something like:

```js
const getArticlesSelector = state => state.articles;

const ArticlesList = () => {
  const articles = getArticlesSelector(useArticlesState());
};

// This could be implemented
const ArticlesList = () => {
  const articles = useArticlesStateWithSelector(getArticlesSelector);
};
```

But this is not very pretty so lets implement redux useSelector in `src/utils/context.utils.js`

```js
```

- Create `src/modules/articles/components/article.component.js`
- Create `src/pages/article.page.js`
- Modify App.js

### My insights

- Most problems are avoided by keeping components single purposed.

What is this component role ? Should it display something ? Ok then, that's the only thing it does. Should it fetch some data ? Ok, if it must, but all the logic should be factorize elsewhere, components are not the place for business functions definitions.

- Prefer using the state setter callback to access the state current value in your effects. Return the current value in case you shouldn't update the state, it will do nothing.

```js
// Reference will never change
const getSomeNewValue = () => {};

export const Component = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const data = getSomeNewValue();
    setValue(currentValue => (currentValue === null ? data : currentValue));
  }, [getSomeNewValue, setValue]);
};
```

- BE VERY CAREFUL ABOUT REFERENCES, everywhere.

Anonymous Objects, Functions, whatever, are bad. Always use constants for almost everything: strings, objects and functions. Generally create any object or function outside the scope of the component. If you must, then memoize them with useCallback and useMemo. Doing something like the following could lead to dramatic events :

```js
const Component = (props) => {
  // imagine some other props and state that makes it re-renders...
  // until props.bar is defined, the reference of foo will change because on each re-render a new object is created
  const foo = props.bar || {};

  return <OtherComponent someProp={foo}>
}
```

Instead do

```js
const emptyFoo = {};

const Component = (props) => {
  // Waw, you saved the planet and get to the next stage
  return <OtherComponent someProp={props.bar || emptyFoo}>
}
```

- KEEP YOUR EFFECTS CLEAN: use eslint plugin hooks to be warned about needed dependencies, you can't rely on let and refs to trigger your effects.

While effects dependencies allow to detect changes between updates and trigger the effect consequently, react does only update on props and state change. If your value is mutated after a re-render, or before, you might not get the expected behavior. Embrace immutability the most you can.

- Hard to grasp redux but it feels very natural after you clearly visualize each piece and its underlying mechanics. Everything fits together.

- Whatever I say, react was thought to let you free in implementation details choices

### Prerequisites

- Knowing the basics of React, having already done something basic like a to do list. [See Documentation](https://reactjs.org/)

- Being familiar with JS Native Objects and their methods (Array, String, Object, Number, Boolean) [See Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

- Having notions of destructuring, spreading, currying, functional programming, immutability is a huge plus.

- Read **Kent C. Dodds** articles [Application state management](https://kentcdodds.com/blog/application-state-management-with-react)
  and [How to use Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)

### Ideas for remote groups learning

#### Mob programming

A well organized and timed mob programming could be a good format for a remote session. See how Live share + Teams|Meet|Slack screen sharing works

#### Live share on common branch

- Create a set of User Stories for each participant
- Each participant should see every concepts (unless if able to target different needs for each participant => very personalized but hard to coordinate)
- Format cannot be the same as this one. There should be a set of visual components / business modules and state management => see to add features (user account, search, product customizing)
