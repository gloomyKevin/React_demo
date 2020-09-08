// export function connect(mapStateToProps, mapDispatchToProps) {
//     return function enhanceHOC(WrappedComponent) {
//         return class extends PureComponent {
//             return class extends PureComponent() {
//             render() {
//                 return <WrappedComponent />
//             }
//         }
//     }
// }
// }

import React, { PureComponent } from 'react'
import store from '../store'

import StoreContext from './context'

export function connect(mapStateToProps, mapDispatchToProps) {
    return function enhanceHOC(WrapperComponent) {
        class EnhanceComponent extends PureComponent {
            constructor(props) {
                super(props);
                this.state = {
                    storeState = mapStateToProps(this.context.getState())
                }
            }

            componentDidMount() {
                this.unsubscribe = store.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(this.context.getState())
                    })
                })
            }

            componentWillUnmount() {
                this.unsubscribe();
            }

            render() {
                return <WrapperComponent
                    {...this.props}
                    {...mapStateToProps(this.context.getState())}
                    {...mapDispatchToProps(this.context.dispatch)}
                />
            }
        }
        EnhanceComponent.type = StoreContext;
        return EnhanceComponent;
    }
}

