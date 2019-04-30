import React from 'react';
import { connect } from 'react-redux';

const YsqResult = (props) => {
  return (
    <>
      <div>results</div>
    </>
  );
};

const mapStateToProps = ({ ysqItems }) => ({ ysqItems });

export default connect(mapStateToProps)(YsqResult);
