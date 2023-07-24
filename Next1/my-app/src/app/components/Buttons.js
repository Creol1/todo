'use client'
import Image from 'next/image';
import {useState, useEffect, useRef} from 'react';
import dots from '../../../img/dots.svg'
import add from '../../../img/add.svg'


const TaskButton = (props, url) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [important, setImportant] = useState('unimpotrant');
    const [status, setStatus] = useState('uncompleted');
    const task = {name, date, description, important, status};
    const [checkedOne, setChekedOne] = useState(false);
    const [checkedTwo, setChekedTwo] = useState(false);
    const [update, setUpdate] = useState(add);
    const [width, setWidth] = useState(70);
    const [height, setHeight] = useState(70);
    const [w, setW] = useState('Add new');
    const id = Object.values(props)[0];

    
      const handleClickOpen = () => {
        setShow(true)};

   
    const ref = useRef()

    useEffect(() => {
      const checkIfClickedOutside = e => {
        if (show && ref.current && !ref.current.contains(e.target)) {
          setShow(false)
        }
      }
  
      document.addEventListener("mousedown", checkIfClickedOutside)
  
      return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
      }
    }, [show]); 
 
   const handleSubmit = (id, url) => {
      if (id === undefined){
      fetch(url, {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(task)
      }).then(() => {
          alert('new items created');
      })
  } else {
    fetch(url + '?id=' + id, {
          method: 'PATCH',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(task),
      }).then(() => {
          alert('item updated');
  })
  }}

  useEffect(()=>{
    if (id !== undefined){
      setUpdate(dots)
      setWidth(5)
      setHeight(5)
      setW('Update')
    }
  }, [])

    return ( 
        <>
        <button onClick={()=>handleClickOpen()}> <Image src={update} width={width} height={height}/> </button>
        {show && (
          <>
          <div className='overflow-y-auto fixed inset-0 z-40 bg-gray-600 bg-opacity-50' >
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50" >
              <div className='h-2/3 w-1/3 border-2 border-red-300 bg-gray-300' ref={ref}>
              <h1 className='text-xl font-semibold pt-2 pl-3 text-center'>{w} task</h1>
              <form className='flex flex-col' onSubmit={() => handleSubmit(id)}>
                <div className='flex flex-col'>
                  <label className='label'>Task name</label>
                  <input
                    className='input' 
                    type="text" 
                    value={name}
                    required
                    onChange={(e)=> setName(e.target.value)}
                  />
                </div>
                  <label className='label'> Date</label>
                  <input
                    className='input'
                    placeholder='dd/mm/yyyy' 
                    type="date" 
                    value={date}
                    required
                    onChange={(e)=>setDate(e.target.value)}
                  />
                  <label className='label'>Description</label>
                  <textarea
                    className='input' 
                    type="text" 
                    value={description}
                    required
                    onChange={(e)=>setDescription(e.target.value)}
                  />
                <div className='flex flex-row pt-14 pl-3'>
                <input
                    type='checkbox'
                    checked={checkedOne}
                    value={important}
                    onChange={(e)=> {setChekedOne(!checkedOne); setImportant('important')}}>
                  </input>
                  <label className='ml-2'>Mark as important</label>
                  </div>
                  <div className='flex flex-row pl-3 pt-2'>
                  <input
                      type='checkbox'
                      checked={checkedTwo}
                      value={status}
                      onChange={(e)=> {setChekedTwo(!checkedTwo); setStatus('completed')}}>
                    </input>
                    <label className='ml-2'>Mark as completed</label>
                </div>
                <div className='flex justify-center'>
                  <button className='border-2 rounded-full mt-16 bg-green-500 w-fit pt-1 pb-1 px-2 hover:bg-green-600 hover:font-bold font-medium text-white'>{w} task</button>
                </div>
              </form>
              </div>
            </div>
          </div>
          </>
        )}
        </>
     );
};
 
export default TaskButton;