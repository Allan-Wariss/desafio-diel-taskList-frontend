import { ReactNode } from "react";

export interface Task {
    date: string;
    id: string;
    title: string;
    description: string;
    dateTime: string;
    duration: string;
}

export interface DataProviderProps {
    children: ReactNode;
}

export interface DataContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    updateTask: (id: string, updatedTask: Task) => void;
    getAll: () => void;
}


