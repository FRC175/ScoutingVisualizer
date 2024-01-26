import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import DataGridDemo from './TeamsTable';
import Silly from './SillyAppBar';

export default function App() {
  return (
    <div className="App">
      <Silly/>
      <DataGridDemo backgroundColor="yellow"/>
    </div>
  );
}
