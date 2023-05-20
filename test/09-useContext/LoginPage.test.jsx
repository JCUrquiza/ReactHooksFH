import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";


describe('Pruebas en <LoginPage />', () => {

    const user = {
        id: 1,
        name: 'JC'
    }

    test('Debe de mostrar el componente sin el usuario', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');

    });

    test('Debe de llamar el setUser cuando se hace click en el botón', () => {

        const setUserMock = jest.fn();

        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        // Obtener el botón 'Establecer usuario':
        const button = screen.getByRole('button');
        fireEvent.click( button );
        
        // Esperar que el mock sea llamado con el botón
        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith({"email": "jc@gmail.com", "id": 123, "name": "Juan"});

    });

});


