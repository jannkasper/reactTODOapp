import React, { Component} from 'react';
import TodoTextInput from "./TodoTextInput";
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';



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
                <Grid
                    container
                    item xs={3}
                    direction="column"
                    justify="center"
                    alignItems="center">
                        <TodoTextInput
                            text={this.props.text}
                            editing={this.state.editing}
                            onSave={(text) => this.handleSave(this.props.id, text)}/>
                </Grid>
            )
        } else {
            element = (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center">
                        <Checkbox
                            defaultChecked
                            color="default"
                            checked={this.props.completed}
                            onClick={() => completeTodo(this.props.id)}/>
                        <Grid
                            item xs={3}>
                            <label
                                style={{textDecoration: this.props.completed ? 'line-through' : 'none', textAlign: 'left', float: 'left'}}
                                onDoubleClick={this.handleEditing}>{this.props.text}</label>
                        </Grid>
                        <IconButton aria-label="delete" onClick={() => deleteTodo(this.props.id)}><DeleteIcon /></IconButton>
                </Grid>
            )
        }

        return <div key={this.props.key}>{element} </div>

    }
}

export default TodoItem
