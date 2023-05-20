const { act, renderHook } = require('@testing-library/react');
const { useCounter } = require('../../src/Hooks/useCounter');

describe('Pruebas con el useCounter', () => {

    test('Debe de retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );
        // console.log(result);
        const { counter, decrement, increment, reset } = result.current;

        // Que el valor del counter dea 10
        expect( counter ).toBe(10);
        // Comprobar que sea una función
        expect( decrement ).toEqual( expect.any(Function) );
        expect( increment ).toEqual( expect.any(Function) );
        expect( reset ).toEqual( expect.any(Function) );

    });

    test('Debe de generar el counter con el valor de 100', () => {

        const {result} = renderHook( () => useCounter(100) );

        expect( result.current.counter ).toBe(100);

    });

    test('Debe de incrementar el contador', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, increment } = result.current;

        act( () => {
            increment();
        });

        // Tomamos el valor anterior del current
        expect( result.current.counter ).toBe(11);

    });

    test('Debe de decrementar el contador', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, decrement } = result.current;

        act( () => {
            decrement();
        });

        // Tomamos el valor anterior del current
        expect( result.current.counter ).toBe(9);

    });

    test('Debe de realizar el reset', () => {

        const { result } = renderHook( () => useCounter() );
        const { increment, reset } = result.current;

        act( () => {
            increment();
            reset();
        });

        // Tomamos el valor anterior del current
        expect( result.current.counter ).toBe(10);

    });

});





