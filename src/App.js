import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AppHeader from 'components/App/Header';
import CustomerAccountRegister from 'components/Customer/Account/Register';
import CustomerAccountLogin from 'components/Customer/Account/Login';
import LayoutTwoColumn from 'components/Layout/TwoColumn';

function App() {
  return (
    <div>
      <AppHeader />
      <LayoutTwoColumn right={<CustomerAccountRegister />} left={<CustomerAccountLogin />} />
    </div>
  );
}

export default App;
