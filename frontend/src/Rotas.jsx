import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Principal from './Pages/principal/Principal';

export const RotasAPP = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Principal/>}/>
                <Route path='/tarefas' element={<b>Teste</b>}/>
                <Route path='*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    );   
}