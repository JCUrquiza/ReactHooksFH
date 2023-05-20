import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/Hooks/useFetch';
import { useCounter } from '../../src/Hooks/useCounter';

jest.mock('../../src/Hooks/useFetch');
jest.mock('../../src/Hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    // Se limpian cada una de las pruebas en caso de que 
    // ya se haya llamado esa función
    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        // El texto que debe de aparecer en el componente
        expect( screen.getByText('BreakingBad Quotes') );
        expect( screen.getByText('Loading...') );

        // Verificar que el botón esté deshabilitado
        const nextButton = screen.getByRole('button', { name: 'Next quote' })
        expect( nextButton.disabled ).toBeTruthy();
        
        //  screen.debug();
    });

    test('Debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ description: 'JC', category: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        // screen.debug();
        // expect( screen.getByText('Hola mundo') ).toBeTruthy();
        const nextButton = screen.getByRole('button', { name: 'Next quote' })
        expect( nextButton.disabled ).toBeFalsy();

    });

    test('Debe de llamar la función de incrementar', () => {
        
        useFetch.mockReturnValue({
            data: [{ description: 'JC', category: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });
        
        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', { name: 'Next quote' })
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });

});


