import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startSetSchemas } from '../actions/schemas';

class YsqResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    this.props.dispatch(startSetSchemas()).then(() => {
      this.generateResults();
    });
  }

  generateResults = () => {
    const { ysqItems, schemas } = this.props;
    const results = schemas.map((schema) => {
      const relevantItems = ysqItems.filter((item) => {
        return item.score ? item.schema === schema.id : false;
      });
      const avgScore = relevantItems.length > 0 ? +(relevantItems.reduce((acc, cur) => {
        return acc + cur.score;
      }, 0) / relevantItems.length).toPrecision(2) : 0;
      return {
        id: schema.id,
        schema: schema.name,
        avgScore
      };
    });
    this.setState({ results });
  };

  render() {
    return (
      <div className="content-container">
        <div className="list-header">
          <div>Schema</div>
          <div>Average Score</div>
        </div>
        {this.state.results && this.state.results.map((item) => {
          return (
            <div className="list-item" key={item.id}>
              <div>{item.schema}</div>
              <div>{item.avgScore}</div>
            </div>
          );
        })}
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
