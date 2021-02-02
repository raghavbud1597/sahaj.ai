import RecievedEmails from './RecievedEmails';
import './style/App.scss';
import {useSelector, useDispatch } from 'react-redux';
import {login} from './actions'

function App() {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(login())}>Login</button>
      {isLogged ? <RecievedEmails/> : ''}
    </div>
  );
}

export default App;
