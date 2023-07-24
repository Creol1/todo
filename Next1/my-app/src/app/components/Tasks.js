'use client'

import bin from '../../../img/bin1.svg'
import Image from 'next/image'
import TaskButton from './Buttons'
import UpdateButton from './Update'


async function getTasks(props) {
  const url = await Object.values(props)[0];
  const url1 = await Object.values(url)[0];
  const res = await fetch(url1)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
};


const Tasks = async (props) => {
  const { tasks } = await getTasks(props);
  const url = await Object.values(props)[0];
  const url1 = await Object.values(url)[0];

  const handleDelete = (url1, q) => {
    const confirmed = confirm('Are you sure?')
    if (confirmed) {
      fetch(url1 + '?id=' + q, {
        method: 'DELETE'
      }).then(() => {
        window.location.reload()
        alert('item deleted')
      })
    }
  };

  if (tasks.length > 0) {
    return (
      <div className="flex flex-row flex-wrap">
        {tasks.map((item) => <div key={item._id} className="w-60 h-60  bg-gray-200 mt-10 ml-10 rounded-md relative">
          <h2 className="text-lg font-semibold ml-5 pt-4">{item.name}</h2>
          <p className="text-base ml-5 mt-3 italic">{item.description}</p>
          <p className="text-base ml-5" >Complete by: {item.date}</p>
          <p className='ml-5'>{item.important}</p>

            <div className='flex justify-between mt-16 ml-4 mr-4'>
              <UpdateButton id={item._id} status1={item.status} url={url1}></UpdateButton>
              <button onClick={() => handleDelete(url1, item._id)}> <Image src={bin} width={30} height={30} /> </button>
              <TaskButton url={url1} id={item._id} ></TaskButton>
            </div>

        </div>)}
      </div>
    )
  } else {
    return (
      <div>
        <h1>No tasks</h1>
      </div>
    )
  }
}
 
export default Tasks;

