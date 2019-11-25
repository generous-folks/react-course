# Exercise 1

## Displaying a list of items

You need to dynamically display a simple list looking like this simple html:

```html
<div>
  <h2>A list of persons</h2>
  <ul>
    <li>Pierre</li>
    <li>Paul</li>
    <li>Jacques</li>
    ...
  </ul>
</div>
```

To do so, here's a few thing you need to achieve :

- First look at the [fetching example](../../examples/users.json) and the [list section](../../examples/react/render/lists.js)
- Then add a constructor and state `{ users: [] }` to the `App.js`
- Fetch the `users.json` file in the _fixtures_ directory, and set the state with your success response callback
- Import the `list.component` in the App component from this folder and use instantiate it in the render method with the state passed as props [see passing props](#)
