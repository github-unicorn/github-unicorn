# Contributing

To maintain some project patterns, we've added this contribution guide for help those who want to contribute to this project.

## Fork this project and create a new branch

1. Fork this project: (<https://github.com/github-unicorn/github-unicorn/fork>)
2. Clone the forked repository and create a new branch: (`git checkout -b branch_name`)
3. Commit your changes: (`git commit -m 'Type: small description'`)
    1. Available Types (replace in Type): add|feat|fix|docs|theme
4. Push commited changes: (`git push origin branch_name`)
5. Create a new Pull Request (if it is your first PR, follow [this](https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/) tutorial to understand how it does)

## How to contribute with a new theme?

- First, you need to fill all color levels and give a name to the new theme. So, add the code below at the [themes.json](themes.json) file with your changes:

```json
  ,
  "Theme_Name": {
    "lv1": "#",
    "lv2": "#",
    "lv3": "#",
    "lv4": "#"
  }
```

- After this, add a new select option on [popup.html](popup.html) file:

```html
<option value="Theme_Name">Theme Name</option>
```

- Finally, add in alphabetical order the name of the new theme on the Available themes list in the [README](README.md) file:

```html
<li> Theme Name </li>
```
