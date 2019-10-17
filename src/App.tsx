import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { masterDetail } from './components';
import { Master, Detail } from './containers';
import { Item } from './model';
import './App.scss';

const TestMasterDetail = masterDetail(Master, Detail);

function App() {
  
  let items: Item[] = [
    { id: 0, title: 'Daniel Alastair Kaffee', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 1, title: 'Nathan R. Jessup', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 2, title: 'JoAnne Galloway', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 3, title: 'Jack Ross', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 4, title: 'Jonathan James Kendrick', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 5, title: 'Sam Weinberg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 6, title: 'Harold Dawson', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 7, title: 'Louden Downey', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 8, title: 'Matthew Andrew Markinson', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 9, title: 'Julius Alexander Randolph', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 10, title: 'Private William T. Santiago', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 11, title: 'Jeffrey Owen Barnes', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 12, title: 'Carl Edward Hammaker', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 13, title: 'Captain Whitaker', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 14, title: 'Dave Spradling', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 15, title: 'Harry Caesar', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' } 
  ];
  return (
    <Router>
      <Route path="/master"
        render={props => (
          <TestMasterDetail {...props} items={items} />
        )} />
      <Redirect from="/" to="/master" />
    </Router>
  );
}

export default App;
