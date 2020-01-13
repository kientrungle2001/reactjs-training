import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CustomerAccountRegister from 'components/Customer/Account/Register';
import CustomerAccountLogin from 'components/Customer/Account/Login';
import LayoutTwoColumn from 'components/Layout/TwoColumn';
import UserSettings from 'models/configs/User';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleRegister.bind(this);
  }
  handleRegister(userData) {
    console.log(userData);
  }
  render() {
    return (
      <div>
        <LayoutTwoColumn 
        left={<CustomerAccountLogin />} 
        right={
        <CustomerAccountRegister 
          fields={UserSettings.registerFields}
          onSubmit={this.handleRegister} />
        } 
        leftColSize={{lg: 4, md: 6, sm: 12}}
        rightColSize={{lg: 8, md: 6, sm: 12}}
        />
      </div>
    );
  }
  
}

export default App;
