import React from 'react';

class SubHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="row bg-title">
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <h4 className="page-title">Basic Table</h4> </div>
        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">

          <ol className="breadcrumb">
            <li><a href="#">Dashboard</a></li>
            <li className="active">Basic Table</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default SubHeader;
