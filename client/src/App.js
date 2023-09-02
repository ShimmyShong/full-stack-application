import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'
import './App.css';
import Shop from './pages/Shop';
import NoPage from './pages/NoPage';
import Main from './pages/Main';
import SingleItem from './pages/SingleItem';
import CreateItem from './pages/CreateItem';

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path='/shop' element={<Shop />} />
          <Route path='/shop/:id' element={<SingleItem />} />
          <Route path='/shop/create' element={<CreateItem />} />
          <Route path='/' element={<Main />} />
          <Route path='*' element={<NoPage />} /> {/* Redirects to this page */}
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
