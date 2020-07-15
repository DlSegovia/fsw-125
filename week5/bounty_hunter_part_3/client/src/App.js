import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty.js'
import AddBountyForm from './components/AddBountyForm.js'

export default function App() {
    const [bounty, setBounty] = useState([])

    function getBounties(){
        axios.get("/bounties")
        .then(res => setBounty(res.data))
        .catch(err => console.log(err))
    }

    function addBounty(newBounty){
        axios.post("/bounties", newBounty)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        setBounty([...bounty,newBounty])
    }

    useEffect(() => {
        getBounties()
    }, [])


    return (
        <div>
            <div className='bounty-container'>
                <AddBountyForm 
                addBounty={addBounty}/>
                {bounty.map(bounty => <Bounty {...bounty} key={bounty.title} />)}
            </div>
        </div>
    )
}
