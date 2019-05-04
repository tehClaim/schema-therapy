/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
import { startSetSchemas } from '../actions/schemas';

class YsqResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }


  render() {
    return (
      <>
        <div>results</div>
      </>
    );
  }
}

const mapStateToProps = ({ ysqItems }) => ({ ysqItems });

export default connect(mapStateToProps)(YsqResult);
