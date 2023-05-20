import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/Hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Juan',
        email: 'jc@gmail.com'
    }

    test('Debe de regresar los valores por defecto', () => {

        const { result } = renderHook( () => useForm(initialForm) );

        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        })

    });

    test('Debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan';

        // Montar el hook
        const { result } = renderHook( () => useForm(initialForm) );
        
        const { onInputChange } = result.current;

        // Montar el onInputChange() act, espera un objeto, event
        act( () => {
            onInputChange({ target: { name: newValue } });
        });
        
        // Luego el expect, result.current.name == Juan
        expect( result.current.name ).toBe(newValue);
        // Luego el expect, result.current.formState.name == Juan
        expect( result.current.formState.name ).toBe(newValue);

    });

    test('Debe de realizar el reset del formulario', () => {

        // Montar el hook
        const { result } = renderHook( () => useForm(initialForm) );
        
        const { onResetForm, onInputChange } = result.current;

        // Montar el onInputChange() act, espera un objeto, event
        act( () => {
            onInputChange({ target: { name: 'Juan' } });
            onResetForm();
        });
        
        // Luego el expect, result.current.name == Juan
        expect( result.current.name ).toBe(initialForm.name);
        
    });

});



