import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function App(){
   const [bounties, setBounties] = useState([])
    
    useEffect(() => {
        axios.get("/bounties")
        .then(res => console.log(res))
        // .catch(err => console.log(err))

    }, [])

    return (
        <div>

        </div>
    )
}