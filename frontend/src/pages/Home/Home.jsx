import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'
import { IoMdAdd } from "react-icons/io";
import AddEditNotes from './AddEditNotes';

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className='container mx-auto px-[5%]'>
        <div className="grid grid-cols-3 gap-4 mt-8 ">
          <NoteCard 
          title="Meeting on 7th april" 
          date="3rd April 2024" 
          content="Meeting on 7th april"
          tags="#new-meeting "
          isPinned={true}
          onEdit={()=>{}}
          onDelete={()=>{}}
          onPinNote={()=>{}}
          />
        </div>
      </div>
      <div className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10'>
          <IoMdAdd className='text-[32px] text-white'/>
      </div>
      <AddEditNotes/>
    </>
  )
}

export default Home