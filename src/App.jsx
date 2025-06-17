<<<<<<< HEAD
import { useState, useEffect } from 'react'
import Login from './Components/registration/Login';
import TodoModal from './Components/modalWindow/TodoModal';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
const [currentUserRole, setCurrentUserRole] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleSetUser = (userData) => {
    setCurrentUser(userData);
    if (userData) {
      console.log(`User ${userData.email} processed.`);
    } else {
      console.log("User logged out from App.");
    }
  };

  const handleSetUserRole = (role) => {
    setCurrentUserRole(role);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddTask = (newTaskData) => {
    const updatedTasks = [...tasks, { ...newTaskData, id: Date.now() }]; 
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
  };

  return (
    <>
{!currentUser ? (
        <Login setUser={handleSetUser} setUserRole={handleSetUserRole} />
      ) : (
        <div className="p-4">
          <h1 className="text-xl font-semibold">Welcome, {currentUser.email}!</h1>
          {currentUserRole && <p className="text-sm text-gray-600">Role: {currentUserRole}</p>}
          <button
            onClick={handleOpenModal}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add New Task
          </button>
          <button
            onClick={() => {
              setCurrentUser(null);
              setCurrentUserRole(null);
              // Optionally clear any session/token from localStorage if you implement that
            }}
            className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
=======
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CompletedHome from "./Components/Completed Tasks/CompletedHome";
import EditCompletedTask from "./Components/Completed Tasks/EditCompletedTask";
import TodoModal from "./Components/modalWindow/TodoModal";
import Login from "./Components/registration/Login";
>>>>>>> master

          <div className="mt-6">
            <h2 className="text-lg font-semibold">Your Tasks:</h2>
            {tasks.length === 0 ? (
              <p>No tasks yet. Add one!</p>
            ) : (
              <ul className="list-disc pl-5 space-y-2">
                {tasks.map(task => (
                  <li key={task.id} className={`p-2 border-b ${task.completed ? 'line-through text-gray-400' : ''}`}>
                    <strong className="text-gray-800">{task.title}</strong>
                    {task.description && <p className="text-sm text-gray-600">{task.description}</p>}
                    {/* Further task details can be added here */}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
      {isModalOpen && currentUser && ( // Only show modal if user is logged in
        <TodoModal
          isOpen={isModalOpen}
          onAddTask={handleAddTask}
          onClose={handleCloseModal}
        />
      )}

<<<<<<< HEAD
=======
  const sampleData = [
    {
      id: 1,
      Date: "2025-10-11",
      Title: "Project Deadline",
      Description: `Finalize the React project and submit the documentation. 
      Ensure all components are optimized and bugs are resolved.`,
      Label: [
        "Work",
        {
          Education: "Education",
          Home: "Home",
          Personal: "Personal",
          Other: "Other",
        },
      ],
      Reminder: [30, { 15: "15", 45: "45", 60: "60", 10: "10" }],
      LabelArr: ["Personal", "Home", "Education", "Work", "Other"],
      ReminderArr: [10, 15, 30, 45, 60],
    },
    {
      id: 2,
      Date: "2025-08-15",
      Title: "Weekend Getaway",
      Description: `Plan a road trip to Naivasha with friends. 
      Pack essentials, confirm reservations, and set up the itinerary.`,
      Label: [
        "Personal",
        { Education: "Education", Work: "Work", Home: "Home", Other: "Other" },
      ],
      Reminder: [10, { 15: "15", 45: "45", 60: "60", 30: "30" }],
      LabelArr: ["Personal", "Home", "Education", "Work", "Other"],
      ReminderArr: [10, 15, 30, 45, 60],
    },
    {
      id: 3,
      Date: "2025-07-20",
      Title: "Coding Workshop",
      Description: `Prepare a presentation on advanced React patterns. 
      Include practical examples and interactive exercises for attendees.`,
      Label: [
        "Education",
        { Personal: "Personal", Home: "Home", Other: "Other", Work: "Work" },
      ],
      Reminder: [60, { 15: "15", 45: "45", 30: "30", 10: "10" }],
      LabelArr: ["Personal", "Home", "Education", "Work", "Other"],
      ReminderArr: [10, 15, 30, 45, 60],
    },
    {
      id: 4,
      Date: "2025-12-01",
      Title: "Health Checkup",
      Description: `Schedule an annual medical checkup. 
      Ensure all necessary tests are completed for a comprehensive report.`,
      Label: [
        "Other",
        {
          Personal: "Personal",
          Home: "Home",
          Education: "Education",
          Work: "Work",
        },
      ],
      Reminder: [45, { 15: "15", 30: "30", 60: "60", 10: "10" }],
      LabelArr: ["Personal", "Home", "Education", "Work", "Other"],
      ReminderArr: [10, 15, 30, 45, 60],
    },
  ];

  localStorage.setItem("completed", JSON.stringify(sampleData));

  return (
    <>
      <div className="bg-blue-500">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* <TodoModal 
        // isOpen={isModalOpen} 
        // onClose={() => setModalOpen(false)} 
        // onAddTask={handleAddTask} 
      />
          <Login/> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/AddTask" element={<TodoModal />} />
          <Route path="/Completed" element={<CompletedHome />} />
          <Route path="/Edit" element={<EditCompletedTask />} />
        </Routes>
      </BrowserRouter>
>>>>>>> master
    </>
  );
}

export default App;
