import React, {Component} from 'react';
import AddTodo from "../containers/HeaderContainer";
import TodoItem from "./TodoItem";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let element;

        if (this.props.todoList.length !== 0) {
            element = (
                <ul>
                    {this.props.todoList.map(todo => { return <TodoItem key={`item-${todo.id}`} {...todo} {...this.props.actions}/>})}
                </ul>
            )
        } else {
            element = <p>Nothing to do 👌</p>
        }

        return element
    }
}

export default Main;
