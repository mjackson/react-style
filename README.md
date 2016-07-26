# @mjackson/react-style

[`@mjackson/react-style`](https://github.com/mjackson/react-style) is a React library that provides declarative styling of React components.

> Note: This is still very much a work in progress. I'm not using it in any production apps yet, so proceed at your own risk!

It looks like:

```js
import React from 'react'
import { StyleSheet, Style } from '@mjackson/react-style'

class App extends React.Component {
  render() {
    return (
      <StyleSheet>
        <Style font="14px Helvetica, sans-serif" padding="10px" border="1px solid black">
          This box has a thin black border.
        </Style>
      </StyleSheet>
    )
  }
}
```

A `<Style>` component takes props that are CSS properties (a brilliant, expressive API I borrowed from [jsxstyle](https://github.com/petehunt/jsxstyle)) and inserts them into a real DOM stylesheet (an idea I borrowed from [@threepointone/react-css](https://github.com/threepointone/react-css)) via the ancestor `<StyleSheet>` component. This means that anything that we can use components to manage all of the styling in our application instead of using a separate CSS file.

By default a `<Style>` renders a `<div>`, but you can use any other underlying component using the `<Style component>` prop.

```js
import React from 'react'
import { StyleSheet, Style } from '@mjackson/react-style'

class App extends React.Component {
  render() {
    return (
      <StyleSheet>
        <Style component="p" font="14px Helvetica, sans-serif" padding="10px">
          This box is now a paragraph.
        </Style>
      </StyleSheet>
    )
  }
}
```

`react-style` includes several wrapper components for the most commonly used [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) values. These components are thin wrappers around `<Style>` that let you describe your document structure in terms of `<Block>`s and `<InlineBlock>`s instead of `<Style>`s.

```js
import React from 'react'
import { StyleSheet, Block, InlineBlock } from '@mjackson/react-style'

class App extends React.Component {
  render() {
    return (
      <StyleSheet>
        <Block padding="10px">
          <Block>This is a horizontal list.</Block>
          <Block component="ul">
            <InlineBlock component="li">one</InlineBlock>
            <InlineBlock component="li">two</InlineBlock>
            <InlineBlock component="li">three</InlineBlock>
          </Block>
        </Block>
      </StyleSheet>
    )
  }
}
```

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save @mjackson/react-style

## Thanks

Most of the good ideas in this library come from:

- [Pete's component-based approach to styling documents in jsxstyle](https://github.com/petehunt/jsxstyle)
- [Sunil's react-css library](https://github.com/threepointone/react-css)
