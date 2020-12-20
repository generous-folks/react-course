# 5/ Event Driven Design and shared store, the Redux philosophy within React Context

| Create                                               | Modify |
| ---------------------------------------------------- | ------ |
| src/modules/articles/articles.actions.js             | App.js |
| src/modules/articles/articles.reducer.js             |
| src/modules/articles/articles.context.js             |
| src/modules/articles/articles.selectors.js           |
| src/modules/articles/components/article.component.js |
| src/pages/article.page.js                            |

## Step by step

### articles.actions.js

Create `src/modules/articles/articles.actions.js`, it should export a `requestArticles` function that is a curried function no parameter on first call and async dispatch on second call. The body of the function should be an awaited call to the `getArticles` API utils method and a return statement that calls dispatch with an object with properties "type" set`articles/RECEIVED_ARTICLES`and "articles" set to the result of getArticles

### articles.reducer.js

Create `src/modules/articles/articles.reducer.js`, export an initialState { articles: [] } and articlesReducer. Catch the RECEIVED_ARTICLES action type and spread the action articles in the state.

### articles.context.js

Create `src/modules/articles/articles.context.js`
Basically copy [This snippet](https://kentcdodds.com/blog/how-to-use-react-context-effectively#conclusion), our reducer/context implementation is based on it

### articles.selectors.js

Create `src/modules/articles/articles.selectors.js`. In redux a selector is a function taking the state as parameter and returning a value from it, in our case something like:

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

But this is not very pretty so lets implement redux useSelector in `src/utils/context.utils.js` at the difference that we need to give it access to state.

```js
export const useSelector = (useReducerState, selector = state => state) => {
  if (!useReducerState) {
    throw new Error(
      'You need to provide the reducer State of this resource to get its state and dispatch',
    );
  }

  const state = useReducerState();

  return selector(state);
};

// usage
const articles = useSelector(useArticlesState, getArticlesSelector);
```

This is great, this is what you would expect from redux, why not. But as e creating custom stateful hooks that we will reuse, why not implement a fetching effect whenever the state doesn't match a condition ?

```js
export const useSelector = (
  useReducerHook,
  selector = state => state,
  { shouldFetch = false, fetchCondition = element => !!element, fetchAction },
) => {
  if (!useReducerHook) {
    throw new Error(
      'You need to provide the reducer hook of this resource to get its state and dispatch',
    );
  }

  const [state, dispatch] = useReducerHook();

  const selectedValue = selector(state);

  useEffect(() => {
    if (shouldFetch && fetchCondition(selectedValue) && fetchAction) {
      dispatch(fetchAction());
    }
  }, [dispatch, selectedValue, shouldFetch, fetchCondition, fetchAction]);

  return selectedValue;
};

// usage in separate files
export const useArticlesSelector = () =>
  useSelector(useArticles, ({ articles }) => articles, {
    shouldFetch: true,
    fetchCondition: articles => articles.length === 0,
    fetchAction: requestArticles,
  });

const articles = useArticlesSelector();
```

### article.component

The single article view

Create `src/modules/articles/components/article.component.js`

### article.page

The page container
Create `src/pages/article.page.js`

### App.js

Modify `App.js`
