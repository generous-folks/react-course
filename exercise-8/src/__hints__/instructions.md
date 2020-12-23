# 8/ Custom routing, good practices. Adding checkout

| Action | Files                                                    | Exports        |
| ------ | -------------------------------------------------------- | -------------- |
| Create | src/modules/checkout/checkout.component.js               | {Checkout}     |
| Create | src/modules/checkout/components/review.component.js      | {Review}       |
| Create | src/modules/checkout/components/addressForm.component.js | {AddressForm}  |
| Create | src/modules/checkout/components/paymentForm.component.js | {PaymentForm}  |
| Modify | src/App.js                                               | {App}          |
| Modify | src/pages/checkout.page.js                               | {CheckoutPage} |

## TL;DR

Let's create the checkout modules !

We need a Checkout page that needs a logged in user. So we also need a Login page.
We'll mock the user api and authentication process for now.
We need to bo redirected to the login page on some routes, not all.

## Step by step

To begin with, let's duplicate the **articles** modules and rename it user, it should be pretty step forward to adapt it.

### src/modules/checkout/checkout.component.js

Remove everything from the past articles.
Create two action creators ADD_TO_CART and REMOVE_FROM_CART
Create two simple methods that returns straight object actions. **addToCart** takes `article` as only parameter and returns `article` as property in the action.
**removeFromCart** takes `article` as only parameter and returns id as property in the action

### src/modules/user/user.reducer.js

A Shopping Cart is nothing too ambitious to build but you need at least increment and decrement actions on the shopping items. You need to report those actions two actual data storage/update in the state.
You could be tempted to think of it as a list, an array you'd map around to display some `<li></li>`. You could push and slice, why not.
But, while this is possible, this would demand a lot of calculations at each update and won't be very readable.

An object _Map_ suits better our needs, we can increment and decrement the article occurrences by attaching a property `occurrences` to it in the state.

Create and export the initial state `{ articles: {}}`
Catch the two actions created in user.actions

On ADD_TO_CART:

- Check if there is an **id** corresponding to the **action.article** one, if so, return early by setting the **action.article** in the articles, using **action.id** as key.
- Afterwards, it means we have found an existing similar article in the state, so we only need to get its number of occurrences in the state. As we haven't set it on the first article we got in the early return, it means the value of `state.articles[article.id].occurrences` is _undefined_ when you are adding a second occurrence. Only modify the number of occurrences of the matching article in the state.

On REMOVE_FROM_LIST:

- Start by checking if the property **occurrences** of the `state.articles[action.id]` is set to a number superior to 1. If so return the state with this given article occurrences decremented by one.
- Otherwise, the value **occurrences** is either nil or 1, meaning this time you need to completely delete the matching article entry from the state instead of decrementing its **occurrences**. Return the state with the remaining articles.
