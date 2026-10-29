import style from './Task.module.css'
import TaskBox from './TeskBox';
import totalIcon from '../assets/menu-burger.png'
import pending from '../assets/pending.png'
import completed from '../assets/progress-complete.png'
import NewTaskAdd from './NewTaskAdd';
import {useState} from 'react'
const Task = () => {
  const [tasks, setTasks] = useState([]);

const totalTasks = tasks.length;

const completedTasks = tasks.filter(
  (item) => item.completed
).length;

const pendingTasks = totalTasks - completedTasks;
  return (
    <div>
      <div className={style.headingText}>
           <h1 className={style.h1}>Task</h1>
      <small className={style.smallText}>Manage your task and stay productive!</small>
       </div>
      <div className={style.TaskBox_flex}>
          <TaskBox names="Total" counts = {totalTasks} icon={totalIcon}/>
      <TaskBox names="Completed" counts= {completedTasks} icon={completed}/>
      <TaskBox names="Pending" counts= {pendingTasks} icon={pending} />
      </div>
      <div className="newTaskAdd">
        <NewTaskAdd  onTaskChange={setTasks} />
      </div>
    </div>
  )
}

export default Task
