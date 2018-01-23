import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';
import ApiResultsPlace from './ApiResultsPlaces';
import ApiResultsProducts from './ApiResultsProducts';
import Container from '../../components/Containers/Container';
import './ApiSearch.css';


class ApiSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: [],
      selectValue: "",
      searchString: "",
      resultsArray: [],
      resultsMsg: "",
      profile: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
    this.getSelectedResult = this.getSelectedResult.bind(this);
    this.getCategory = this.getCategory.bind(this);
  }

  handleFormSubmit(event) {
    console.log("CurrentCategory: " + this.state.chooseCategory);
  let currentCategory = this.state.chooseCategory;
    event.preventDefault();
    if(currentCategory === "places") {
      API
        .getPlaces(this.state.searchString)
        .then((res) => {
          let returns = [];
          for (let i= 0; i < res.data.length; ++i)
            returns.push(res.data[i]);

          this.setState({resultsArray: returns});
          console.log(this.state.resultsArray);
          this.renderSearch();
        });
    } else if(currentCategory === "products") {
      const itemNum = 0;
      API
        .getProducts(this.state.searchString)
        .then((res) => {
          console.log("RESPONSE - AmazonProduct: ", res.data.Item);
           let returns = [];

          for (let i= 0; i < res.data.Item.length; ++i)
            returns.push(res.data.Item[i]);
          this.setState({resultsArray: returns})
          console.log("ResultsArray:", this.state.resultsArray);
        });
    }
 
  }//end handsubmit

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFormClear(event) {
    event.preventDefault();
    this.setState(this.baseState);
  }

  getCategory(selectValue) {
    this.setState({
      categoryValue: selectValue
    })
  }

  getResultsMsg(resultCount) {
    if(resultCount === 0) {
      this.setState({
        resultsMsg: `No results for ${this.searchString}.`
      });
    } else if(resultCount=== 1) {
      this.setState({
        resultsMsg: `1 result for ${this.searchString}.`
      });
    } else {
      this.setState({
        resultsMsg: `${resultCount} for ${this.searchString}.`
      })
    }
  }
getSelectedResult(result){
  const { userProfile, getProfile } = this.props.auth;
  // if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        console.log("Profile ", profile);
        // return item;
        if (result.listType === "places") {
          API.savePlace({
            place_id: result.place_id, 
            name: result.name,
            image: result.photo,
            address: result.address,
            city: result.city,
            category: result.category,
            user_id: profile.sub,
            user_nickname: profile.nickname,
            user_image: profile.picture 
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
            //end savePlace

        } else if (result.listType === "products") {
          console.log("I'm in the products");
          API.saveProduct({
            product_id: result.upc.toString(), 
            name: result.title,
            image: result.img.toString(),
            category: result.category.toString(),
            brand: result.brand,
            url: result.purchase_link,
            price: result.price,
            user_id: profile.sub,
            user_nickname: profile.nickname,
            user_image: profile.picture 
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
            //end saveProduct
        }//end if/else

      });
    // } else {
    //   this.setState({ profile: userProfile });
    // }
  }

  renderSearch() {
    let currentCategory = this.state.chooseCategory;
    if(currentCategory === "places") {
      return this.state.resultsArray.map((place, i) => {
        return (
          <ApiResultsPlace 
            name={place.name}
            rating={place.rating}
            address={place.formatted_address}
            city={place.city}
            key={i}
            place_id={place.place_id}
            photo={place.photos ? place.photos[0].photo_reference : "CmRaAAAAWMgzV5AlVJr5UKg7MKLHvNSGL27ryBebdc2KJlkvsnxA_VYwYu26qaWutqGPuwCduOXHE7azmIAs-0LUORtuywl8VqRooPpxMTAELReZIdTx8eFV2OGQxUBHYX0lkZsUEhAr_DMXM6EHTnlR5hrNFCTxGhS8Zgrr3a3xsIysSYgUPy2qUufGBA"}
            types={place.types}
            listType={this.state.chooseCategory}            
            getPlace={this.getSelectedResult}
          />
        );        
    });
    } else if(currentCategory === "products") {
       return this.state.resultsArray.map((product, i) => {
        return (
           <ApiResultsProducts
            brand={product.ItemAttributes[0].Brand[0]}
            title={product.ItemAttributes[0].Title[0]}
            price={product.ItemAttributes[0].ListPrice ? product.ItemAttributes[0].ListPrice[0].FormattedPrice[0] : "expen$ive"}
            upc={product.ItemAttributes[0].UPC ? product.ItemAttributes[0].UPC : "xoxoxoxoxo"}
            category={product.ItemAttributes[0].Binding ? product.ItemAttributes[0].Binding : "no Category"}
            img={product.MediumImage ? product.MediumImage[0].URL : "http://i1.wp.com/williamlobb.com/wp-content/uploads/2017/10/amazon-frown.jpeg"}
            purchase_link={product.ItemLinks[0].ItemLink ? product.ItemLinks[0].ItemLink[0].URL[0] : "http://www.amazon.com"}
            key={i}
            listType={this.state.chooseCategory}
            getProduct={this.getSelectedResult}
          />
        );
      })     
    }

  }



  render() {

    return (

      <Container width="container">
         <div className="row">
           <form id="apiSearchForm" className="form-inline mt-5" onSubmit={this.handleFormSubmit}>
            <select className="form-control" id="chooseCategory" onChange={this.handleChange} onClick={this.getCategory} defaultValue={this.state.selectValue}>
            <option value="Choose category">Choose category</option>
            <option value="products">Products</option>
            <option value="places">Places</option>
           </select>
           <input type="text" id="searchString" onChange={this.handleChange} className="form-control" placeholder="Search term" value={this.state.searchString} />
           <div className="btn-group" role="group">
              <button onClick={this.handleFormClear.bind(this)} type="reset" className="btn btn-secondary">reset</button>
              <button type="submit" className="btn btn-secondary">search</button>           
           </div>
           </form>
          </div>

          <div className="card-columns mt-5"id="apiResultsDisplay">
                {this.renderSearch()}              
          </div>
      </Container>

    );
  }
}

export default ApiSearch;