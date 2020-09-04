import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

class Counter extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <h2>当前计数</h2>
                <button onClick={e => this.increment()}>+1</button>
            </div>

        )
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}
class Ref extends PureComponent {
    constructor(props) {
        super(props);
        this.titleRef = createRef();
        this.counterRef = createRef();
    }
    render() {
        return (
            <div>
                {/* 字符串方式 */}
                <h2 ref="titleRef">Text1</h2>

                {/* 对象方式 */}
                {/* <Counter /> */}

                <hr />
                <Counter ref={this.counterRef} />
                <button onClick={e => this.btnClick()}>改变counterRef</button>
            </div>
        );
    }

    btnClick() {
        console.log(this.counterRef)
    }

    changeText() {
        this.refs.titleRef = "Text2"
    }
}

Ref.propTypes = {

};

export default Ref;