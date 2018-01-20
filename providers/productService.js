console.log('productServices');
require('dotenv').config();
// let axios = require('axios');
const { OperationHelper } = require('apac');
let parseString = require('xml2js').parseString;

const opHelper = new OperationHelper({
    awsId: process.env.awsId,
    awsSecret: process.env.awsSecret,
    assocId: process.env.assocId
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
    };
    return this;
};
module.exports = productProvider;