import React, { Component} from 'react';
import TodoTextInput from "./TodoTextInput";
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';



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
                    <Checkbox
                        defaultChecked
                        color="default"
                        checked={this.props.completed}
                        onClick={() => completeTodo(this.props.id)}/>
                    <label
                        style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
                        onDoubleClick={this.handleEditing}>{this.props.text}</label>
                    <IconButton aria-label="delete" onClick={() => deleteTodo(this.props.id)}><DeleteIcon /></IconButton>
                </div>
            )
        }
        return <li>
            {element}
        </li>
    }
}

export default TodoItem
