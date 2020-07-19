import React, { useState } from 'react'
import AddBountyForm from './AddBountyForm'



export default function Bounty(props) {
  const { title, type, bountyAmount, living, _id } = props
  const [editToggle, setEditToggle] = useState(false)
  return (
    <div className='bounty'>
      {!editToggle ?
        <>
          <h1 className='title'>Title: {title}</h1>
          <h1 className='type'>Jedi / Sith: {type}</h1>
          <h2 className='botyAmt'>Bounty: {bountyAmount}</h2>
          <h3 className='living'>Living: {living}</h3>
          <button
            className='delBtn'
            onClick={() => props.deleteBounty(_id)}>
            Delete
          </button>
          <button
            className='editBtn'
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Edit
          </button>
        </>
        :
        <>
          <AddBountyForm
            title={title}
            type={type}
            bountyAmount={bountyAmount}
            living={living}
            _id={_id}
            btnText='Submit Edit'

            submit={(updates, id) => {
              console.log("update")
              props.editBounty(updates, id)
              setEditToggle(prevToggle => !prevToggle)
            }}
          />
          <button
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Close
        </button>
        </>
      }
    </div>
  )
}
