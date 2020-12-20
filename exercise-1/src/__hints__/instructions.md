# 1/ Fetching, persisting data locally and list rendering

- Build the JSX: Create a div > h4, ul > li structure under the app-title. You need to use those data-testid attributes: articles-container, articles-title, articles-list, article-\$id. See snapshot for help
- Fetch the articles: use a combination of useState and useEffect to perform the async call and persist the data`,
- Update the JSX: iterate over the articles using .map to display the item title in the `<li data-test-id article-\$id></li>`
- `yarn test 1`