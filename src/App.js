import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom"
import Read from './components/Read';
import Unread from './components/Unread';
import Fevorits from './components/Fevorits';

function App() {


  const linkStyle = {
    margin : "10px"
  }

  return (
      <div>
        <BrowserRouter>
          <div >
          <Link style = {linkStyle}  to = "/unread" >UNREAD</Link>
                <Link style = {linkStyle}  to = "/read" >READ</Link>
                <Link style = {linkStyle}  to = "/fevorits" >FEVORITS</Link>

          </div>

          <Route path = "/read" component = {Read} exact = {true} />
          <Route path = "/unread" component = {Unread} exact = {true} />
          <Route path = "/fevorits" component = {Fevorits} exact = {true} />



        </BrowserRouter>


      </div>
  );
}

export default App;
