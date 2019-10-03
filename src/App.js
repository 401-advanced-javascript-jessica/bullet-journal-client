import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';

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
        <Header />
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
  };
};

export default connect(mapStateToProps)(App);

App.propTypes = {
  tasks: PropTypes.object,
};
