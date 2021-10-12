import React from 'react';
import {Layout, Menu} from 'antd';
import Products from './components/ProductList'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Product from './pages/Product';

const { Header, Content, Footer } = Layout;
function App(props) {
  return (
    <div className="App">
      <Layout className="layout">
          <Header id="header">         
          </Header>
          <Content style={{ padding: '1em'}}>
          <Router>
            <Switch>
              <Route path="/product/:productId" component={Product}></Route>
              <Route path="/" component={Products}></Route>
            </Switch>
          </Router>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Threekit {new Date().getFullYear()}</Footer>
      </Layout>
    </div>
  );
}

export default App;
