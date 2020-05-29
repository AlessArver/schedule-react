import React from 'react'
import s from './Todos.module.css'
import Todo from './Todo/Todo'
import {Field, reduxForm} from 'redux-form'
import {maxLength, required} from '../../utils/validators'
import {Input} from '../common/Forms/Forms'

const maxLengthTodo = maxLength(100)

const TodoForm = props => (
    <form onSubmit={props.handleSubmit} className={s.form}>
        <Field
            name="text"
            placeholder="What you'll to do?"
            validate={[required, maxLengthTodo]}
            component={Input}
        />
        <button>Submit</button>
    </form>
)

const TodoReduxForm = reduxForm({form: 'todoForm'})(TodoForm)

const Todos = props => {
    const onSubmit = data => props.addTodo(data.text)

    let todos = props.todos.map(todo => <Todo
        todo={todo}
        key={todo._id}
        todosIsLoading={props.todosIsLoading}
        deleteTodo={props.deleteTodo}
        updateTodoText={props.updateTodoText}
    />)

    return (
        <>
            <div className={s.todos}>{todos}</div>
            <TodoReduxForm onSubmit={onSubmit}/>
        </>
    )
}
export default Todos