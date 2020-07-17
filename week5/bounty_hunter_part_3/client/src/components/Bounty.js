import React from 'react'


export default function Bounty(props) {
console.log(props)
  const {title, type, bountyAmount, living, imageName, _id} = props
  return (
    <div className='bounty'>
      <figure>
        <img className='img1' src={imageName} alt=''/>
      </figure>
      <h1 className='title'>Title: {title}</h1>
      <h1 className='type'>Jedi / Sith: {type}</h1>
      <h2 className='botyAmt'>Bounty: {bountyAmount}</h2>
      <h3 className='living'>Living: {living}</h3>
       

    </div>
  )
}
