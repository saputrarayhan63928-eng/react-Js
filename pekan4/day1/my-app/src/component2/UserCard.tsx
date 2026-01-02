import React from "react";

interface UserCardProps {
    id: number
    name: string
    email: string
    isAdmin: boolean
    avatarUrl?: string
}

const UserCard : React.FC<UserCardProps> = ({ id, name, email, isAdmin, avatarUrl }) =>{
    return(
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <img src={avatarUrl || 'https://via.placeholder.com/50'} alt={name} />
            <h3>{name} (ID : {id})</h3>
            <p>Email:  {email}</p>
            {isAdmin && <span style={{ color: 'red' }}>Administrator</span>}
        </div>
    )
}

export default UserCard