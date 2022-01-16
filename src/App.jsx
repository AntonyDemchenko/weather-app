import logo from './logo.svg';
import './App.css';
import Content from './Content/Content';
import { useEffect } from 'react';
import serverRequest from "./store/dataRequest";
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  // get data of saved cities for the first running
  useEffect(() => {
    const savedCities = localStorage.getItem('saved-cities')
    if (savedCities != null) {
      for (let city of savedCities.split(',')) {
        const dispatchType = 'ADD_CITY';
        dispatch(serverRequest(city, dispatchType))
      }
    }
  }, [])

  return (
    <div className="App">
      <header className="navbar fixed-top navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">weather app</a>
        </div>
      </header>
      <Content />
    </div>
  );
}

export default App;
