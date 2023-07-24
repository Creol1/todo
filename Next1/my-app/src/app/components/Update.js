'use client'
import { useEffect, useState } from 'react';


const UpdateButton = ({id,status1,url}) => {

    const [status, setStatus] = useState('')
    const newstatus = {status};
    const url1 = Object.values(url)[0];

    const handleUpdate = (id, url1) => {  
        fetch(url1 + '?id=' + id, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newstatus),
          }).then(() => {
            console.log(url1)
            alert('item updated')
            window.location.reload()
          })
    }

    useEffect(()=>{
        if (status1 == 'completed') {
            setStatus('uncompleted')
        } else {
            setStatus('completed')
        } 
    },[])

    return ( 
        <>
        <button onClick={()=>handleUpdate(id, status1)} value={status} className={status1 === 'completed' ? 'rounded-full bg-green-400 pl-2 pr-2 font-bold text-base' : 'rounded-full bg-yellow-400 pl-2 pr-2 font-bold text-base'}> {status1} </button>
        </>
     );
}
 
export default UpdateButton;