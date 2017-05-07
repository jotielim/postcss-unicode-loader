# PostCSS Unicode Loader [![Build Status][ci-img]][ci]

[PostCSS] plugin to convert unicode in the CSS selector. This plugin will convert CSS selector that
starts with \00 with the unicode character.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/jotielim/postcss-unicode-loader.svg
[ci]:      https://travis-ci.org/jotielim/postcss-unicode-loader

```css
.\002665 {
    padding: 2rem;
}
```

```css
.♥ {
    padding: 2rem;
}
```

## Usage

```js
postcss([ require('postcss-unicode-loader') ])
```

See [PostCSS] docs for examples for your environment.
