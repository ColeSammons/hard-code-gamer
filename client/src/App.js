import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import Search from './pages/Search';
import SidebarV2 from './components/SidebarV2';
import WatchPage from './pages/WatchPage';
import StreamerResultsPage from './pages/StreamerResultsPage';
import WatchTwitch from './pages/WatchTwitch';
import NavbarV2 from './components/NavbarV2';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='app'>
          <NavbarV2 />
          <SidebarV2 />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/search/:id" component={Search} />
            <Route exact path="/watchScreen/:id" component={WatchPage} />
            <Route exact path="/streamResults/:id" component={StreamerResultsPage} />
            <Route exact path="/watchTwitch/:id" component={WatchTwitch} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;