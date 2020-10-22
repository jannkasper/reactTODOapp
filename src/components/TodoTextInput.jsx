import React, {Component} from "react";

class TodoTextInput extends Component {

    state = {
        text: this.props.text || ''
    };

    handleChange = e => {
        this.setState({ text: e.target.value });
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
            <input
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
