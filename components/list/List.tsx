"use client";

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";
import Description from '../description/page';

//@ts-ignore
export default function (props) {
  
  const router = useRouter();

  const updateList = async (id: number, tasks: itemList[] , setTitle:any , setDescription:any , setDate:any , setId:any , isEditing:any , setIsEditing:any) => {
    const target = tasks.find((item) => item.id === id);
    // console.log(target);

    
    if (target) {
      setIsEditing(!isEditing);
      setTitle(target.title);
      setDescription(target.description);
      setDate(target.dueDate);
      setId(target.id);
      
    }
  };

  const deleteList = async (id: number , setTask:any) => {
    console.log("id : " , id);
    await axios.post("http://localhost:3000/api/delete" , {
      id,
    }).then(()=> router.push('/'));
    setTask(props.tasks.filter((item:any) => item.id!== id));
  }

  return (
    <div>
      <div className="grid grid-cols-4 text-sm text-black font-semibold pt-4 pb-3">
        <h2>ID</h2>
        <h2>Title</h2>
        <h2>Description</h2>
        <h2>Due Date</h2>
      </div>
      {props.tasks.map((item: itemList , id:number) => (
        <div className="grid grid-cols-4" key={item.id}>
          <p>{++id}</p>
          <div className="flex justify-between pr-12">
            <p>{item.title}</p>
          </div>
          <div className="flex justify-between pr-12">
            <div>
              <Description item={item} />
            </div>
          </div>
          <div className="flex justify-between pr-12">
            <p>{item.dueDate}</p>
            <div>
              <button
                onClick={() => updateList(item.id, props.tasks, props.setTitle , props.setDescription , props.setDate , props.setId , props.isEditing , props.setIsEditing )}
                className="p-2 text-green-600"
              >
                <FaEdit />
              </button>
              <button 
                onClick = {() => deleteList(item.id , props.setTask)}
                className="text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

type itemList = {
  id: number;
  title: string;
  description: string;
  date: string;
  dueDate ?: string;
};
