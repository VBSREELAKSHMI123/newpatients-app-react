import logo from './logo.svg';
import './App.css';
import AddPatient from './components/AddPatient';
import SearchPatient from './components/SearchPatient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddPatient/>}/>
    <Route path='/search' element={<SearchPatient/>}/>
    <Route path='/view' element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
