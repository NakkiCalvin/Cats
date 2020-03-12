import React from 'react';
import { connect } from 'react-redux';
import { Container, Form } from './styled';
import { Formik } from 'formik';
import * as actions from '../../../../features/MainPage/actions/authActions';

const LoginPage = props => {
  console.log('props', props);
  return (
    <Container>
      <div>
        <div>Login</div>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = 'Email is required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            } else if (!values.password) {
              errors.password = 'Password is required';
            }
            return errors;
          }}
          onSubmit={values => {
            props.sendRequest({
              email: values.email,
              password: values.password,
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Email</label> <br />
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <br />
                  {errors.email && touched.email && errors.email}
                  <br />
                </div>
                <div>
                  <label>Password</label> <br />
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <br />
                  {errors.password && touched.password && errors.password}
                  <br />
                </div>
                <button type="submit">Login</button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendRequest: data => {
      dispatch(actions.authenticate(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
