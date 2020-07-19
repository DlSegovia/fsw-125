import React, { useState } from 'react'

export default function AddBountyForm(props) {
  const initInputs = {
    title: props.title || "",
    type: props.type || "",
    bountyAmount: props.bountyAmount || "",
    living: props.living || ""
  }
  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInput => ({ ...prevInput, [name]: value, }))
  }

  function handleSubmit() {
    props.submit(inputs, props._id)
    setInputs(initInputs)
  }

  return (
    <form className='form' onSubmit={(e) => {
      e.preventDefault()
      handleSubmit()
    }}>
      <input className='input'
        type="text"
        name="title"
        value={inputs.title}
        onChange={handleChange}
        placeholder="Title" />
      <input className='input'
        type="text"
        name="type"
        value={inputs.type}
        onChange={handleChange}
        placeholder="Jedi / Sith" />
      <br /><br />
      <input className='input'
        type="text"
        name="bountyAmount"
        value={inputs.bountyAmount}
        onChange={handleChange}
        placeholder="Bounty Amount" />
      <input className='input'
        type="text"
        name="living"
        value={inputs.living}
        onChange={handleChange}
        placeholder="Living" />
      <br /><br />
      <button className='btn1' >{props.btnText}</button>
    </form>
  )
}