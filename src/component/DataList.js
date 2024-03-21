import React from 'react'
import { useState,useEffect } from 'react'
// import  BootstrapTable  from 'react-bootstrap-table-next'
// import 'bootstrap/dist/css/bootstrap.min.css'
const DataList = () => {
    const [userList, setuserList] = useState([])
    const columns = [
        {dataField:"id", text:"id"},
        {dataField:"name", text:"Name", sort:true},
        {dataField:"username", text:"Username", sort:true},
        {dataField:"email", text:"Email", sort:true}
    ]
    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(result=> setuserList(result))
    .catch(error=>console.log(error))
    }, [])
  return (
    <>
    {/* <BootstrapTable keyField='id' columns={columns} data={userList}/> */}
     {/* <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
        </tr>
        {
            userList && userList.length> 0 ? 
            userList.map((user)=>(
                
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            ))
            :"Loading"
        }
    </table> */}
    </>
  )
}

export default DataList