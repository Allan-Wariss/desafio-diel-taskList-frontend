import { useState } from 'react';
import { MainCard } from './components/MainCard/MainCard';
import { useData } from './contexts/TaskContext';
import { AddTaskForm } from './components/AddTaskForm/AddTaskForm';
import { Task } from './types/types';
import { TaskList } from './components/ListTasks/ListTasks';

function App() {
  const { tasks } = useData();
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <>
      <AddTaskForm />
    
      <div>

        {selectedTask && (
          <MainCard
            id={selectedTask.id}
            title={selectedTask.title}
            date={selectedTask.date}
            description={selectedTask.description}
            duration={selectedTask.duration}
            rightActionDelete={() => {
              console.log('Delete button clicked');
            }}
          />
        )}
      </div>
      <TaskList
          tasks={tasks}
          onTaskClick={(task) => setSelectedTask(task)}
        />
    </>
  );
}

export default App;
