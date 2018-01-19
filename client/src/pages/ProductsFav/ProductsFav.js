import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';
import ResultsProductsFav from './ResultsProductsFav';
import Container from '../../components/Containers/Container';

class ProductsFav extends Component {
  constructor(props){
    super(props);
    this.state = {
      favProducts: [],
      searchString: "",
      resultsArray: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }

  componentDidMount(){
    this.loadFavProducts();
  }

  loadFavProducts() {
    API.getFavProducts()
      .then(res => this.setState({favProducts: res.data}))
      .catch(err => console.log(err));
  }

  handleFormSubmit(event) {
    console.log(this.state.searchString);
    event.preventDefault();      
  } 

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFormClear(event) {
    console.log("Clear me!");
    event.preventDefault();
    this.setState(this.baseState);
  }

  renderProducts() {
    return this.state.favProducts.map((favProducts, i) => {
      return (
        <ResultsProductsFav 
          name={favProducts.name}
          category={favProducts.category}
          key={i}
          upc={favProducts.product_id}
          photo={favProducts.image}
        />
      );        
    });
  }

  render() {

    return (

      <Container width="container">
         <div className="jumbotron">
          <h2 className="text-center">EVERYONE's LiT Products</h2>
           <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button id="run-search" className="btn btn-outline-secondary" type="submit">search</button>
            </div>
                <input type="text" id="searchString" onChange={this.handleChange} className="form-control" value={this.state.searchString} />
             </div>
           </form>
          </div>

          <div className="row">
                {this.renderProducts()}              
          </div>
      </Container>

    );
  }
}

export default ProductsFav;