import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CompletedHome from "./assets/Components/Completed Tasks/CompletedHome";
import EditCompletedTask from "./assets/Components/Completed Tasks/EditCompletedTask";
import TodoModal from './Components/modalWindow/TodoModal';
import Login from './Components/registration/Login';

function App() {
  const [count, setCount] = useState(0);

  const sampleData = [
    {
      id: 1,
      Date: "2025-10-11",
      Title: "Project Deadline",
      Description: `Finalize the React project and submit the documentation. 
      Ensure all components are optimized and bugs are resolved.`,
      Label: ["Work", { Education: "Education", Home: "Home", Personal:"Personal", Other: "Other" }],
      Reminder: [30, { 15: "15", 45: "45", 60:"60", 10:"10" }],
      LabelArr: ['Personal', 'Home', 'Education', 'Work',  'Other'],
      ReminderArr: [10, 15, 30, 45, 60],
    },
    {
      id: 2,
      Date: "2025-08-15",
      Title: "Weekend Getaway",
      Description: `Plan a road trip to Naivasha with friends. 
      Pack essentials, confirm reservations, and set up the itinerary.`,
      Label: ["Personal", { Education: "Education", Work:"Work", Home: "Home", Other: "Other" }],
      Reminder: [10, { 15: "15", 45: "45", 60:"60", 30:"30" }],
      LabelArr: ['Personal', 'Home', 'Education', 'Work',  'Other'],
      ReminderArr: [10, 15, 30, 45, 60],
    },
    {
      id: 3,
      Date: "2025-07-20",
      Title: "Coding Workshop",
      Description: `Prepare a presentation on advanced React patterns. 
      Include practical examples and interactive exercises for attendees.`,
      Label: ["Education", { Personal:"Personal", Home: "Home", Other: "Other", Work:"Work"}],
      Reminder: [60, { 15: "15", 45: "45", 30:"30", 10:"10" }],
      LabelArr: ['Personal', 'Home', 'Education', 'Work',  'Other'],
      ReminderArr: [10, 15, 30, 45, 60],
    },
    {
      id: 4,
      Date: "2025-12-01",
      Title: "Health Checkup",
      Description: `Schedule an annual medical checkup. 
      Ensure all necessary tests are completed for a comprehensive report.`,
      Label: ["Other", { Personal:"Personal", Home: "Home", Education: "Education", Work:"Work"}],
      Reminder: [45, { 15: "15", 30: "30", 60:"60", 10:"10" }],
      LabelArr: ['Personal', 'Home', 'Education', 'Work',  'Other'],
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


<TodoModal 
        // isOpen={isModalOpen} 
        // onClose={() => setModalOpen(false)} 
        // onAddTask={handleAddTask} 
      />
          <Login/>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<CompletedHome />} />
        <Route path="/Edit" element={<EditCompletedTask />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
