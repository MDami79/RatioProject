# Ratio Project
## Overview
The application that I will build is called Ratio. It will allow users to locate night clubs in their area either by search or enabling location on their device. I will use the ([Google Map api](https://developers.google.com/places/supported_types)) using the value type Night Club as the default. It will also allow users to fill out live the following criteria/categories:
- Men to Women Ratio in the night clubs
- Select type of crowd
- Rate the DJ

## UI and Views
- Homepage that invites users to create an account
- sign up page
- log in page
- search and result page (hoping to do results on same page as search)
- a show page for each night club once selected from results
- Enter ratio page for night club
- user profile page to list favorite club and ratings

## Technical Requirements
My application will rely on the following packages:

express
mongo
mongoose
passport/passport-facebook (https://www.npmjs.com/package/passport-facebook)
passport-local
passport-local-mongoose
googleplaces https://www.npmjs.com/package/googleplaces

###Authorization
User can sign up using email or Facebook. Once user is logged, they're account will be authenticated through their Facebook account. A Facebook App will be created using the Facebook Developer Portal. A config file, fb.js will be created to hold some configuration information to connect to Facebook. The FacebookStrategy module will be used to fetch the user's Facebook profil. After logged in, they will be re-directed to a search page that will allow them to search by zip code or current location.
https://code.tutsplus.com/articles/social-authentication-for-nodejs-apps-with-passport--cms-21618.

###Searching for Night clubs
Only thing saved to a database will be ratio, ratings and favorites. Once submitted, it will re-route them to a result page. Using the Google Map Api, the results will be rendered to show the listing of Night Clubs
###Ratio Men to Women
Users will be able to enter their estimate of men to women ratio and it will be recorded in the database. This will be a user generated count.
###Favoriting Night clubs
When users load their profile, they will be able to see a list of Night Clubs selected as favorite and ratings.
