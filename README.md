
# react-zerok-carousel

The `react-zerok-carousel` is a clone of [`react-elastic-carousel`](https://sag1v.github.io/react-elastic-carousel/). The development of this clone was necessary to implement some adjustments in typing.


> A flexible and responsive carousel component for react

[![NPM](https://img.shields.io/npm/v/react-zerok-carousel.svg?style=flat-square)](https://www.npmjs.com/package/react-zerok-carousel) ![npm](https://img.shields.io/npm/dw/react-zerok-carousel?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-zerok-carousel?style=flat-square)

## Why do we need yet another carousel component

- **Element resize support (true responsiveness)**
  Most of the carousel components are responsive to the viewport size, but this is not a real responsive support as we can have an element with a `width:500px` on a `1200px` screen, most carousel component will "think" we are on a `1200px` mode because they "watch" the view-port's size and not the wrapping element's size.
  This is the reason why `react-eleastic-carousel` is using the [resize-observer](https://developers.google.com/web/updates/2016/10/resizeobserver) which gives us a true responsive support, not matter on what screen size we are.

- **RTL (right-to-left) support**
  Supporting right-to-left languages requires a full support for right-to-left rendering and animations which is not supported in most of the carousel components out there. also, right-to-left support is [important and should be a standard for most applications](https://www.youtube.com/watch?v=A_3BfONFRUc).

## [Live react-elastic-carousel Demos & Docs](https://sag1v.github.io/react-elastic-carousel/)

## Install

```bash
npm install --save react-zerok-carousel
```

or

```bash
yarn add react-zerok-carousel
```

### Note

`react-zerok-carousel` is using [styled-components](https://github.com/styled-components/styled-components) for styling, this means that you should install it as well:

```bash
npm install --save styled-components
```

## Usage

```jsx
import React, { Component } from 'react';
import Carousel from 'react-zerok-carousel';

class App extends Component {
  state = {
    items: [
      {id: 1, title: 'item #1'},
      {id: 2, title: 'item #2'},
      {id: 3, title: 'item #3'},
      {id: 4, title: 'item #4'},
      {id: 5, title: 'item #5'}
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map(item => <div key={item.id}>{item.title}</div>)}
      </Carousel>
    )
  }
}
```

## Playground

[![Edit old react-elastic-carousel](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/21o46mkwnr)

## Development

```console
git clone https://github.com/zeroskullx/react-zerok-carousel.git
cd react-zerok-carousel
yarn
```

### To run the docs site run

```console
yarn start
```

### to run a demo Application run

```console
yarn demo
```

The application is running at http://localhost:8888

## License

MIT © [sag1v](https://github.com/sag1v)

UPDATE [zeroksullx](https://github.com/zeroskullx)
