import React from 'react';
import { connect } from 'react-redux';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        title: 'Task1',
        status: 'incomplete',
      },
    };
  }

    handleChange = (event) => {
      const { value } = event.target;
      this.setState({ title: value });
    };

    // handleSubmit = (event) => {
    //   event.preventDefault();
    //   this.props.updateTask(this.state.task);
    //   this.setState({ author: '' });
    // };

    render() {
      return (
        <>

                            <input
                                type='text'
                                value={this.state.task.title}
                                onChange={this.handleChange}
                            />

                <form onSubmit = {this.handleSubmit}>
                    <input
                        type='text'
                        value={this.state.task}
                        onChange={this.handleChange}
                        placeholder='Enter an Author Name'
                    />
                    <button type='submit'> Create a New Author</button>
                </form>
        </>
      );
    }
}

// const mapStateToProps = (state) => {
//   return {
//     tasks: state.tasks,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    createNewAuthor: (taskName) => {
      dispatch({
        type: 'TASK_CREATE',
        payload: taskName,
      });
    },
    updateAuthor: (taskName, id) => {
      dispatch({
        type: 'TASK_UPDATE',
        payload: { title: taskName, id },
      });
    },
    deleteAuthor: (id) => {
      dispatch({
        type: 'TASK_DELETE',
        payload: id,
      });
    },
  };
};


export default connect(null, mapDispatchToProps)(Task);
