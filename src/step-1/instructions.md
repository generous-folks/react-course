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

- First look at the [fetching example](../../examples/users.json), the [list section](../../examples/react/render/lists.js) and the [components section](../../examples/react/components/class.component.js).
- Then add a constructor and state `{ users: [] }` to the `App.js`
- Fetch the `users.json` file in the _fixtures_ directory, and set the state with your success response callback in the right lifecycle.
- Import default the `list.component`  in this folder as `<List />` in the App component and use it in the render method with the state passed as props [see passing props](../../examples/react/props.js)

## Additional resources

If you need more documentation, it is always good to refer to [the official React doc](https://fr.reactjs.org/docs). This exercise mobilizes a few principles:

- lifecycles
- state and props
- jsx
- conditional rendering
- lists
