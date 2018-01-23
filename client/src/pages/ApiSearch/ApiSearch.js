import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';
import commentModal from '../../components/commentModal';
import ResultsPlace from './ApiResultsPlaces';
import ResultsProducts from './ApiResultsProducts';
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
  let currentCategory = this.state.chooseCategory;
    event.preventDefault();
    if(currentCategory === "places") {
      API
        .getPlaces(this.state.searchString)
        .then((res) => {
          let returns = [];
          for (let i= 0; i < res.data.results.length; ++i)
            returns.push(res.data.results[i]);

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
    console.log("Clear me!");
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

  renderSearch() {
    let currentCategory = this.state.chooseCategory;
    if(currentCategory === "places") {
      return this.state.resultsArray.map((place, i) => {
        return (
          <ResultsPlace 
            name={place.name}
            rating={place.rating}
            address={place.formatted_address}
            key={i}
            place_id={place.place_id}
            photo={place.photos[0].photo_reference}
            types={place.types}
            getPlace={this.getSelectedResult}
          />
        );        
    });
    } else if(currentCategory === "products") {
       return this.state.resultsArray.map((product, i) => {
        return (
           <ResultsProducts
            brand={product.ItemAttributes[0].Brand[0]}
            title={product.ItemAttributes[0].Title[0]}
            price={product.ItemAttributes[0].ListPrice ? product.ItemAttributes[0].ListPrice[0].FormattedPrice[0] : "expen$ive"}
            upc={product.ItemAttributes[0].UPC ? product.ItemAttributes[0].UPC : "xoxoxoxoxo"}
            category={product.ItemAttributes[0].Binding ? product.ItemAttributes[0].Binding : "no Category"}
            img={product.MediumImage ? product.MediumImage[0].URL : "http://i1.wp.com/williamlobb.com/wp-content/uploads/2017/10/amazon-frown.jpeg"}
            purchase_link={product.ItemLinks[0].ItemLink ? product.ItemLinks[0].ItemLink[0].URL[0] : "http://www.amazon.com"}
            key={i}
            getProduct={this.getSelectedResult}
          />
        );
      })     
    }

  }

getCommentModal() {
  return (
    <commentModal
      name={user.name}
      key={i}
      user_id={user.sub}
      photo={user.image}
      nickname={user.nickname}
      getFavorites={this.getSelectedFavorites}
    />
  );        
}

getSelectedResult(result){
  const { userProfile, getProfile } = this.props.auth;
  if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        console.log("Profile ", profile);
        // return item;
        if (this.state.searchType === "places") {
          API.savePlace({
            place_id: result.place_id, 
            name: result.name,
            image: result.photo,
            address: result.address,
            category: result.category,
            user_id: profile.sub,
            user_nickname: profile.nickname,
            user_image: profile.picture 
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
            //end savePlace

        } else if (this.state.searchType === "products") {
          
          this.getCommentModal();

          API.saveProduct({
            product_id: result.product.upc.toString(), 
            name: result.product.title,
            image: result.product.img.toString(),
            category: result.product.category.toString(),
            brand: result.product.brand,
            url: result.product.purchase_link,
            price: result.product.price,
            user_id: profile.sub,
            user_nickname: profile.nickname,
            user_image: profile.picture,
            comment: 
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
            //end saveProduct
        }//end if/else

      });
    } else {
      this.setState({ profile: userProfile });
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