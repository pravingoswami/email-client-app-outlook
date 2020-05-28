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
          <Link style = {linkStyle}  to = "/unread" >unread</Link>
                <Link style = {linkStyle}  to = "/read" >read</Link>
                <Link style = {linkStyle}  to = "/fevorits" >fevorits</Link>

          </div>

          <Route path = "/read" component = {Read} exact = {true} />
          <Route path = "/unread" component = {Unread} exact = {true} />
          <Route path = "/fevorits" component = {Fevorits} exact = {true} />



        </BrowserRouter>


      </div>
  );
}

export default App;
