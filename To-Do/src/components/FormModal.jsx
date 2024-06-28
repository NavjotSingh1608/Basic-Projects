import React, { useState, useEffect } from "react";
import { AiTwotoneSave } from "react-icons/ai";
import { MdAddToPhotos } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { CiSaveUp2 } from "react-icons/ci";

const FormModal = ({ isOpen, onClose, onAddtask, IsEdit }) => {
    const [Tasks, setTasks] = useState("");
    const [Description, setDescription] = useState("");
    const [Category, setCategory] = useState("");
    const [When, setWhen] = useState("");
    const [Priority, setPriority] = useState("");

    useEffect(() => {
        if (IsEdit) {
            setTasks(IsEdit.Tasks);
            setDescription(IsEdit.Description);
            setCategory(IsEdit.Category);
            setWhen(IsEdit.When);
            setPriority(IsEdit.Priority);
        } else {
            setTasks("");
            setDescription("");
            setCategory("");
            setWhen("");
            setPriority("");
        }
    }, [IsEdit]);

    const handleAddOrEdit = () => {
        if (!Tasks || !Description || !Category || !When || !Priority) {
            alert("Please fill out all fields.");
            return;
        }
        
        const task = { Tasks, Description, Category, When, Priority };
        onAddtask(task, IsEdit?.id);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-md w-full max-w-2xl mx-2 sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16">
                <div className="ec flex justify-between items-center mb-4">
                    <h2 className="text-xl sm:text-2xl text-black">{IsEdit ? "Edit Task" : "Add a new Task"}</h2>
                    <div className="btns flex gap-2 sm:gap-3">
                        <button type="button" onClick={handleAddOrEdit} className="bg-blue-500 text-white px-3 py-2 rounded-md text-sm sm:text-base">
                            {IsEdit ? <CiSaveUp2 /> : <MdAddToPhotos /> }
                        </button>
                        <button onClick={onClose} className="text-red-500 text-sm sm:text-base"><IoCloseSharp /></button>
                    </div>
                </div>
                <form className="relative">
                    <div className="mb-4 text-black grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="td flex flex-col">
                            <label className="text-sm sm:text-base">Task</label>
                            <input value={Tasks} onChange={(e) => setTasks(e.target.value)} className="block w-full px-2 py-1 border rounded-md text-sm sm:text-base" required />

                            <label className="text-sm sm:text-base">Description</label>
                            <input value={Description} onChange={(e) => setDescription(e.target.value)} className="block w-full px-2 py-1 border rounded-md flex-grow text-sm sm:text-base" required />
                        </div>

                        <div className="cwp flex flex-col">
                            <label className="text-sm sm:text-base">Category</label>
                            <select value={Category} onChange={(e) => setCategory(e.target.value)} className="block w-full px-2 py-1 border rounded-md text-sm sm:text-base" required>
                                <option value="" disabled>Select Category</option>
                                <option value="College">College</option>
                                <option value="Personal">Personal</option>
                                <option value="Job">Job</option>
                                <option value="Other">Other</option>
                            </select>
                            {Category === "Other" && (
                                <input 
                                    type="text" 
                                    placeholder="Specify other category" 
                                    value={Category === "Other" ? "" : Category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="block w-full px-2 py-1 border rounded-md mt-2 text-sm sm:text-base" 
                                    required 
                                />
                            )}

                            <label className="text-sm sm:text-base">When</label>
                            <input value={When} onChange={(e) => setWhen(e.target.value)} type="date" className="block w-full px-2 py-1 border rounded-md text-sm sm:text-base" required />

                            <label className="text-sm sm:text-base">Priority</label>
                            <select value={Priority} onChange={(e) => setPriority(e.target.value)} className="block w-full px-2 py-1 border rounded-md mb-2 text-sm sm:text-base" required>
                                <option value="" disabled>Select Priority</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormModal;
