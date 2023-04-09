import React, { useState } from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
        setTitle(event.target.value)

    function keyPressHandler(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field">
            <input
                onChange={changeHandler}
                value={title}
                type="text"
                id="title"
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Type ToDo text and press Enter
            </label>
        </div>
    )
}

export default TodoForm
