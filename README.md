# trichotomy-react

> React components for trichotomy.

[![NPM](https://img.shields.io/npm/v/trichotomy-react.svg)](https://www.npmjs.com/package/trichotomy-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save trichotomy-react
```

## Usage

The code below will produce [this](https://tgv1975.github.io/trichotomy-react/).

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
                            <Trichotomy>
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
                            <Trichotomy>
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
