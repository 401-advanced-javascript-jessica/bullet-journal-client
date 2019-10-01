import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: '',
    };
  }

    handleChange = (event) => {
      const { value } = event.target;
      this.setState({ newTask: value });
    };


    handleSubmit = (event) => {
      event.preventDefault();
      this.props.createNewTask(this.state.newTask);
      this.setState({ newTask: '' });
    };


    render() {
      return (
        <>
                <form onSubmit = {this.handleSubmit}>
                    <input
                        type='text'
                        value={this.state.newTask}
                        onChange={this.handleChange}
                        placeholder='Enter a Task Name'
                    />
                    <button type='submit'> Create a New Task</button>
                </form>
        </>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewTask: (taskName) => {
      dispatch({
        type: 'TASK_CREATE',
        payload: taskName,
      });
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  createNewTask: PropTypes.func,
};
