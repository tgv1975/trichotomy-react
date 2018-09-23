import React, { Component } from 'react';

import Trichotomy from 'trichotomy-react';

export default class App extends Component {
    render() {
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
