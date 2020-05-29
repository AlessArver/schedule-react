import React, {useEffect, useState} from 'react'
import * as s from './Todo.module.css'
import Preloader from '../../common/Preloader/Preloder'
import cn from 'classnames'

const Todo = ({todo, ...props}) => {
    let [textEdit, setTextEit] = useState(false)
    let [text, setText] = useState(todo.text)

    const textActivateEdit = () => setTextEit(true)

    const textDeactivateEdit = () => {
        setTextEit(false)
        props.updateTodoText(todo._id, text)
    }

    const onTextChange = e => setText(e.currentTarget.value)

    return props.todosIsLoading.some(id => id === todo._id) && <Preloader/>
        || <div className={cn(s.card, 'card')}>
            <div className='cardHeader'>
                <button className={s.delete} onClick={() => props.deleteTodo(todo._id)}>x</button>
            </div>
            <div className={cn(s.cardContent, 'cardContent')}>
                {!textEdit
                    ? <p onDoubleClick={textActivateEdit}>{todo.text}</p>
                    : <input
                        onChange={onTextChange}
                        autoFocus={true}
                        onBlur={textDeactivateEdit}
                        value={text}
                    />
                }
                <button className={s.isCompleted}>
                    {todo.completed ? 'y' : 'n'}
                </button>
            </div>
        </div>
}

export default Todo