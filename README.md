# University List

This list is intended for [GitRoll](https://gitroll.io/) to provide unique
university IDs for campus ranking.

## Contribution

### Add a new school

Firstly, please make sure the school you want to add is not listed already in
the [list](./src/list.json) with its current or former names.
Then, collect necessary information about the university according to the type
definition [here](./src/types.ts). Refer to the comments for the meaning of the
fields.

When all information is collected, and an object of type `University` is
constructed, append it as the last entry in [list.json](./src/list.json).
**IMPORTANT**: please make sure its ID is the smallest vacant ID.
In addition, please make sure the resulted list.json is a valid JSON file (no
trailing comma or comment).

You may refer to PR #2 for an example of adding a new school.
