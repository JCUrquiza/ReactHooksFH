import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';


describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    // Para resetera las funciones en cada prueba:
    beforeEach( () => jest.clearAllMocks() );

    test('Debe de mostrar el Todo Pendiente de completar', () => {

        render( 
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock} 
            /> 
        );

        const liElement = screen.getByRole('listitem');

        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        // Revisar las clases del span
        const spanElement = screen.getByLabelText('span'); 
        // console.log(spanElement.className);
        expect( spanElement.className ).toContain('align-self-center ');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');
        
    });

    test('Debe de mostrar el Todo Completado', () => {

        todo.done = true;

        render( 
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock} 
            /> 
        );

        // Revisar las clases del span
        const spanElement = screen.getByLabelText('span');

        expect( spanElement.className ).toContain('text-decoration-line-through');

    });

    test('Span debe de llamar el ToggleTodo cuando se hace click', () => {

        render( 
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock} 
            /> 
        );
        
        const spanElement = screen.getByLabelText('span');
        // Simular el click
        fireEvent.click( spanElement );
        // Esperar que el método onToggleTodoMock sea llamado con el valor de 1
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id ); 

    });

    test('Button debe de llamar el deleteTodo cuando se hace click', () => {

        render( 
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock} 
            /> 
        );

        // Obtener el botón:
        const deleteButton = screen.getByRole('button');
        fireEvent.click( deleteButton );
        // Esperar que el método onDeleteTodoMock sea llamado con el valor de 1
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id ); 

    });

});


