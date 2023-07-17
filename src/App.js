
import './App.css';
import LoginMain from './Component/login';
import LoginAdmin from './Component/loginAdmin';
import {Routes, Route, useLocation} from 'react-router-dom';
import ResetPassword from './Component/reset-password';
import ResetLink from './Component/reset-link-sent';
import UserList from './Component/user-list';
import NewUser from './Component/new-user';
import Transactions from './Component/transactions';
import Cards from './Component/card';
import Roles from './Component/roles';
import NewRole from './Component/new-role';
import AssignedUser from './Component/assigned-user';
import CreateCardMain from './Component/create-card';
import CardCreated from './Component/card-created';
import CardTemplate from './Component/card-template';
import CardOverview from './Component/card-overview';
import CardDetails from './Component/card-details';

function App() {
  return (
    <>
   <Routes>
      <Route exact path='/' Component={LoginAdmin}/>
      <Route exact path='/login-admin' Component={LoginMain}/>
      <Route exact path='/reset-password' Component={ResetPassword}/>
      <Route exact path='/reset-link' Component={ResetLink}/>
      
      <Route exact path='/user-list' Component={UserList}/>
      <Route exact path='/new-user' Component={NewUser}/>
      <Route exact path='/transactions' Component={Transactions}/>
      <Route exact path='/cards' Component={Cards}/>
      <Route exact path='/roles' Component={Roles}/>
      <Route exact path='/new-role' Component={NewRole}/>
      <Route exact path='/assigned-user' Component={AssignedUser}/>
      <Route exact path='/create-card' Component={CreateCardMain}/>
      <Route exact path='/created' Component={CardCreated}/>
      <Route exact path='/template' Component={CardTemplate}/>
      <Route exact path='/card-overview' Component={CardOverview}/>
      <Route exact path='/card-details' Component={CardDetails}/>
      
      
      
      
      

      </Routes>
    </>
  );
}

export default App;
