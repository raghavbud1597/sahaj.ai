import Inbox from './Inbox';
import './style/App.scss';
import {useSelector } from 'react-redux';
import Signin from './SignIn'

function App() {
  const isLogged = useSelector(state => state.isLogged);
  return (
    <div className="App">
      {isLogged ? <Inbox/> : <Signin/>}
    </div>
  );
}

export default App;
