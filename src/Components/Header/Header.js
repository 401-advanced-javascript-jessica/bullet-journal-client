import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class Header extends React.Component {
    handleLogin = (event) => {
    };

    handleSignup = (event) => {

    };


    render() {
      return (
        <>
            <Button
                variant={'contained'}
                color="primary"
                type='submit'>
                Login
            </Button>
            <Button
                variant={'contained'}
                color="primary"
                type='submit'>
                SignUp
            </Button>

        </>
      );
    }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);

Header.propTypes = {

};
