# 6/ Sharing state between providers and components

Let's create the Cart module !

We need a Shopping Cart that is fixed and stays with us along our navigation through our incredibly fascinating Shopping App.

Let's think of it as HTML first, it's like the aside of a section.

Where should it belong ? It's a module, of course, but it should be instantiated at a page level, and it kinda bring the need to add some wrapper, flex and box sizing to every pages.
We have two options:

- Create a **CartLayout** components as a parent for the pages content, just like the page wrapper **Layout**
- Create a HOC (Higher order Component), to add the said Layout.

The two solutions are very similar but, in our case, the only thing we need is some reusable jsx across pages, it's a regular Component role to needs, rather than adding logic or interact with props, which would fit more with a HOC.

| Create                                              | Modify                                                   |
| --------------------------------------------------- | -------------------------------------------------------- |
| src/modules/cart/cart.actions.js                    | src/App.js                                               |
| src/modules/cart/cart.reducer.js                    | src/pages/home.page.js                                   |
| src/modules/cart/cart.context.js                    | src/pages/home.page.js                                   |
| src/modules/cart/cart.selectors.js                  | src/modules/articles/components/articleCard.component.js |
| src/modules/cart/components/cart.component.js       |
| src/modules/cart/components/cartLayout.component.js |

## Step by step

To begin with, let's duplicate the **articles** modules and rename it cart, it should be pretty step forward to adapt it.

### src/modules/cart/cart.actions.js

Remove everything from the past articles.
Create two action creators ADD_TO_CART and REMOVE_FROM_CART
Create two simple methods that returns straight object actions. **addToCart** takes `article` as only parameter and returns `article` as property in the action.
**removeFromCart** takes `article` as only parameter and returns id as property in the action

### src/modules/cart/cart.reducer.js

A Shopping Cart is nothing too ambitious to build but you need at least increment and decrement actions on the shopping items. You need to report those actions two actual data storage/update in the state.
You could be tempted to think of it as a list, an array you'd map around to display some `<li></li>`. You could push and slice, why not.
But, while this is possible, this would demand a lot of calculations at each update and won't be very readable.

An object _Map_ suits better our needs, we can increment and decrement the article occurrences by attaching a property `occurrences` to it in the state.

Create and export the initial state `{ articles: {}}`
Catch the two actions created in cart.actions

On ADD_TO_CART:

- check if there is an id corresponding to the action.article one, if so, return early by setting the action.article in the articles, using its id as key.
- Afterwards, it means we have found an existing similar article in the state, so we only need to get its number of occurrences in the state. As we haven't set it on the first article we got in the early return, it means the value of `state.articles[article.id].occurrences` is _undefined_ when you are adding a second occurrence. Only modify the number of occurrences of the matching article in the state.

On REMOVE_FROM_LIST:
