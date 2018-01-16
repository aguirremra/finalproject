console.log('productServices');
// let axios = require('axios');
const { OperationHelper } = require('apac');
let parseString = require('xml2js').parseString;

const opHelper = new OperationHelper({
    awsId: 'AKIAIIZXHYHLKOCM65WQ',
    awsSecret: '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',
    assocId: 'litlist-20'
});

const productProvider = function() {
    this.fetchProducts = function(searchString) {
        // make call to Amazon
        let params = searchString;
        return opHelper.execute('ItemSearch', {
            'SearchIndex': 'All',
            'Keywords': params,
            'ResponseGroup': 'ItemAttributes, Images'
        })
        /*
        .then((response) => {
            let productResponse;
            parseString(response.responseBody, function(err, result) {
                if (err) { console.log('ERR - Something went wrong parsing XML', err); }
                productResponse = result;
            });
            console.log("Product Brand:", productResponse.ItemSearchResponse.Items[0].Item[1].ItemAttributes[0].Brand[0]);
            console.log("Product Title:", productResponse.ItemSearchResponse.Items[0].Item[1].ItemAttributes[0].Title[0]);
            console.log("List Price:", productResponse.ItemSearchResponse.Items[0].Item[0].ItemAttributes[0].ListPrice[0].FormattedPrice[0]);
            console.log("UPC:", productResponse.ItemSearchResponse.Items[0].Item[0].ItemAttributes[0].UPC[0]);
            console.log("Category:", productResponse.ItemSearchResponse.Items[0].Item[0].ItemAttributes[0].Binding[0]);
            console.log("Small Image:", productResponse.ItemSearchResponse.Items[0].Item[0].SmallImage[0].URL[0]);
            console.log("Medium Image:", productResponse.ItemSearchResponse.Items[0].Item[2].MediumImage[0].URL[0]);
            console.log("Large Image:", productResponse.ItemSearchResponse.Items[0].Item[2].LargeImage[0].URL[0]);
        });
        */
    };
    return this;
};
module.exports = productProvider;