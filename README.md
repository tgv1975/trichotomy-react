# trichotomy-react

> React components to implement Trichotomy UI.

[![NPM](https://img.shields.io/npm/v/trichotomy-react.svg)](https://www.npmjs.com/package/trichotomy-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save trichotomy-react
```

## Usage

The code below will produce [this](https://tgv1975.github.io/trichotomy-react/), provided you have loaded [this stylesheet](https://github.com/tgv1975/trichotomy-react/blob/develop/example/src/index.css), too.

None of the CSS classes in the className property are necessary for this to function. They only add visuals.

However, make sure to have

```css
height: 100%
```

on your body and #root element of your app!

```jsx
import React, { Component } from 'react';

import Trichotomy from 'trichotomy-react';

class Example extends Component {
  render () {
    return (
            <Trichotomy
                direction={'vertical'}
                className="demo-container">

                <Trichotomy.Bar
                    className="demo-top bordered">
                    Main Header
                </Trichotomy.Bar>

                <Trichotomy.Centerpiece
                    className="demo-centerpiece bordered">

                    <Trichotomy
                        direction={'horizontal'}>

                        <Trichotomy.Bar
                            className="demo-bar bordered">
                            <Trichotomy
                                direction={'vertical'}>
                                <Trichotomy.Bar
                                    className="demo-top bordered">
                                    Left Sidebar Header
                                </Trichotomy.Bar>

                                <Trichotomy.Centerpiece
                                    className="demo-centerpiece bordered">
                                    Left Sidebar Center
                                </Trichotomy.Centerpiece>

                                <Trichotomy.Bar>
                                    Left Sidebar Footer
                                </Trichotomy.Bar>
                            </Trichotomy>
                        </Trichotomy.Bar>

                        <Trichotomy.Centerpiece
                            className="demo-center bordered">
                            Main Center
                        </Trichotomy.Centerpiece>

                        <Trichotomy.Bar
                            className="demo-bar bordered"
                            right={true}>
                            <Trichotomy
                                direction={'vertical'}>
                                <Trichotomy.Bar
                                    className="demo-top bordered">
                                    Right Sidebar Header
                                </Trichotomy.Bar>

                                <Trichotomy.Centerpiece
                                    className="demo-centerpiece bordered">
                                    Right Sidebar Center
                                </Trichotomy.Centerpiece>

                                <Trichotomy.Bar>
                                    Right Sidebar Footer
                                </Trichotomy.Bar>
                            </Trichotomy>

                        </Trichotomy.Bar>

                    </Trichotomy>
                </Trichotomy.Centerpiece>

                <Trichotomy.Bar>
                    Main Footer
                </Trichotomy.Bar>
            </Trichotomy>
    );
  }
}
```

## License

ISC © [tgv1975](https://github.com/tgv1975)
