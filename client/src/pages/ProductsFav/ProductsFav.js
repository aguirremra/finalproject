import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';
import ResultsProductsFav from './ResultsProductsFav';
import MainJumbo from '../../components/Containers/MainJumbo';
import NavBar from '../../components/Navbar';
import Container from '../../components/Containers/Container';

class ProductsFav extends Component {
  constructor(props){
    super(props);
    this.state = {
      favProducts: [],
      resultsArray: []
    };
  }

  componentDidMount(){
    this.loadFavProducts();
  }

  loadFavProducts(){
    API.getFavProducts()
      .then(res => this.setState({favProducts: res.data}))
      .catch(err => console.log(err));
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
          username={favProducts.user_nickname}
          comments={favProducts.user_comment}
          url={favProducts.url}
        />
      );
    });
  }

  render() {

    return (

        <div>
            <MainJumbo
              heading={"The Products of Lit List"}
              lead={"Explore the products favorited by other community members."}
            />
            <NavBar 
              currentView={"products"} 
              {...this.props}
            />

            <Container width="container">
            <h4>Lit Products</h4>
              <div className="card-columns mt-2">
                {this.renderProducts()}
              </div> 
            </Container>
                  
        </div>

    );
  }
}

export default ProductsFav;