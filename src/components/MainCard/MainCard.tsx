import { MouseEventHandler, useState } from "react";
import { ButtonDelete, ButtonEdit, ContentHeader, ContentTask, ContentTaskMain, DateTask, DescriptionTask, DurationTask } from "./style"
import { useData } from "../../contexts/TaskContext";
import { EditTaskPopup } from "../EditTaskPopup/EditTaskPopup";

export interface ContentProps {
    id: string;
    title: string;
    date: string;
    description: string;
    duration: string;
    rightActionDelete?: MouseEventHandler<HTMLButtonElement>;
}

export const MainCard: React.FC<ContentProps> = ({
    id,
    title,
    date,
    description,
    duration,
}) => {
    const { deleteTask } = useData();
    const [isEditing, setIsEditing] = useState(false);

    const handleDelete = () => {
        deleteTask(id); 
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    return (
        <>
            <ContentTask>
                <ContentHeader>
                    {title}
                    <div>
                        <ButtonEdit onClick={() => setIsEditing(true)}>Editar</ButtonEdit>
                        <ButtonDelete onClick={handleDelete}>Deletar</ButtonDelete>
                    </div>
                </ContentHeader>

                <ContentTaskMain>
                    <DateTask>
                        Data: {date}
                    </DateTask>
                    <DescriptionTask>
                        {description}
                    </DescriptionTask>
                    <DurationTask>Duração: {duration}<br /> Id:{id}</DurationTask>
                </ContentTaskMain>
            </ContentTask>
            {isEditing && <EditTaskPopup taskId={id} onClose={() => setIsEditing(false)} initialTitle={""} initialDescription={""} initialDate={new Date(0)} initialDuration={""} />}
        </>
    );
};