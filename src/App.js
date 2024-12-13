import './App.css';
import GoButton from './components/GoButton'

const App = () => {
  return(
    <div>
      <div className='midText'>
        <h1 className='topic'>JOBEXPLORER</h1>
        <p className='desc'>Explore Your Future Roles</p>
        <a className='popdesc' hr ef="/">searching for computer engineer roles</a>
      </div>
      <GoButton />
    </div>
  );
}

export default App;
