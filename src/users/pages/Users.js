import React from 'react';
import UsersList from '../components/UsersList';

const Users = ()=>{
    const USERS = [{ id:1,name:"Arthur Dent",image:"",totalExpenses:10}];
    return <UsersList items={USERS}/>
}

export default Users;