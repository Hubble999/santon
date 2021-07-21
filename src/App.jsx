import React from 'react';
import './state/stores/ProductsStore';
import './index.scss';

import ProductList from './components/productList';
import { Button } from './components/button';
import {Modal} from './components/modal';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isShow: false };

    this.handleShowModal = this.handleShowModal.bind(this);
  }

  handleShowModal = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    return (
      <main>
        <h1>Frontend Test Task</h1>
        <Button handle={this.handleShowModal} isShow={this.state.isShow} />
        <ProductList />
        <Modal handleShowModal={this.handleShowModal} isShow={this.state.isShow} />
      </main>
    );
  }
}
