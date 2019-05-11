import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startSetSchemas } from '../actions/schemas';

class YsqResult extends React.Component {
  componentDidMount() {
    this.props.dispatch(startSetSchemas()).then(() => {
      console.log('loaded', this.props.schemas);
      this.generateResults();
    });
  }

  generateResults = () => {
    const { ysqItems, schemas } = this.props;
    const results = schemas.map((schema) => {
      const relevantItems = ysqItems.filter((item) => {
        return item.score ? item.schema === schema.id : false;
      });
      const avgScore = relevantItems.reduce((acc, cur) => {
        return acc + cur.score;
      }, 0) / relevantItems.length;
      return {
        schema: schema.name,
        avgScore
      };
    });

    console.log('generating results', results);
  };

  render() {
    return (
      <div className="content-container">
        results
      </div>
    );
  }
}

YsqResult.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ysqItems: PropTypes.arrayOf(PropTypes.object),
  schemas: PropTypes.array
};

YsqResult.defaultProps = {
  ysqItems: [],
  schemas: []
};

const mapStateToProps = ({ ysqItems, schemas }) => {
  return {
    ysqItems,
    schemas
  };
};

export default connect(mapStateToProps)(YsqResult);
