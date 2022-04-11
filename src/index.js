import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'
import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import itemReducer from './reducers/reducer'
const client = new ApolloClient({
  uri:"http://localhost:4000/",
cache: new InMemoryCache()
})



const store = createStore(itemReducer,applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
      <App/>
      </Provider>
    </ApolloProvider>
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
