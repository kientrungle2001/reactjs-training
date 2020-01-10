import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import CustomerAccountRegister from 'components/Customer/Account/Register';
import CustomerAccountLogin from 'components/Customer/Account/Login';
import LayoutTwoColumn from 'components/Layout/TwoColumn';
import UserSettings from 'models/configs/User';

function App() {
  return (
    <div>
      <LayoutTwoColumn 
      left={<CustomerAccountLogin />} 
      right={<CustomerAccountRegister fields={UserSettings.registerFields} />} 
      leftColSize={{lg: 4, md: 6, sm: 12}}
      rightColSize={{lg: 8, md: 6, sm: 12}}
      />
    </div>
  );
}

export default App;
