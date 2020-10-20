import {connect} from 'react-redux';
import Main from '../components/Main'

const mapStateToProps = state => {return {todos: state.todos}};

const mapDispatchToProps = () => dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Main)
