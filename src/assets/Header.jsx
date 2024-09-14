import {useState} from 'react'


const Header = () => {

  const [title,setTitle] =useState ("");
  const [Description setDesscription] =useState ("");
  const [todos,setTods] =useState ([])
  const apiurl = "http://localhost:3000/"


  const  handleSubmit = () => {
    if (title.trim () !== ''  && Description.trim()!==  '')
      fetch (apiurl)
  }
  return (
    <>
    <div className="text-white text-xl p-6 bg-cyan-700">
      <h1 >ToDo List</h1>
          </div>

          <div>
            <h3>Add  Items</h3>
            <p>Insert The Items</p>

</div>
<div className='grid gap-4 grid-cols-3'>
           <input type="text" id="name" name="name" placeholder="Title "/> 

           <input type="Description" id="name" name="name" placeholder="Description " /> 

            <button className='bg-lime-600 text-white text-right'>Submmit</button>
            </div>



   <div className='grid gap-4 grid-cols-3'>
  <button className='bg-red-500 text-white text-right'>Submmit</button>
            
  <button className='bg-lime-600 text-white text-right'>Submmit</button>

  <input type="Description" id="name" name="name" placeholder="Description " /> 
            
       
      </div> 
  
          
            </>
)
}

export default Header;
