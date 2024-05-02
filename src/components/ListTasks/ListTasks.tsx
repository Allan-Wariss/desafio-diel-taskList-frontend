import React, { useEffect } from 'react';
import { useData } from '../../contexts/TaskContext';
import { Task } from '../../types/types';
import { AllTasks, HeaderTasks, LiTasks, UlTasks } from './style';

interface TaskListProps {
  tasks: Task[];
  onTaskClick: (task: Task) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskClick }) => {
  const { getAll } = useData();

  useEffect(() => {
    getAll();
  }, []);

  return (
    <AllTasks>
      <HeaderTasks><h2>Lista de Tarefas</h2></HeaderTasks>
      <UlTasks>
        {tasks.map((task: Task) => (
          <LiTasks key={task.id} onClick={() => onTaskClick(task)}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Data: {task.date}</p>
            <p>Duração: {task.duration}</p>
          </LiTasks>
        ))}
      </UlTasks>
    </AllTasks>
  );
};
