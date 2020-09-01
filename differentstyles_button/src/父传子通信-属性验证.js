import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Father_to_son extends Component {
    render() {
        return (
            <div>
                <ChildCpn name="kevin" age={18} height={1.88} names={["abd", "def"]} />
            </div>
        )
    }
}

export class ChildCpn extends Component {
    constructor(props) {
        super();
        this.props = props;
    }

    render() {
        const { name, age, height, names } = this.props;
        return (
            <div>
                <h2>{name + age + height}</h2>
                <ul>
                    {
                        names.map((item, index) => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

ChildCpn.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    height: PropTypes.number,
    names: PropTypes.array
}

ChildCpn.defaultProps = {
    name: "default name",
    age: "default age",
    height: "default height",
    names: ["default", "default"]
}

export class ChildCpn2 extends Component {
    static propTypes = {

    }

    static defaultProps = {

    }
}