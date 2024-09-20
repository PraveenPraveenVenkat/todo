import {useState} from 'react'


const Header = () => {

  const [title,setTitle] =useState ("");
  const [Description ,setDescription] = useState ("");
   const [todos,setTods] =useState ([])
  const apiurl = "http://localhost:3000/"


  const  handleSubmit = () => {
    if (title.trim () !== ''  && Description.trim()!==  '')
      fetch (apiurl= "http://localhost:3000/")
  }
  return (
    <>
    <div className="text-white text-xl p-6 bg-cyan-700">
      <h1 >ToDo List</h1>
          </div>

          <div>
            <h3 className='font-bold text-2xl mt-5  text-left'>Add  Items</h3>
           

</div>
<div className='flex items-start  grid gap-4 grid-cols-3  mt-7 '>
           <input type="text"className='border-2 rounded-lg' onChange={(e)=> setTitle (e.target.value)} value={title} placeholder="Title "/> 

           <input type="Description" className='border-2 rounded-lg' onChange={(e)=> setDescription (e.target.value)} value={Description} placeholder="Description " /> 

            <button className='bg-black text-white  text-center ml-24 rounded-full'>Submmit</button>
            </div>

            <h3 className='font-bold  text-2xl mt-5  text-left'>Tasks</h3>
            <ul>
              <li className='flex items-start border-red-400 grid gap-36 grid-cols-3 mt-4  '>
                 <span className='gap-x-8   gap-36 '>Item  Text</span>
                 <div>
                 <button className='bg-amber-400 rounded-lg ' >Edit</button>
                 <button className='bg-red-600 rounded-lg '>Delete</button>
                 </div>
               
              </li>
            </ul>
          
          <div>
            

</div>
            </>
)
}

export default Header;
