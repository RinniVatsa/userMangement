import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/ UserList';
import UserDetails from './components/UserDetails';
import UserForm from "./components/UserForm"


function App() {
    const handleUpdateUser = (updatedUser) => {
        // Your logic for updating the user

    }
    return ( <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < UserList / > }
        /> <
        Route path = "/create"
        element = { < UserForm / > }
        /> <
        Route path = "/edit/:id"
        element = { < UserForm / > }
        /> <
        Route path = "/user/:id"
        element = { < UserDetails / > }
        /> < /
        Routes > < /
        Router >
    );
}

export default App;