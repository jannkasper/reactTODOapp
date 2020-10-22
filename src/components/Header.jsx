import React, {Component} from 'react'
import TodoTextInput from "./TodoTextInput";
import Button from '@material-ui/core/Button';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Fab from '@material-ui/core/Fab';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

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
                <Fab
                    variant="extended"
                    size="small"
                    color={this.state.completed ? "primary" : "default"}
                    onClick={this.handleChangeCompleted}>
                    {this.state.completed ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                    {this.state.completed ? "MARKED" : "MARK"}
                </Fab>
                <TodoTextInput
                    newTodo
                    placeholder="What needs to be done?"
                    onSave={(text) => this.props.addTodo(text)}/>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    endIcon={<PlaylistAddIcon fontSize="small" />}
                    onClick={this.handleAddTodo}>ADD</Button>
            </div>
        )
    }

}


export default Header
