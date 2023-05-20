import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('Debe de regresar el estado inicial', () => {

        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );

    });

    test('Debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Demo Todo 2',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );

        // Esperamos que el state tenga dos objetos:
        expect( newState.length ).toBe(2);
        // Que el state contengael último payload agregado:
        expect( newState[ 1 ] ).toEqual( action.payload );

    });

    test('Debe de eliminar un TODO', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );

        // Esperamos que el state tenga un objeto:
        expect( newState.length ).toBe(0);

    });

    test('Debe de realizar el Toggle del todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );

        // El done tiene que estar en true:
        expect( newState[ 0 ].done ).toBe( true );

    });

});


