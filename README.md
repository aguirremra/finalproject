# LiTLiST

This is the place to find only favorite places and products... AKA _lit_ places and products.  Sign in and set up your LitList by searching places and products and identifying which result it is.  The app will save its details along with your comment as to why you would recommend.  You can browse others' favorites as well for great ideas for where you might want to visit next or what product you may want to try. 

## Getting Started

These instructions will get you a copy of the project on your local machine for development and testing purposes. See Deployment for notes on how to deploy the project on a live system.

### Starting the App Locally

Start by installing front and backend dependencies. While in this directory, run the following commands:

```
yarn installDeps
cd client
yarn install
cd ..
```

After both installations complete, run the following command in your terminal:

```
yarn start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

### Running the Tests

Placeholder for test documentation

## Deployment (Heroku)

After confirming that you have an up to date git repository and a Heroku app created, complete the following:

1. Build the React app for production by running the following command:

```
yarn build
```
> Note: A yarn build will be required to register any new Post requests from any front-end JavaScript to to prevent any proxy server errors.

2. Add and commit all changes to git
```
git add .
git commit -m "[your comment]"
```

3. Push to Heroku

```
git push heroku master
```

If all previous steps were followed correctly, the application should be deployed to Heroku!

## Built With

* React - front end framework
* MySQL - relational database
* [Placeholder]

## Built By

* Maria Reinbach
* Dan Moneypenny
* Enrico Bernardo
* Zazil Toma
* Brian McCurdy

