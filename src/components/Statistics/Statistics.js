import React, { useEffect, useState } from "react";
import axios from "axios";

const Statistics = () => {

    const url = 'http://localhost:8000/api/users';

    const [users, setUsers] = useState([]);

    const getUsers = () => {
        axios.get(url)
            .then((response) => { 
                console.log(response.data);
                const data = response.data;
                setUsers(data.data);
            }); 
    };

    useEffect(() => getUsers(), []);
    
    return (
        <div>
            {users.map((user)=> (
                <li>User-email: <strong>{user.email}</strong> - Score: {user.score}</li>
            ))}
        </div>
    )
}
export default Statistics;