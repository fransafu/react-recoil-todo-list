import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/todoList.js'


export const TaskInput = () => {
    const [taskName, setTaskName] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addTodoTask = () => {
        if (taskName !== '') {
            setTodoList((prev) => [...prev, { title: taskName }])
            setTaskName('');
        }
    };

    const onChange = (e) => setTaskName(e.target.value);

    return (
        <>
            <input value={taskName} onChange={onChange} placeholder="title"/>
            <button onClick={addTodoTask}>
                Add Task
            </button>
        </>
    );
};
