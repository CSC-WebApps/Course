
# Mocking

Run `npm install`. 

```| {type: 'terminal'}
```

Run script.

```js | {type: 'script'}
const _ = require("underscore");
const analytics = require("./github.js");

// Load mock instance
const github_mock_services = require('./github_mock');

// Which person is assigned to most to issues?
async function findMostFrequentAssignee(user, repo) {
	// mock data needs list of issues.
	let issues = await github.getIssues(user, repo);
	let names = issues.map(issue => issue.assignee);
	let frequency = _.countBy(names, function (name) { return name; });
	let max = _.max(_.keys(frequency), function (item) { return frequency[item] });
	return { userName: max, count: frequency[max] };
}

await findMostFrequentAssignee("testuser", "Hello-World");
```