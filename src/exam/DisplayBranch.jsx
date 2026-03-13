import React, { useEffect, useState } from 'react'

export default function DisplayBranch() {
  const [branch,setBranches] = useState([]);

  useEffect(() => {
    const storedBranches = JSON.parse(localStorage.getItem('BranchAdded')) || [];
    setBranches(storedBranches);
  },[])
  return (
    <div>
     {branch.length === 0? (<h1>NO USERS</h1>)
     :(<table border={1} cellPadding={10} cellSpacing={10}>
      <tr>
      <th>Name</th>
      <th>Id</th>
      <th>Email</th>
      <th>year</th>
      <th>Branch</th>
      </tr>

      {branch.map((branch,index) => (
        <tr>
          <td>{branch.name}</td>
          <td>{branch.ID}</td>
          <td>{branch.email}</td>
          <td>{branch.year}</td>
          <td>{branch.branch}</td>


        </tr>
      ))}
     </table>)}
    </div>
  )
}
