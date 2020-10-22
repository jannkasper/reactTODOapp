import React, {Component} from 'react'
import TodoTextInput from "./TodoTextInput";


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {input: '', completed: false}
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({input: ''});
    };

    handleChangeCompleted = () => {
        const completed = this.state.completed;
        this.setState({completed: !completed});
        this.props.completeAll(!completed);
    };


    render() {
        return (
            <div>
                <input
                    type="checkbox"
                    checked={this.state.completed}
                    onChange={this.handleChangeCompleted}
                />
                <TodoTextInput
                    newTodo
                    placeholder="What needs to be done?"
                    onSave={(text) => this.props.addTodo(text)}/>
                <button onClick={this.handleAddTodo}>Add</button>
            </div>
        )
    }

}


export default Header
