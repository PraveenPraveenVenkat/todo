import React from 'react'

const Header = () => {
  return (
    <>
    <div className="text-white text-xl p-6 bg-cyan-700">
      <h1 >ToDo List</h1>
          </div>

          <div>
            <h3>Add  Items</h3>
            <p>Insert The Items</p>

</div>
<div className='grid gap-4 grid-cols-2'>
           <input type="text" id="name" name="name" placeholder="Title "/> 

      
            <button className='bg-black text-white text-right'>Submmit</button>
            </div>
          
            </>
)
}

export default Header;
