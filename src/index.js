//import statements
import React from 'react';
import ReactDOM from 'react-dom';

//custom imports
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAzycprsns3_sLy-mmE5nlpEjIFLuKGDs8';
//Create a new component. This component should 
//produce some HTML

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

//Take this component's generated HTML and put
//it on the page(in the DOM)
ReactDOM.render( < App / > , document.querySelector('.container'));