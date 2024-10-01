import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserForm.css'

function UserForm({ onUpdateUser }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Fetch user data if editing
    useEffect(() => {
        if (id) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response => {
                    setUser(response.data);
                })
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (id) {
            // If editing an existing user, call the onUpdateUser prop
            axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user)
                .then(response => {
                    onUpdateUser(response.data); // Call the passed in onUpdateUser function
                    alert('User updated successfully');
                    console.log(response.data)
                    navigate('/');
                })
                .catch(error => console.error('Error updating user:', error));
        } else {

        }
    };

    return ( <
        div >
        <
        h2 className = "form-header" > { id ? 'Edit User' : 'Create User' } < /h2> <
        form className = "container"
        onSubmit = { handleSubmit } >
        <
        div >
        <
        label > Name: < /label> <
        input type = "text"
        name = "name"
        className = 'input-form'
        value = { user.name }
        onChange = { handleChange }
        /> < /
        div > <
        div >
        <
        label > Email: < /label> <
        input type = "email"
        className = 'input-form'
        name = "email"
        value = { user.email }
        onChange = { handleChange }
        /> < /
        div > <
        div >
        <
        label > Phone: < /label> <
        input type = "tel"
        name = "phone"
        className = 'input-form'
        value = { user.phone }
        onChange = { handleChange }
        /> < /
        div > <
        button type = "submit"
        className = 'btn-create' >
        Save User < /button> < /
        form > <
        /div>
    );
}

export default UserForm;