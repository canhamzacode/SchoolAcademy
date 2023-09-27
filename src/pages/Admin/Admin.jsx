import React from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import CollectionCard from '../../components/CollectionCard/CollectionCard'

const Admin = () => {
  return (
    <div className='w-full p-[30px] h-[100vh] bg-white/40 overflow-y-auto gap-[20px] flex flex-col'>
      <div className='w-full flex flex-wrap gap-[10px] items-center justify-between'>
        <div className='w-full max-w-[550px] bg-white px-[20px] py-[5px] rounded-md'>
          <div className='flex items-center'>
            <input type="text" placeholder='Search...' className='w-full h-[35px] border-none outline-none' />
            <button>
              <AiOutlineSearch size={30} />
            </button>
          </div>
      </div>
      <div className='w-full max-w-[250px] flex  gap-[15px] items-center'>
        <div>
          <p>Teacher</p>
          <p>Yahaya Muhammad</p>
        </div>
        <div className='w-[80px] h-[80px]'>
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/356546244_948973486408094_1467759710993213655_n.jpg?ccb=11-4&oh=01_AdQjRfZBipWrMQ8vyOgLwO3dzEkrmLvVJehaChdR-cZOWQ&oe=652025F5&_nc_sid=000000&_nc_cat=107"
            alt=""
            className='w-full h-full rounded-[50%]'
          />
        </div>
      </div>
      </div>
      <div className='w-full grid md:grid-cols-3 gap-[30px] grid-cols-1 '>
        <CollectionCard title="Student" />
        <CollectionCard title="Teachers" />
        <CollectionCard title="Classes" />
      </div>
    </div>
  )
}

export default Admin