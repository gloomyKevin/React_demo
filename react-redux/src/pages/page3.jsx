import React, { Component } from 'react';
import { Fragment } from 'react';

// import { connect } from '../utils/connect'
import { connect } from 'react-redux'

import {
    subAction
} from '../store/actionCreators'

function Page3(props) {
    return (
        <Fragment>
            <hr />
            <h2>Page</h2>
            <h2>当前数据为:{props.counter}</h2>
            <button onClick={e => props.subNumber(2)}>-2</button>
            <button onClick={e => props.subNumber(4)}>-4</button>
        </Fragment>
    )
}

const mapStateToProps = state = ({
    counter: state.counter
})

const mapDispatchToProps = dispatch => ({
    subNumber(num) {
        dispatch(subAction(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page2);