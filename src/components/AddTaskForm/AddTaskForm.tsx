import React, { useState } from 'react';
import { Task } from '../../types/types';
import { useData } from '../../contexts/TaskContext';
import { Button, Form, Input, TextArea } from './style';

export const AddTaskForm: React.FC = () => {
    const { addTask } = useData();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [duration] = useState('PT1H');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !dateTime) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        const newTask: Task = {
            id: '',
            title,
            description,
            dateTime,
            duration,
            date: new Date().toISOString()
        };
        try {
            await addTask(newTask); 
            setTitle('');
            setDescription('');
            setDateTime('');
            window.location.reload();
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
            alert('Ocorreu um erro ao adicionar a tarefa. Por favor, tente novamente.');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <label>
                Título 
                <Input placeholder='Título da tarefa' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                Descrição 
                <TextArea placeholder='Descreva sua tarefa' value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Data e Hora 
                <Input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
            </label>
            <Button type="submit">Adicionar Tarefa</Button>
        </Form>
    );
};
