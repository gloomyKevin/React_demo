import React, { Component } from 'react';
import { Fragment } from 'react';

class 列表中keys的作用 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: ["盗梦空间", "红辣椒"]
        }
    }
    render() {
        const { lists } = this.state;
        return (
            <Fragment>
                <ul>
                    {
                        lists.map((item, index) => {
                            return (
                                <li key={item}>{item}</li>
                            )
                        })
                    }
                </ul>
                <button onClick={e => this.addItem()}>添加</button>
            </Fragment>
        );
    }

    addItem() {
        this.setState({
            lists: ["大话西游", ...this.state.lists]
        })
    }
}

export default 列表中keys的作用;