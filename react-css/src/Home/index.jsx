import React, { PureComponent } from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
    font-size:50px;
    color:red;
`

export default class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <h2>我是home标题</h2>
                <div>
                    <span>轮播图</span>
                </div>
            </HomeWrapper>
        )
    }
}
