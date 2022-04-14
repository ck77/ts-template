import { FC } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './main';

const App: FC = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
        <li><Link to='/settings'>Settings</Link></li>
      </ul>
      <hr />

      <Main />
    </div>
  )
}

export default App;