/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { loading, error, repos } = this.props;

    return (
      <article>
        <Helmet
          title="Login"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />

          <div className="container">
            <div className="container text-center">
              <form className="form-signin" data-ember-action="2">
                <h2 className="form-signin-heading">Sign in</h2>

                <small className="text-muted">Connect force test with your developer salesforce org.</small>
                <br/><br/>
                  <p>
                    <img src="https://upload.wikimedia.org/wikipedia/en/3/34/SFDC_logo.png"/>
                  </p>
                  <br/><br/>
                <div className="input-group">
                  <span className="input-group-addon addon-sfdc">
                    <i className="fa fa-fw fa-2x fa-cloud fa-fw"></i>
                  </span>
                  <a className="btn btn-lg btn-block btn-sfdc" href="./api/auth"> Login with Salesforce</a>
                </div>
              </form>
            </div>
        </div>
      </article>
    );
  }
}

LoginPage.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};
// Wrap the component to inject dispatch and state into it
export default LoginPage;
