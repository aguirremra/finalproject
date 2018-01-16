import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      searchString: "",
      resultsArray: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
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
        console.log("Product Title:", res.data.Item[itemNum].ItemAttributes[0].Title[0]);
        console.log("List Price:", res.data.Item[itemNum].ItemAttributes[0].ListPrice[0].FormattedPrice[0]);
        console.log("UPC:", res.data.Item[itemNum].ItemAttributes[0].UPC[0]);
        console.log("Category:", res.data.Item[itemNum].ItemAttributes[0].Binding[0]);
        console.log("Small Image:", res.data.Item[itemNum].SmallImage[0].URL[0]);
        console.log("Medium Image:", res.data.Item[itemNum].MediumImage[0].URL[0]);
        console.log("Large Image:", res.data.Item[itemNum].LargeImage[0].URL[0]);
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
          <div key={i} id={"result_" + (i +1)} className="well">
            <h4>Brand: {product.ItemAttributes[0].Brand[0]}</h4>
            <h4>Title: {product.ItemAttributes[0].Title[0]}</h4>
            <h4>Price: {product.ItemAttributes[0].ListPrice[0].FormattedPrice[0]}</h4>
            <h4>UPC: {product.ItemAttributes[0].UPC}</h4>
            <h4>Category: {product.ItemAttributes[0].Binding}</h4>
            <img src={product.MediumImage[0].URL} height="100" width="100"/>
            <h4><a href={product.ItemLinks[0].ItemLink[0].URL[0]} target="_blank">Buy me Now!</a></h4>
          </div>
        )
      })
  }

  render() {
    const { profile } = this.state;
    return (
      <div>
       
    <div className="container mt-5">

      <div className="row">




        <div className="col-12">

          <h2 className="text-center">Search for Products</h2>

          <p className="text-center">[[search field here]]</p>


        </div>
      </div>

      <div className="row">
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="searchString">Search Term:</label>
                    <input type="text" className="form-control" id="searchString" onChange={this.handleChange} value={this.state.searchString} />
                </div>
                <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search </button>
                <button type="button" className="btn btn-default" id="clear-all" onClick={this.handleFormClear}><i className="fa fa-trash"></i> Clear Results </button>
            </form> 


      </div>

      <div className="row">

          <div className="panel-body">
            {this.renderSearch()}
          </div>


      </div>
    
    </div> 
 
      </div>
    );
  }
}

export default Products;
