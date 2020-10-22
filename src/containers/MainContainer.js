import {connect} from 'react-redux';
import Main from '../components/Main'
import {bindActionCreators} from "redux";
import * as TodoActions from '../actions/todoActions'
import {getTodosVisibilityFilter} from '../selectors'

const mapStateToProps = state => {
    const { visibilityFilterStore } = state;

    const todoList = getTodosVisibilityFilter(state, visibilityFilterStore);
    return {todoList};
};

const mapDispatchToProps = () => dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)
