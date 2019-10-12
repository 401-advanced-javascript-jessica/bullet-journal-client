import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Components/Form/Form';
import Auth from './Components/Auth/Auth';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }


  render() {
    return (
      <>
        <Auth />
        {
          this.props.tasks.map((task, idx) => (
              <li key={idx}>
                {task.title}
              </li>
          ))
        }
          <Form />

      </>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    isAuthenticated: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(App);

App.propTypes = {
  tasks: PropTypes.array,
};
