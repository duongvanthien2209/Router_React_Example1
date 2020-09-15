import React from "react";
import queryString from "query-string";
import "./styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Chat = ({ location }) => {
  let { name } = queryString.parse(location.search);
  return <h1>{name}</h1>;
};

export default function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/chat">Chat</Link>

        <Route exact path="/" component={Home} />
        <Route path="/chat">
          <h1>Chat</h1>
          <Link to="/chat/chat1?name=Thien">Chat1</Link>
          <Link to="/chat/chat1?name=Huy">Chat2</Link>

          <Route path="/chat/chat1" component={Chat} />
        </Route>
      </Router>
    </div>
  );
}
