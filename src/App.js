import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Edit } from './component/edit';
import { Reg } from './component/reg';
import { User } from './component/user';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<User/>}/>    
    <Route path='/reg' element={<Reg/>}/>
    <Route path='/edit' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
