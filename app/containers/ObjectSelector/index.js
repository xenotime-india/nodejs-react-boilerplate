/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import brace from 'brace';
import AceEditor from 'react-ace';

import SubHeader from './../../components/SubHeader';
import Table from './../../components/Table';
import 'brace/mode/java';
import 'brace/theme/twilight';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      selection: {},
      data: [
        { id: 1, firstName: 'Joshi', lastName: 'Hickle', address: '@Maruti'},
        { id: 2, firstName: 'Nigam', lastName: 'Eichmann', address: '@Sonu'},
      ],
      columns: [
        { name: 'id', display: 'ID', width: 1 },
        { name: 'firstName' },
        { name: 'lastName' },
        { name: 'address' }
      ]
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  onChange(newSelection) {
    this.setState({selection: newSelection})
  }

  render() {
    const { loading, error } = this.props;

    return (
      <article>
        <Helmet
          title="Dashboard"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        <SubHeader/>
        <div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="white-box">
                <h3 className="box-title">Basic Table</h3>
                <p className="text-muted">Add class <code>.table</code></p>
                <div className="white-box-body">
                <Table activeClass="warning" selected={this.state.selection} onChange={this.onChange} columns={this.state.columns} data={this.state.data} headers={true} select="single">
                  <div style={{margin: '3em', border: '1px solid gray', padding: '1em'}} className="well well-success">
                    <p>This DIV is shown when there is no data in the table. When empty the table renders
                      the child element of the table.</p>
                    <p>Click Reload Data to load new data.</p>
                  </div>
                </Table>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="white-box">
                <h3 className="box-title">Basic Table</h3>
                <p className="text-muted">Add class <code>.table</code></p>
                <div className="white-box-body">
                  <AceEditor
                    width="100%"
                    mode="java"
                    theme="twilight"
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                    tabSize={2}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-12">
              <div className="white-box">
                <div className="white-box-footer">
                  <a href="/" className="btn btn-info btn-rounded waves-effect waves-light pull-right">Next</a>
                  <div className="clear"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
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
export default HomePage;
