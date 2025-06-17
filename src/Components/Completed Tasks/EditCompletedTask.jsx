import React, { useEffect, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Calendar from "./Calendar";

function EditCompletedTask() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {};

  const reducerListEdit = (state, action) => {
    switch (action.type) {
      case "DISPLAY_DETAILS":
        return action.payload;
      case "EDIT_DISPLAYED_INFO":
        return action.payload;
    }
  };

  const initialData = (id) => {
    const completedObjects = JSON.parse(localStorage.getItem("completed")) || [];
    return completedObjects.find((entry) => entry.id === id);
  }

  //Load the Data from the LocaLStorage and update it into our
  const [TaskEdit, dispatchTaskEdit] = useReducer(reducerListEdit, id, initialData);

  useEffect(() => { 
    const OBJ = JSON.parse(localStorage.getItem("completed"));
    const taskObj = OBJ.find((entry) => entry.id === id);
    dispatchTaskEdit({
      type: "DISPLAY_DETAILS",
      payload: taskObj,
    });
  }, []);

  useEffect(() => {
    if (Array.isArray(TaskEdit)) {
      localStorage.setItem("completed", JSON.stringify(TaskEdit));
      const updatedObj = JSON.parse(localStorage.getItem("completed"));
      const updatedSingleObj = updatedObj.find((entry) => entry.id === id);
      dispatchTaskEdit({
        type: "DISPLAY_DETAILS",
        payload: updatedSingleObj,
      })
    }
  },[TaskEdit])

  const handleDelete = (id) => {
    const completedTasksArr = JSON.parse(localStorage.getItem("completed"));
    console.log(completedTasksArr);
    const newArr = completedTasksArr.filter((event) => id !== event.id);
    localStorage.setItem("completed", JSON.stringify(newArr));
    navigate("/")
  };

  const handleInfoChange =(event, editedSection) => {
    const editingObject = JSON.parse(localStorage.getItem("completed"));
    const value = editingObject.find((entry) => entry.id === id);
    const editedValue = [];
    const valuesObj = {};
    if (typeof value[editedSection] === 'string') {
      value[editedSection] = event.target.value
    } else {
      value[`${editedSection}Arr`].forEach(element => {
        if (element === event.target.value) {
          editedValue.push(event.target.value);
        } else if(typeof element === 'number') {
          if(String(element) === event.target.value) {
            editedValue.push(+event.target.value);
          }else {
            valuesObj[`${element}`] = element
          }
        } else {
          valuesObj[`${element}`] = element
        }
      });
      editedValue.push(valuesObj);
      value[editedSection] = editedValue;
    }
    const updatedArr = editingObject.filter((task) => task.id !== id);
    updatedArr.push(value);
    dispatchTaskEdit({
      type: 'EDIT_DISPLAYED_INFO',
      payload: updatedArr,
    })
  }



  return (
    <div>
      <EditDeTailsContent info={TaskEdit} handleDelete={handleDelete} handleInfoChange={handleInfoChange} />
    </div>
  );
}

export default EditCompletedTask;

const EditDeTailsContent = ({ info, handleDelete, handleInfoChange }) => {
  const { Label, Reminder } = info;
  return (
    <div>
      <div className="flex justify-center">
        <p className="w-4/5 bg-orange-200 rounded-lg text-4xl font-semibold text-center p-2 m-2 pt-4 pb-4">{info.Title}</p>
      </div>
      <div className="flex justify-center h-96 mb-2 ">
        <textarea className="w-4/5 bg-gray-200 text-xl pt-4 rounded-3xl" value={info.Description} onChange={(e)=>{handleInfoChange(e, 'Description')}}></textarea>
      </div>
      <div className="flex justify-center">
        <div className="flex text-xl w-4/5 pt-3 pb-3">
          <div className="w-1/3">
            <Calendar date={info.Date} handleInfoChange={handleInfoChange} />
          </div>
          <div className="w-1/3">
            <label htmlFor="label">Label: </label>
            <select name="label" onChange={(e)=>{handleInfoChange(e, 'Label')}}>
              <option value={Label?.[0]}>{Label?.[0]}</option>
              {Object.keys(Label?.[1] || {}).map((key) => {
                return (
                  <option key={key} value={key}>
                    {Label?.[1]?.[key]}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-1/3">
            <label htmlFor="reminder">Reminders:</label>
            <select name="reminder" onChange={(e)=>{handleInfoChange(e, 'Reminder')}}>
              <option value={Reminder?.[0]}>{Reminder?.[0]} Mins</option>
              {/* {Check which are the other options to use } */}
              {Object.keys(Reminder?.[1] || {}).map((key) => {
                return (
                  <option key={key} value={key}>
                    {Reminder?.[1]?.[key]} Mins
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center mt-2">
          <button className="bg-red-400 hover:bg-green-400 p-3 rounded-lg text-xl"
            onClick={() => {
              handleDelete(info.id);
            }}
          >
            Delete Event
          </button>
        </div>
      </div>
    </div>
  );
};

//ToDo:
// Add a update button to update the info
//On opening a single list, it deletes the remaining objects, look at that





//Format for storing the Label and Reminders
// {Label: [work, {education: Education, home:Home, other: Other}]}

