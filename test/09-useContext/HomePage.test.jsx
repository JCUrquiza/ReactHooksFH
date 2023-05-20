import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'JC'
    }

    test('Debe de mostrar el componente SIN el usuario', () => {

        // El componente de <HomePage /> está envuelto en un provider, entonces:
        render(
            <UserContext.Provider value={{ user: null }}> 
                <HomePage />
            </UserContext.Provider>
        );

        // Obtener la referencia al elemento por nombre de aria-label:
        const preTag = screen.getByLabelText('pre'); // aria-label
        // Esperando que sea null
        expect( preTag.innerHTML ).toBe('null');

    });

    test('Debe de mostrar el componente CON el usuario', () => {

        // El componente de <HomePage /> está envuelto en un provider, entonces:
        render(
            <UserContext.Provider value={{ user }}> 
                <HomePage />
            </UserContext.Provider>
        );

        // screen.debug();
        // Obtener la referencia al elemento por nombre de aria-label:
        const preTag = screen.getByLabelText('pre');
        // Esperando que esté el usuario
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.id.toString() );

    });

});


