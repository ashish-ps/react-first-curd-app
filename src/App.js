import {BrowserRouter, Routes, Link, Route} from "react-router-dom";
import './App.css';
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import ListUser from "./components/ListUser";

function App() {
  return (
    <div className="App">
      <h5>My first Learning CRUD operations using PHP API and MySQL</h5>
      <BrowserRouter>
      <nav>
      <ul>
        <li>
          <Link to="/">List User</Link>
          <Link to="user/create">Create User</Link>
        </li>
      </ul>
      </nav>

      <Routes>
        <Route path="" element={<ListUser></ListUser>}></Route>
        <Route path="user/create" element={<CreateUser></CreateUser>}></Route>
        <Route path="user/:id/edit" element={<EditUser></EditUser>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
