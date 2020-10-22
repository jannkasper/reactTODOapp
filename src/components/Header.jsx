import React, {Component} from 'react'
import TodoTextInput from "./TodoTextInput";
import Button from '@material-ui/core/Button';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Fab from '@material-ui/core/Fab';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';


class Header extends Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {input: '', completed: false}
    }

    handleAddTodo = () => {
        if (this.state.input) {
            this.props.addTodo(this.state.input);
            this.setState({input: ''});
            this.child.current.getAlert()
        }
    };

    handleChangeCompleted = () => {
        const completed = this.state.completed;
        this.setState({completed: !completed});
        this.props.completeAll(!completed);
    };

    handleUpdate = (text) => {
        this.setState({input: text});
    };


    render() {
        return (
            <Grid container spacing={3} justify="center">
                <Grid item xs={1.8}>
                    <Fab
                        variant="extended"
                        size="small"
                        color={this.state.completed ? "primary" : "default"}
                        onClick={this.handleChangeCompleted}>
                        {this.state.completed ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                        {this.state.completed ? "MARKED" : "MARK"}
                    </Fab>
                </Grid>
                <Grid item xs={3}>
                    <TodoTextInput
                        newTodo
                        ref={this.child}
                        placeholder="What needs to be done?"
                        update={(text) => this.handleUpdate(text)}
                        onSave={(text) => this.props.addTodo(text)}/>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon fontSize="large" />}
                        onClick={this.handleAddTodo}>
                        Send
                    </Button>
                </Grid>
            </Grid>
        )
    }

}


export default Header
