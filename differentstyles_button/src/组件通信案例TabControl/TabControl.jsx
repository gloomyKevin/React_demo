import React, { Component } from 'react'
import PropTypes from 'prop-types'
import index from '../Button';

export default class TabControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        }
    }
    render() {
        const { titles } = this.props;
        const { currentIndex } = this.state;

        return (
            <div className="tab-control">
                {
                    // console.log(titles)
                    titles.map((item, index) => {
                        return (
                            <div
                                className={"tab-item " + (currentIndex === index ? "active" : "")}
                                onClick={e => this.toogle(index)}
                            >
                                {item}
                            </div>)
                    })
                }
            </div >
        )
    }

    toogle(index) {
        this.setState({
            currentIndex: index
        })
    }
}

TabControl.propTypes = {
    titles: PropTypes.array.isRequired
}
