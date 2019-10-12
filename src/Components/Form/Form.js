import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

class Form extends React.Component {
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
              <TextField
                  id="standard-name"
                  label="New Task"
                  type='text'
                  value={this.state.newTask}
                  onChange={this.handleChange}
                  placeholder='Enter a Task Name'
                  margin="normal"
              />

                <Button
                    variant={'contained'}
                    variant={'contained'}
                    color="primary"
                    type='submit'>
                  <AddIcon /> Add New Task
                </Button>
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
        payload: {
          title: taskName,
          date: Date.now(),
          status: 'incomplete',
        },

      });
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
  createNewTask: PropTypes.func,
};
