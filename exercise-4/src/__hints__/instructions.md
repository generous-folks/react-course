# 4/ Component composition, modules architecture, understanding responsibility

| Create                             | Modify |
| ---------------------------------- | ------ |
| src/components/layout.component.js | App.js |
| src/pages/contact.page.js          |

## TL;DR

It doesn't feel "react" to have our home page holding the articles **fetching and rendering logic**, after all we may need a list of articles on other pages sometimes ? Let's clean the home page from state, effect and articles related jsx, and move it into its own place, something called "**Modules**".

**Modules** are **features**, it holds **business rules**.

> The `Layout` component we just created, lies in the `components` directory because it is generic and holds no logic.
> As opposed to components that performs side-effects (like fetching data).
> It doesn't matter if the component is using _useState_ or _useEffect_, what matters is _is it a feature ?_ or more realistically _do I need redux on this?_
> In short, you will often see **modules/features** directories in react/redux applications, each of them is generally representing a portion of the global store.

## Step by step

- Create `src/modules/articles/articlesList.component.js` that exports a function `ArticlesList`. Then extract the state, effect and the articles markup from the home page to your `ArticlesList`. Use `ArticlesList` inside the home page and everything should look like before.

---

- Create `src/modules/articles/articleCard.component.js` from the Card MUI example, ArticleCard will get article={article} as prop (see API /fixtures/articles.json). Then replace the html markup by the ArticleCard in the ArticlesList
