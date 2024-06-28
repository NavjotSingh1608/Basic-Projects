import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md"
import FormModal from './FormModal';

const Content = () => {
  const [Alltasks, setAlltasks] = useState([]);
  const [Filtertype, setFiltertype] = useState("All");
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [IsEdit, setIsEdit ] = useState(null)
  const isFirstrender = useRef(true);

  useEffect(() => {
    let todoString = localStorage.getItem("Alltasks");
    if (todoString) {
      let Alltasks = JSON.parse(todoString);
      setAlltasks(Alltasks);
    }
  }, []);

  useEffect(() => {
    if (!isFirstrender.current) {
      saveToLS();
    }
    isFirstrender.current = false;
  }, [Alltasks]);

  const saveToLS = () => {
    localStorage.setItem("Alltasks", JSON.stringify(Alltasks));
  };

  const handleEdit = (e, id) => {
    const task = Alltasks.find(item=> item.id === id)
    setIsEdit(task)
    setIsFormModalOpen(true)
  };

  const handleDelete = (e, id) => {
    let newTodos = Alltasks.filter(item => {
      return item.id !== id;
    });
    setAlltasks(newTodos);
    saveToLS();
  };

  const handleAdd = (newtask,id=null) => {
    if(id){
      setAlltasks(Alltasks.map(item=> item.id === id ?{...item, ...newtask} : item))
    }else{
      setAlltasks([...Alltasks,{id:uuidv4(),...newtask, Fullfillment:false}])
    }
    setIsEdit(null)
    saveToLS();
  };

  const handleFilterChange = (e) => {
    setFiltertype(e);
  };

  const filterChange = () => {
    if (Filtertype === "Completed") {
      return Alltasks.filter(item => item.Fullfillment);
    } else if (Filtertype === "To-Do") {
      return Alltasks.filter(item => !item.Fullfillment);
    } else {
      return Alltasks;
    }
  };

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = Alltasks.findIndex(item => {
      return item.id === id;
    });
    let newTodos = [...Alltasks];
    newTodos[index].Fullfillment = !newTodos[index].Fullfillment;
    setAlltasks(newTodos);
    saveToLS();
  };

  return (
    <div className={`container flex justify-center items-center bg-gradient-to-t from-blue-800 to-blue-500 min-h-screen p-4`}>
      <div className={`bg-white bg-opacity-30 text-white p-4 flex-col h-auto w-auto rounded-3xl ${isFormModalOpen ? 'pointer-events-none opacity-50' : ''}`}>
        <div className="heading text-center font-bold text-3xl">
          React To-Do List
        </div>

        <div className="top flex flex-grow my-8 text-md h-auto w-auto">
          <button onClick={() => handleFilterChange("All")} className={`font-bold text-center px-2 py-2 w-36 h-14 mx-4 rounded-full ${Filtertype === "All" ? 'bg-blue-500 text-white' : 'text-gray-400 bg-white'} hover:text-black`}> All </button>
          <button onClick={() => {setIsFormModalOpen(true); setIsEdit(null);}} className='bg-white text-gray-400 font-bold text-center px-2 py-2 w-96 h-14 mx-4 rounded-full hover:text-black flex-grow'> Add a new To-do </button>
          <button onClick={() => handleFilterChange("To-Do")} className={`font-bold text-center px-2 py-2 w-36 h-14 mx-4 rounded-full ${Filtertype === "To-Do" ? 'bg-blue-500 text-white' : 'text-gray-400 bg-white'} hover:text-black`}> To-Do </button>
          <button onClick={() => handleFilterChange("Completed")} className={`font-bold text-center px-2 py-2 w-36 h-14 mx-4 rounded-full ${Filtertype === "Completed" ? 'bg-blue-500 text-white' : 'text-gray-400 bg-white'} hover:text-black`}> Completed </button>
        </div>

        {filterChange().length === 0 ? (
          <div className='flex justify-center font-bold bg-white opacity-80 text-black z-10 rounded-xl mx-4 p-2'> {Filtertype === "Completed" ? "No Completed To-Do to display " : "No To-Do to display"} 
          </div>
          ) : (
          <div className="todo bg-white h-auto w-auto rounded-3xl p-2">
            <div className="fill bg-slate-200 h-auto w-auto rounded-3xl grid grid-cols-7 gap-4 p-4 mb-4">
              <div className='text-md text-center text-black'> Task </div>
              <div className='text-md text-center text-black'> Description </div>
              <div className='text-md text-center text-black'> Category </div>
              <div className='text-md text-center text-black'> When </div>
              <div className='text-md text-center text-black'> Priority </div>
              <div className='text-md text-center text-black'> Completed </div>
              <div className='text-md text-center text-black'> </div>
            </div>

            {filterChange().map(item => (
              <div key={item.id} className="todos grid grid-cols-7 gap-4 items-center content-center justify-center bg-cyan-600 h-auto w-auto rounded-3xl m-2 p-2">
                <div className={`details text-md text-center text-black flex items-center justify-center`}>
                  {item.Tasks}
                </div>
                <div className="details text-md text-center text-black flex items-center justify-center"> {item.Description} </div>
                <div className="details text-md text-center text-black flex items-center justify-center"> {item.Category} </div>
                <div className="details text-md text-center text-black flex items-center justify-center"> {item.When} </div>
                <div className="details text-md text-center text-black flex items-center justify-center"> {item.Priority} </div>
                <div className="flex items-center justify-center">
                  <input
                    name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.Fullfillment} id=""
                    className='w-5 h-5 bg-transparent rounded-full'
                  />
                </div>
                <div className="buttons flex items-center justify-center">
                  <button onClick={(e) => { handleEdit(e, item.id) }} className='rounded-md text-black bg-gray-200 px-2 py-1 m-2'><AiFillEdit /></button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className='rounded-md text-black bg-gray-200 px-2 py-1 m-2'><MdDeleteForever /></button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <FormModal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        onAddtask={handleAdd}
        IsEdit={IsEdit}
      />
    </div>
  );
};

export default Content;
