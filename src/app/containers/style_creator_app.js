import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getDepartment } from '../actions/style_creator';
import { Link } from 'react-router';
import ProductCategoryList from '../components/product_category_list';

class StyleCreatorApp extends Component {

  componentDidMount() {
    let departments = {
      snow: {
        id: 1,
      },
      streetwear: {
        id: 2,
      },
      snowmobile: {
        id: 4,
      },
      motocross: {
        id: 3,
      },
    };

    let department = this.props.params.department;
    let departmentId = 1;

    if (departments[department]) departmentId = departments[department].id;

    this.props.dispatch(getDepartment(departmentId));
  }

  render() {
    const { selectedDepartment } = this.props;
    if (_.isEmpty(selectedDepartment)) { return false; }

    let categoryList = selectedDepartment.map((category) => {
      return (<ProductCategoryList key={category.id} {...category} />);
    });

    return (
      <div className="list">
        {categoryList}
      </div>
    );
  }
}

function select(state) {
  return {
    ...state.stylecreator
  }
}

export default connect(select)(StyleCreatorApp);
