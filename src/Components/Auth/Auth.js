import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { signinUser, signupUser } from '../../Store/actions/user-actions';

class Auth extends React.Component {
    state = {
      username: '',
      password: '',
    };

    handleChange = (event) => {
      event.preventDefault();
      this.setState({
        [event.target.name]: event.target.value,
      });
    };

    handleLogin = (event) => {
      event.preventDefault();
      console.log(event.target);
      this.props.fetchExistingUser(this.state.username, this.state.password);
    }

    handleSignup = (event) => {
      event.preventDefault();
      console.log(event.target);
      this.props.fetchNewUser(this.state.username, this.state.password);
    };


    render() {
      return (
        <>

                <TextField
                    id="standard-name"
                    name="username"
                    type='text'
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder='Enter your Username'
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    name="password"
                    type='text'
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder='Enter your Password'
                    margin="normal"
                />
                <Button
                    variant={'contained'}
                    color="primary"
                    value='login'
                    type='button'
                    onClick={this.handleLogin}
                    >
                    Login
                </Button>
                <Button
                    variant={'contained'}
                    color="primary"
                    value='signup'
                    type='button'
                    onClick={this.handleSignup}>
                    SignUp
                </Button>

        </>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    password: state.password,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewUser: (username, password) => {
      const creds = { username, password };
      dispatch(signupUser(creds));
    },
    fetchExistingUser: (username, password) => {
        const creds = { username, password };
      dispatch(signinUser(creds));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Auth);

Auth.propTypes = {
  fetchNewUser: PropTypes.func,
  fetchExistingUser: PropTypes.func,
};
