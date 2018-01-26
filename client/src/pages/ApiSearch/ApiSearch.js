import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../providers/litlist_provider';
import CommentModal from '../../components/commentModal';
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
      profile: [],
      listItems: null,
      showModal: -1,
      comment: "",
      chooseCategory: null,
      errorMsg: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormClear = this.handleFormClear.bind(this);
    this.renderSearch = this.renderSearch.bind(this);
    this.getCommentModal = this.getCommentModal.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.submitCommentModalForm = this.submitCommentModalForm.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log("CurrentCategory: " + this.state.chooseCategory);
    console.log("searchString: ", this.state);
    if (this.state.searchString !== "") { //prevents call to API if search string is empty
    // debugger 
      let currentCategory = this.state.chooseCategory;
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
              this.renderSearch();
            });
        } else {
          this.setState({ errorMsg: "Please choose a Category" });
        }
    }
  }//end handsubmit

  handleChange(event) {
    console.log("Search String: ", event.target.value);
    this.setState({
      [event.target.id]: event.target.value
    });
    if (event.keyCode === 13) {
      this.handleFormSubmit();
    }
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

  getCommentModal(key) {
    console.log("Modal: ", key, this);
    this.setState({
      showModal: key
    });
  }

  submitCommentModalForm(e) {
    e.preventDefault();
    const { userProfile, getProfile } = this.props.auth;
    console.log("comment:" + this.state.comment); // e.comment?
    console.log("key")
    console.log('Submit Comment Modal Form - This is where you want to call your API to save data to your database... smiley face');
  // @TODO: This needs to happen after the modal.
      getProfile((err, profile) => {
        this.setState({ profile });
        console.log("Profile ", profile);
        // return item;
        let i = this.state.showModal
        console.log("key: " + i)

        {this.state.listType === "places"

        ? API.savePlace({
            // place_id: this.state.place_id, 
            // name: this.state.resultsArray[i].name
            // image: this.state.photo,
            // address: this.state.address,
            // city: this.state.city,
            // category: this.state.category,
            // user_id: profile.sub,
            // user_nickname: profile.nickname,
            // user_image: profile.picture,
            // comment: this.state.comment
          })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            //end savePlace

        : console.log("I'm in the products", this.state.listItems[i].props);

          API.saveProduct({
            product_id: this.state.listItems[i].props.upc[0],
            name: this.state.listItems[i].props.title,
            image: this.state.listItems[i].props.img[0],
            category: this.state.listItems[i].props.category[0],
            brand: this.state.listItems[i].props.brand,
            url: this.state.listItems[i].props.purchase_link,
            price: this.state.listItems[i].props.price,
            user_id: profile.sub,
            user_nickname: profile.nickname,
            user_image: profile.picture,
            user_comment: this.state.comment
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
            //end saveProduct
        }//end if/else

      });
  }

  renderSearch() {
    let currentCategory = this.state.chooseCategory;
    if(currentCategory === "places") {
      this.setState({
        listItems: this.state.resultsArray.map((place, i) => {
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
              getPlace={() => this.getCommentModal(i)}
            />
          );        
        })
      });
    } else if(currentCategory === "products") {
      this.setState({
        listItems: this.state.resultsArray.map((product, i) => {
          return (
            <ApiResultsProducts
              brand={product.ItemAttributes[0].Brand ? product.ItemAttributes[0].Brand[0] : product.ItemAttributes[0].ProductGroup[0]}
              title={product.ItemAttributes[0].Title ? product.ItemAttributes[0].Title[0] : "Titleless"}
              price={product.ItemAttributes[0].ListPrice ? product.ItemAttributes[0].ListPrice[0].FormattedPrice[0] : "unknown"}
              upc={product.ItemAttributes[0].UPC ? product.ItemAttributes[0].UPC : "xoxoxoxoxo"}
              category={product.ItemAttributes[0].Binding ? product.ItemAttributes[0].Binding : "no Category"}
              img={product.LargeImage ? product.LargeImage[0].URL : "http://i1.wp.com/williamlobb.com/wp-content/uploads/2017/10/amazon-frown.jpeg"}
              purchase_link={product.ItemLinks[0].ItemLink ? product.ItemLinks[0].ItemLink[0].URL[0] : "http://www.amazon.com"}
              key={i}
              listType={this.state.chooseCategory}
              getProduct={() => this.getCommentModal(i)}
            />
          );
        })
       });    
    } else {
      this.setState({listItems:null});
    }
  }

  getModalItemName(i) {
    if (this.state.chooseCategory === "products") {
      return (
        this.state.resultsArray.length >= i
          && this.state.resultsArray[i].ItemAttributes.length > 0
          && this.state.resultsArray[i].ItemAttributes[0].Title.length > 0)
        ? this.state.resultsArray[i].ItemAttributes[0].Title[0].toString()
        : null;
    }
    else if (this.state.chooseCategory === "places") {
      return (
        this.state.resultsArray.length >= i
          && this.state.resultsArray[i].length > 0
          && this.state.resultsArray[i].name.length > 0)
        ? this.state.resultsArray[i].name
        : null;
    }

  }
  getModalItemImage(i) {
    if (this.state.chooseCategory === "products") {
      return (
        this.state.resultsArray.length >= i
          && this.state.resultsArray[i].LargeImage.length > 0
          && this.state.resultsArray[i].LargeImage[0].URL.length > 0)
        ? this.state.resultsArray[i].LargeImage[0].URL[0]
        : null;
    }
    else if (this.state.chooseCategory === "places") {
      return (
        this.state.resultsArray.length >= i
          && this.state.resultsArray[i].photos.length > 0
          && this.state.resultsArray[i].photos[0].photo_reference.length > 0)
        ? this.state.resultsArray[i].photos[0].photo_reference
        : null;
    }


  }

  render() {
    let renderModal = null;
    if (this.state.showModal > -1) {
      renderModal = <CommentModal
          name = {this.getModalItemName(this.state.showModal)}
          image = {this.getModalItemImage(this.state.showModal)}
          handleSubmit = {this.submitCommentModalForm}
          comment = {this.state.comment}
          updateComment = {(e) => this.setState({comment: e.target.value})}
        />;
    }
    
    return (
      <Container width="container">
         <div className="row">
           <form id="apiSearchForm" className="form-inline mt-5" onSubmit={this.handleFormSubmit}>
            <select className="custom-select" id="chooseCategory" onChange={this.handleChange} onClick={this.getCategory} defaultValue={this.state.selectValue}>
              <option value="Choose category">Choose category</option>
              <option value="products">Products</option>
              <option value="places">Places</option>
           </select>
           <input type="text" id="searchString" onChange={this.handleChange} className="form-control" placeholder="Search term" value={this.state.searchString} />
          <div>
            <button type="submit" className="btn btn-warning">Search</button> 
            {/*<button onClick={this.handleFormClear.bind(this)} type="reset" className="btn">Reset</button>         */}
           </div>
           </form>
          </div>
          {(this.state.errorMsg) ? <div className="alert alert-warning">{this.state.errorMsg}</div> : ''}
          <div className="card-columns mt-5"id="apiResultsDisplay">
            {this.state.listItems}              
          </div>
          {renderModal}
      </Container>

    );
  }
}

export default ApiSearch;