import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/Hooks/useTodo';

// Hacer mock:
jest.mock('../../src/Hooks/useTodo');

describe('Pruebas en <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true },
        ],
        todoCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn()
    });

    test('Debe de mostrar el componente correctamente', () => {

        render( <TodoApp/> );

        // Experamos que el todo 'Todo #1' exista
        expect( screen.getByText('Todo #1') ).toBeTruthy();
        expect( screen.getByText('Todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();

    });

});




