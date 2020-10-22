import {connect} from 'react-redux'
import Footer from '../components/Footer'
import {deleteCompleted, setFilter} from "../actions/todoActions";
import {getCompletedCount} from "../selectors";
// import {bindActionCreators} from "redux";
// import * as TodoActions from '../actions/todoActions';

const mapStateToProps = state => {return ({
    currentFilter: state.visibilityFilterStore,
    completedCount: getCompletedCount(state)
})};

const mapDispatchToProps = () => dispatch => ({
    // actions: bindActionCreators(TodoActions, dispatch)
});


export default connect(mapStateToProps, {deleteCompleted, setFilter})(Footer)
