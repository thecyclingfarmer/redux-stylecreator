import React from 'react';

class ProductCategoryList extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    alert('Dispatch action');
  }

  render() {
    if (!this.props.products.length === 0) return null;

    let products = this.props.products.map((product, index) => {
      let imgUrl = `/catalog/product/${product.small_image}?w=194&dpr=1&auto=format&chromasub=444&q=70&usm=15`;

      return (
        <div className="grid grid-3" key={index}>
          <div className="object" onClick={this.handleClick.bind(this)}>
            <div className="image">
              <img src={imgUrl} alt="alt-text" />
            </div>
            <div className="text">
              <h5>{product.shortname}</h5>
              <span className="price">{product.price} kr</span>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2>{this.props.name}</h2>
        {products}
      </div>
    );
  }
};

export default ProductCategoryList;
