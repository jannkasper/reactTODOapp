import React, {Component} from 'react';
import AddTodo from "../containers/HeaderContainer";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.todos.map(todo => { return <h1>{todo.text}</h1>})}
            </div>
        )
    }
}

export default Main;
