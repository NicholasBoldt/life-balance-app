import React from 'react';
import Role from "../../components/Role/Role";
import HabitForm from "../../components/HabitForm/HabitForm";
import TaskForm from "../../components/TaskForm/TaskForm";

function RoleDetailPage(props) {
  const role = props.location.state.role;
  return (
    <div>
      <Role roleId={role._id} name={role.name} habits={role.habits} tasks={role.tasks} handleDeleteTask={props.handleDeleteTask} />
      <HabitForm role={role} handleAddHabit={props.handleAddHabit} history={props.history}/>
      <TaskForm role={role} handleAddTask={props.handleAddTask}  />
      <button
          className='btn btn-danger'
          onClick={() => props.handleDeleteRole(role._id)}
        >Delete Role</button>
   
    </div>


  );
}

export default RoleDetailPage;