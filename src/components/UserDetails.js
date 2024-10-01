import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./UserDetail.css"

function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching user:', error));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
            .then(response => console.log('User updated:', response.data))
            .catch(error => console.error('Error updating user:', error));
    };

    return (

        <
        div >
        <
        h1 className = 'div-main' > Details < /h1>


        <
        form className = "container"
        onSubmit = { handleUpdate } >
        <
        input type = "text"
        className = 'input-form'
        value = { user.name }
        onChange = {
            (e) => setUser({...user, name: e.target.value })
        }
        /> <
        input type = "email"
        className = 'input-form'
        value = { user.email }
        onChange = {
            (e) => setUser({...user, email: e.target.value })
        }
        /> <
        input type = "text"
        className = 'input-form'
        value = { user.phone }
        onChange = {
            (e) => setUser({...user, phone: e.target.value })
        }
        /> < /
        form >

        <
        /div>
    );
}

export default UserDetails;