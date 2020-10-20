import React, {Component} from 'react'


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {input: ''}
    }

    updateInput = input => {
        this.setState({input});
    };

    handleAddTodo = () => {
        // const { addTodo } = this.props;
        // addTodo(this.state.input);
        this.props.addTodo(this.state.input);
        this.setState({input: ''});
    }




    render() {
        return (
            <div>
                <input
                    value={this.state.input}
                    onChange={e => this.updateInput(e.target.value)}/>
                <button onClick={this.handleAddTodo}>Add</button>
            </div>
        )
    }

}


export default Header
