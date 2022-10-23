import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import SideBar from "../components/SideBar";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import API_URL from '../config/config'

const Friends = () => {
    const [users, setUsers] = useState([])
    const [authUserId, setAuthUserId] = useState('')
    const [searchText, setSearchText] = useState([])

    const handleChange = (event) => {
        console.log(event.target.value)
        searchUsers(event.target.value)
    }
    const searchUsers = async(query) => {
        try{
            const response = await fetch(`${API_URL}/friends/searchUsers/${query}`, {
            method: "GET",
            withCredentials: true,
            credentials: 'include',
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          //console.log(data)
          setUsers(data.users)
          console.log(users)
        } catch(err){
            console.log(err);
        }
    }

  useEffect(() => {
    const getUsers = async() => {
        try{
            const response = await fetch(`${API_URL}/friends/allUsers`, {
            method: "GET",
            withCredentials: true,
            credentials: 'include',
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          //console.log(data)
          setUsers(data.users)
          setAuthUserId(data.authUserId)
          console.log(users)
        } catch(err){
            console.log(err);
        }
        
    }
   getUsers()
  },[])
  console.log(searchText)
  return (
    <>
      <div className="dashboard">
        <header>
          <MenuBar className="menuBar" />
        </header>
        <div class="friends">
          <div class="sideBar">
            <SideBar />
          </div>
          <div class="friends-content">
            <h2> Add FRIENDS</h2>
            <div class="searchUsers">
                <SearchBar placeholder="search for users" value={searchText} 
                    onChange={handleChange}
                     />
            </div>
            <div class="allUsers">
            { users.map(user => {
              return  <UserCard name={user.userName} isFriend={user._d===authUserId} key={user._id}/>
           })
           }
            </div>
            
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
