import React, { useState, useEffect } from 'react';
import { useData } from "../../contexts/TaskContext";
import { FormEdit, PopupContent, PopupEdit } from './style';
import { Input, TextArea } from '../AddTaskForm/style';

interface EditTaskPopupProps {
    taskId: string;
    onClose: () => void; 
    initialTitle: string; 
    initialDescription: string; 
    initialDate: Date; 
    initialDuration: string;
}

export const EditTaskPopup: React.FC<EditTaskPopupProps> = ({ taskId, onClose, initialTitle, initialDescription, initialDate }) => {
    const { updateTask } = useData();
    const [newTitle, setNewTitle] = useState(initialTitle);
    const [newDescription, setNewDescription] = useState(initialDescription);
    const [newDate, setNewDate] = useState(initialDate.toISOString().slice(0, 16)); 

    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []); 

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTitle || !newDescription || !newDate) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        const updatedTask = {
            id: taskId,
            title: newTitle,
            description: newDescription,
            dateTime: new Date(newDate).toISOString(),
            duration: "PT1H",
            date: ''
        };
        updateTask(taskId, updatedTask);
        setTimeout(() => {
            window.location.reload();
        }, 1000);
        onClose();
    };

    return (
        <PopupEdit>
            <PopupContent>
                <div>
                    <button onClick={onClose}>X</button>
                    <h2>Editar Tarefa</h2>
                </div>
                <FormEdit onSubmit={handleSubmit}>
                    <label>
                        Novo Título
                        <Input placeholder='Edite o Título' type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                    </label>
                    <label style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        Nova Descrição
                        <TextArea placeholder='Edite a descrição' value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                    </label>
                    <label>
                        Nova Data
                        <Input type="datetime-local" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
                    </label>
                    <button type="submit">Salvar</button>
                </FormEdit>
            </PopupContent>
        </PopupEdit>
    );
};
