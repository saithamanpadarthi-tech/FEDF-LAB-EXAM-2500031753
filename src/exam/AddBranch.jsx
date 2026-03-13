import React, { useState } from 'react'

export default function AddBranch() {
  const [branchFormData,setBranchFormData] = useState({
    name:"",
    ID:"",
    email:"",
    year:"",
    branch:""
  })

  const handleChange = (e) => {
        const{name,value} = e.target 
        setBranchFormData({...branchFormData,[name]:value})
    }

    const handleSubmit =(e) => {
        e.preventDefault()

        const existingBranches = JSON.parse(localStorage.getItem('BranchAdded')) || []
        existingBranches.push(branchFormData)
        localStorage.setItem('BranchAdded',JSON.stringify(existingBranches))

        alert('Sir!!Branch Added Succesfully')

        setBranchFormData({
            name:"",
            ID:"",
            email:"",
            year:"",
            branch:""
        })
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={branchFormData.name} required onChange={handleChange} /> <br /> <br />
        <label>ID</label>
        <input type="number" name="ID" value={branchFormData.ID} required onChange={handleChange} /> <br /> <br />
        <label>Email</label>
        <input type="email" name="email" value={branchFormData.email} required onChange={handleChange} /> <br /> <br />
        <label>Year</label>
        <input type="number" name="year" value={branchFormData.year} required onChange={handleChange}/> <br />  <br />
        <label>Add Branch</label> <br />
        <input type="radio" name="branch" value="CSE"  required onChange={handleChange}/> CSE
        <input type="radio" name="branch" value="ECE"  required onChange={handleChange}/> ECE
        <input type="radio" name="branch" value="AIDS"  required onChange={handleChange}/> AI&DS

       <button type="submit">Add Branch</button>
        
      </form>
    </div>
  )
}
