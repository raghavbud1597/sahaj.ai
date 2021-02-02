import Inbox from './Inbox';
import './style/App.scss';
import {useSelector, useDispatch } from 'react-redux';
import {login} from './actions'

function App() {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {isLogged ? <Inbox/> : <button onClick={() => dispatch(login())}>Login</button>}
    </div>
  );
}

export default App;
