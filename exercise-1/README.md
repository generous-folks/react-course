# 1/ Fetching, persisting data locally and list rendering

| Action | Files      | Exports |
| ------ | ---------- | ------- |
| MODIFY | src/App.js | App     |

## TL;DR

Build the JSX: Create a defined markup structure. You need to use those data-testid attributes on the corresponding markup:

- `articles-container`
- `articles-title`
- `articles-list`
- `article-$id`

HTML desired output

```html
<div>
  <h2>Foo</h2>
  <div>
    <h4>bar</h4>
    <ul>
      <li>baz</li>
      <li>boz</li>
    </ul>
  </div>
</div>
```

## Step by step

### App.js

- Fetch the articles: use a combination of useState and useEffect to perform the async call and persist the data`,
- Update the JSX: iterate over the articles using .map to display the item title in the `<li data-test-id article-\$id></li>`
- `yarn test 1`
