import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bounty from './components/Bounty.js'
import AddBountyForm from './components/AddBountyForm.js'

export default function App() {
    const [bounty, setBounty] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/bounties")
            .then(res => setBounty(res.data))
            .catch(err => console.log(err))
    }, [])

    function getBounties() {
        axios.get("http://localhost:5000/bounties")
            .then(res => setBounty(res.data))
            .catch(err => console.log(err))
    }

    function AddBounty(newBounty) {
        axios.post("http://localhost:5000/bounties", newBounty)
            .then(res => {
                setBounty(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
        setBounty([...bounty, newBounty])
    }

    function deleteBounty(bountyId) {
        axios.delete(`http://localhost:5000/bounties/${bountyId}`)
            .then(res => {
                setBounty(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId) {

        axios.put(`http://localhost:5000/bounties/${bountyId}`, updates)
            .then(res => {
                setBounty(prevBounties => prevBounties.map(
                    bounty => bounty._id === bountyId ? Object.assign(bounty, res.data) : bounty)
                )
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])

    return (
        <div>
            <div className='bounty-container'>
                <AddBountyForm
                    submit={AddBounty}
                    btnText='Add bounty'
                />
                {bounty.map(bounty =>
                    <Bounty {...bounty}
                        key={bounty.title}
                        deleteBounty={deleteBounty}
                        editBounty={editBounty}
                    />)}
            </div>
        </div>
    )
}