import { Route, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { AddStudent } from './component/AddStudent';
import { EditStudent } from './component/EditStudent';
import { Home } from './component/Home';
import { Navbar } from './component/Navbar';

const App = () => {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={()=> <Home/>} />
        <Route path="/add">
          <AddStudent/>
        </Route>
        <Route path="/edit/:id">
          <EditStudent/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
