import React, { Component, Fragment } from "react"
import ShowTime from "./ShowTime"

class TodoList extends Component {
    constructor(props) {
        super(props);
        // 定义组件状态
        this.state = {
            inputValue: "",
            list: []
        }
    }
    // 渲染函数
    render() {
        return (
            <Fragment>
                <h1>自定义组件1:TodoList</h1>
                <h1>不要忘记哟,自定义组件首字母大写</h1>
                <h1>以及多个标签外部需要一个整体包裹</h1>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                />
                <button onClick={this.handleAddItem}>提交</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li
                                key={index}
                                onClick={this.handleDeleteItem.bind(this, index)}
                            >{item}</li>
                        })
                    }
                </ul>
                <ShowTime />
            </Fragment>
        )
    }

    handleInputChange(e) {
        // this.state.inputValue = e.target.value;
        this.setState({
            inputValue: e.target.value
        })
    }

    handleAddItem = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ""
        })
    }

    handleDeleteItem(index) {
        console.log(index);
        // 犯错原因:不可直接操作state的原则
        // this.state.list.splice(index, 1)
        // 复习后盾人浅拷贝,地址引用的知识点
        // 此处数组为值类型,可直接复制一份给新变量
        const list = [...this.state.list];
        console.log(list);
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
}

export default TodoList