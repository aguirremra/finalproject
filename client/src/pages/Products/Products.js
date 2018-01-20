import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';
import Container from '../../components/Containers/Container';
import ResultsProducts from './ResultsProducts';

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      searchString: "",
      resultsArray: [],
      profile: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
    this.getSelectedProduct = this.getSelectedProduct.bind(this);
  }

   handleFormSubmit(event){
    console.log("Product Specified:", this.state.searchString);
    event.preventDefault();
    const itemNum = 0;
    API
      .getProducts(this.state.searchString)
      .then((res) => {
        console.log("RESPONSE - AmazonProduct: ", res.data.Item);
        console.log("Product Brand:", res.data.Item[itemNum].ItemAttributes[0].Brand[0]);
        // console.log("Product Title:", res.data.Item[itemNum].ItemAttributes[0].Title[0]);
        // console.log("List Price:", res.data.Item[itemNum].ItemAttributes[0].ListPrice[0].FormattedPrice[0]);
        // console.log("UPC:", res.data.Item[itemNum].ItemAttributes[0].UPC[0]);
        // console.log("Category:", res.data.Item[itemNum].ItemAttributes[0].Binding[0]);
        // console.log("Small Image:", res.data.Item[itemNum].SmallImage[0].URL[0]);
        // console.log("Medium Image:", res.data.Item[itemNum].MediumImage[0].URL[0]);
        // console.log("Large Image:", res.data.Item[itemNum].LargeImage[0].URL[0]);
        console.log("URL: ", res.data.Item[itemNum].ItemLinks[0].ItemLink[0].URL[0]); 
        // if (!res.data.results) return; 

        let returns = [];

        for (let i= 0; i < res.data.Item.length; ++i)
          returns.push(res.data.Item[i]);
        this.setState({resultsArray: returns})
        console.log("ResultsArray:", this.state.resultsArray);
      });      
  }; 

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleFormClear(event){
    console.log("Clear me!");
    event.preventDefault();
    this.setState(this.baseState)
  };

  renderSearch(){
      return this.state.resultsArray.map((product, i) => {
        return (
           <ResultsProducts
            brand={product.ItemAttributes[0].Brand[0]}
            title={product.ItemAttributes[0].Title[0]}
            price={product.ItemAttributes[0].ListPrice ? product.ItemAttributes[0].ListPrice[0].FormattedPrice[0] : "expen$ive"}
            upc={product.ItemAttributes[0].UPC ? product.ItemAttributes[0].UPC : "xoxoxoxoxo"}
            category={product.ItemAttributes[0].Binding ? product.ItemAttributes[0].Binding : "no Category"}
            img={product.LargeImage ? product.LargeImage[0].URL : "http://i1.wp.com/williamlobb.com/wp-content/uploads/2017/10/amazon-frown.jpeg"}
            purchase_link={product.ItemLinks[0].ItemLink ? product.ItemLinks[0].ItemLink[0].URL[0] : "http://www.amazon.com"}
            key={i}
            getProduct={this.getSelectedProduct}
          />
        )
      })
  }

  getSelectedProduct(product){
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        console.log("Profile ", profile);
        console.log("Product ", product);
        // return product;
        API.saveProduct({
          product_id: product.upc.toString(), 
          name: product.title,
          image: product.img.toString(),
          category: product.category.toString(),
          brand: product.brand,
          url: product.purchase_link,
          price: product.price,
          user_id: profile.sub,
          user_nickname: profile.nickname,
          user_image: profile.picture 
        })
          .then(res => console.log(res))
          .catch(err => console.log(err));
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  render() {

    return (
      <Container width="container">
         <div className="jumbotron">
          <h2 className="text-center">Search for Products</h2>
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
                {this.renderSearch()}              
          </div>
      </Container>


    );
  }
}

export default Products;
