import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'
import { IoMdAdd } from "react-icons/io";
import AddEditNotes from './AddEditNotes';
import Modal from 'react-modal'


const Home = () => {
  const [openEditModel, setOpenEditModel] = useState({
    isShown:false,
    type:"add",
    data:null,
})

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
      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10'
        onClick={()=>{setOpenEditModel({isShown:true, type:'add',data:null})}}
        >
          <IoMdAdd className='text-[32px] text-white'/>
      </button>
      <Modal
       isOpen={openEditModel.isShown}
       onRequestClose={()=>{}}
       style={{
          overlay:{
            backgroundColor:"rgba(0,0,0,0.2)",
          },

       }}
       contentLabel=""
       className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-hidden"
       >
        <AddEditNotes 
        type={openEditModel.type}
        data={openEditModel.data}
        onClose={()=>{setOpenEditModel({isShown:false, type:'add',data:null})}}
        />
      </Modal>
    </>
  )
}

export default Home