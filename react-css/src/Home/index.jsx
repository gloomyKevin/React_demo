import React, { PureComponent } from 'react';
import styled from 'styled-components';

const OwnInput = styled.input.attrs({
    placeholder: "kevin",
    bColor: "red"
})`
    background-color: lightblue;
    background-color: ${props => props.bColor};
    color: ${props => props.color};
`
const HomeWrapper = styled.div`
    font-size: 50px;
    color: red;
        .banner {
            background-color: blue;
        }
        span {
            color: #fff;

            &.active {
            color: #f00
            }

            &:hover {
                color: green;
            }

            &:after {
                content: "aaa"
            }
        }
`

export default class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            color: "red"
        }
    }

    render() {
        return (
            <HomeWrapper>
                <h2>我是home标题</h2>
                <div>
                    <span>轮播图</span>
                    <OwnInput type="text" color={this.state.color} />
                </div>
            </HomeWrapper>
        )
    }
}
