import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./UserList.css"

function UserList() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    // Fetch users from the JSONPlaceholder API
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    // Handle user update
    const handleUpdateUser = (updatedUser) => {
        // Update the users list in state with the updated user data
        setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    };

    // Delete a user (simulated)
    const handleDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== id)); // Remove user from the list
                alert('User deleted successfully');
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    return ( <
        div className = 'list-container' >
        <
        h1 className = 'header' > User List < /h1> <
        Link to = "/create"
        className = "create-user-link" > Create New User < /Link>

        <
        table className = "user-table" >
        <
        thead >
        <
        tr className = '' >
        <
        th className = 'table-head' > Name < /th> <
        th className = 'table-head' > Email < /th> <
        th className = 'table-head' > Phone < /th> <
        th className = 'table-head' > Actions < /th> < /
        tr > <
        /thead> <
        tbody className = 'table-body' > {
            users.map(user => ( <
                tr key = { user.id } >
                <
                td className = 'table-data' > { user.name } < /td> <
                td className = 'table-data' > { user.email } < /td> <
                td className = 'table-data' > { user.phone } < /td> <
                td className = 'table-data' > { /* Edit Button */ } <
                Link to = { `/edit/${user.id}` }
                className = "edit-btn" > Edit < /Link>

                { /* Delete Button */ } <
                button className = "delete-btn"
                onClick = {
                    () => handleDelete(user.id)
                } > Delete < /button>

                { /* User Details Link */ } <
                Link to = { `/user/${user.id}` }
                className = "details-btn" > Details < /Link> < /
                td > <
                /tr>
            ))
        } <
        /tbody> < /
        table > <
        /div>
    );
}

export default UserList;