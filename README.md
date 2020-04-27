[![Netlify Status](https://api.netlify.com/api/v1/badges/235a35a9-e9c8-4bd7-b91e-11c50327d3c2/deploy-status)](https://app.netlify.com/sites/cooper-test-hunter-janko/deploys)

# The Cooper Test Challenge  
### Authors  
[Janko Radakovic](https://github.com/MadFarmer101)  
[Hunter Vitous](https://github.com/hmvitous)

## Built with  
**Front End:** React v.16.12.0 
**Back End:** Rails 6.0.2.1  
**Testing frameworks:** RSpec and Enzyme/Jest  
**Deployed at:** [Netlify](https://cooper-test-hunter-janko.netlify.app/)  and [Heroku](https://www.heroku.com/).  

## The code   
This project is the client facing side of our Cooper Test application. Our repositories for the Cooper API built in Rails can be found at the following links for [Janko](https://github.com/MadFarmer101/cooper_backend.git) and [Hunter](https://github.com/hmvitous/Cooper_Backend.git).

## Getting started
### Dependencies  
* Yarn
* React
* Enzyme
* Cypress
* Axios
* Chart.js
* react-chartjs-2 


### Setup   
To test this application, fork the repo to your own GitHub account and clone it to your local workspace. </br>
*Note:*Be sure to set up backend api first (noted above), in order to fully interact with the application. 

Install all of the dependencies:    
```
$ yarn install
```  
Run the unit tests:  
```
$ yarn test
```  
Start cypress and run the feature tests:  
```
$ yarn run cy:open
```
Start the backend api (if already configured) in a separate terminal (only run this command for the Rails application):
```
$ rails s
```
Start the React application and run it on your local host:
```
$ yarn start
```


### Exploring the app online or in local host  
Use the following test-credentials to test interaction with the application:  

**Email:** `user@mail.com`  
**Password:** `password`

## Updates/Improvements   
- Add styling
- Add more graphs and charts for performance data

## License  
[MIT-license](https://en.wikipedia.org/wiki/MIT_License)

### Acknowledgement  
Material provided by [Craft Academy](https://craftacademy.se). 
