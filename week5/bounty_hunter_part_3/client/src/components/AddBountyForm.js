import React, { useState } from 'react'

export default function AddBountyForm(props) {
const initInputs = {title: "", type: "", bountyAmount: "", living: "" }
const [inputs, setInputs] = useState(initInputs)


function handleChange(e){
  const { name, value} = e.target
  setInputs(prevInput => ({...prevInput, [name]: value, }))
}

function handleSubmit(){
  props.addBounty(inputs)
  setInputs(initInputs)
}

  return (
    <form onSubmit={(e) => {e.preventDefault()
    handleSubmit()}}>
<input 
type="text" 
name="title" 
value={inputs.title} 
onChange={handleChange} 
placeholder="Title"/>
<input 
type="text" 
name="type" 
value={inputs.type} 
onChange={handleChange} 
placeholder="Jedi / Sith"/>
<br /><br />
<input 
type="text" 
name="bountyAmount" 
value={inputs.bountyAmount} 
onChange={handleChange} 
placeholder="Bounty Amount"/>
<input 
type="text" 
name="living" 
value={inputs.living} 
onChange={handleChange} 
placeholder="Living"/>
<br /><br />
<button>Add Bounty</button>
    </form>
  )
}