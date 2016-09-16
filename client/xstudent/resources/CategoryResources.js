import React from 'react';

class CategoryResources extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.params.category_name}</h3>
      </div>
    )
  }
}

export default CategoryResources;
