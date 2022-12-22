import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil/todoList.js';

import { TaskInput } from '../components/TaskInput';
import { TaskDisplay } from '../components/TaskDisplay';


export const TodoList = () => {
    const todoList = useRecoilValue(todoListState);

    return (
        <>
            <h1>TODO List</h1>
            <TaskInput />
            <ul>
                {todoList.length > 0 &&
                    todoList.map((task) => (<TaskDisplay task={task} />))
                }
            </ul>
        </>
    );
};
