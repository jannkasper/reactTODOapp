import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';

class TodoTextInput extends Component {

    state = {
        text: this.props.input || ''
    };

    getAlert() {
        this.setState({text: ''})
    }

    handleChange = e => {
        this.setState({ text: e.target.value });
        if (this.props.newTodo) {
            this.props.update(e.target.value);
        }
    };

    handleBlur = e => {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value);
        }
    };

    handleSubmit = e => {
        const text = e.target.value.trim();
        if (e.which === 13 && text.length !== 0) {
            this.props.onSave(text);
            if(this.props.newTodo) {
                this.setState({text: ''})
            }
        }
    };

    render() {

        return (
            <TextField id="standard-basic"
                fullWidth
                type="text"
                autoFocus="true"
                placeholder={this.props.placeholder}
                value={this.state.text}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}/>
        )
    }
}


export default TodoTextInput
