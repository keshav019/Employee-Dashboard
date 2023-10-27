import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Dashboard';
import EmployeeDetailsPage from './EmployeeDetailsPage';
import EditPage from './Edit';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="/employee/:employeeId" element={<EmployeeDetailsPage />}></Route>
        <Route path="/employee/:employeeId/edit" element={<EditPage />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
