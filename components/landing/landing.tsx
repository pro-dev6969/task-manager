"use client";
import React from "react";
import axios from "axios";
import List from "../list/List";

export function Landing() {
  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/read")
      .then((response) => {
        setTask(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the tasks!", error);
      });
  }, []);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [task, setTask] = React.useState([]);
  const [isEditing , setIsEditing] = React.useState(false);
  const [id , setId] = React.useState("");

  return (
    <div>
      <div className="grid grid-cols-4 pt-10 pb-10">
        <div className='flex flex-col pr-12' >
          <label
            className="mb-2 text-sm text-black font-semibold pt-4"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            id="title"
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='flex flex-col pr-12' >
          <label
            className="mb-2 text-sm text-black font-semibold pt-4"
            htmlFor="description"
          >
            Description
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            id="description"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='flex flex-col pr-12' >
          <label
            className="mb-2 text-sm text-black font-semibold pt-4"
            htmlFor="date"
          >
            Due Date
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            id="date"
            type="date"
            placeholder="title"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div >
          {isEditing ? 
          <button
          className=" text-white bg-green-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          type="submit"
          onClick={async () => {
            await axios.post("http://localhost:3000/api/update", {
              id,
              title,
              description,
              date: date.toString(),
            });
            setTitle("");
            setDescription("");
            setDate("");
          }}
        >
          Edit
        </button>
          :
          <button
          className=" text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          type="submit"
          onClick={async () => {
            await axios.post("http://localhost:3000/api/create", {
              title,
              description,
              date: date.toString(),
            });
            const itemid = task.length + 1;
            //@ts-ignore
            setTask([...task, { itemid , title, description, dueDate:date }]);
            setTitle("");
            setDescription("");
            setDate("");
          }}
        >
          Submit
        </button>
          }  
          
        </div>
      </div>
      <List tasks={task} setTask={setTask} setTitle={setTitle} setDescription={setDescription} setDate={setDate} setId={setId} isEditing={isEditing} setIsEditing={setIsEditing} />
    </div>
  );
}

type itemList = {
  id: number;
  title: string;
  description: string;
  date: string;
};