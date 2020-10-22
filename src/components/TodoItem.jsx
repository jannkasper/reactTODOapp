import React, { Component} from 'react';
import TodoTextInput from "./TodoTextInput";


class TodoItem extends Component {

    state = {
        editing: false
    };

    handleEditing = () => {
        this.setState({editing: true})
    };

    handleSave = (id, text) => {
        const {editTodo, deleteTodo} = this.props;

        if (text.length === 0) {
            deleteTodo(id);
        } else {
            editTodo(id, text);
        }
        this.setState({editing: false})

    };


    render() {
        const {completeTodo, deleteTodo} = this.props;

        let element;
        if (this.state.editing) {
            element = (
                <TodoTextInput
                    text={this.props.text}
                    editing={this.state.editing}
                    onSave={(text) => this.handleSave(this.props.id, text)}/>
            )
        } else {
            element = (
                <div>
                    <input
                        type="checkbox"
                        checked={this.props.completed}
                        onClick={() => completeTodo(this.props.id)}/>
                    <label
                        style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
                        onDoubleClick={this.handleEditing}>{this.props.text}</label>
                    <button onClick={() => deleteTodo(this.props.id)}>x</button>
                </div>
            )
        }
        return <li>
            {element}
        </li>
    }
}

export default TodoItem
