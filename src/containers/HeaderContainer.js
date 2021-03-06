import {connect} from 'react-redux'
import Header from '../components/Header'
import {addTodo, completeAll} from "../actions/todoActions";

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = () => dispatch => ({});

export default connect(null, {addTodo, completeAll})(Header)
