import { createContext, useContext, useEffect, useState } from "react";
import { Task, DataContextType, DataProviderProps } from "../types/types";
import { api } from "../services";

export const DataContext = createContext<DataContextType>({
    tasks: [],
    addTask: () => {},
    deleteTask: () => {},
    updateTask: () => {},
    getAll: () => {}
});

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    try {
      const response = await api.get<Task[]>('/findAll'); 
      setTasks(response.data);
    } catch (error) {
      console.error('Erro ao buscar as tarefas:', error);
    }
  };

  const addTask = async (newTask: Task) => {
    try {
      const response = await api.post<Task>('/add', newTask); 
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await api.delete(`/delete/${id}`); 
      setTasks(tasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

  const updateTask = async (id: string, updatedTask: Task) => {
    try {
      const response = await api.put<Task>(`/edit/${id}`, updatedTask); 
      const updatedTasks = tasks.map(task => (task.id === id ? response.data : task));
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  return (
    <DataContext.Provider value={{ tasks, addTask, deleteTask, updateTask, getAll }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
