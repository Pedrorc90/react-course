import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";


describe('Test in the useForm', () => {

    const initialValue = {
        name: 'Pedro',
        email: 'pedro@google.com'
    }

    test('Should return default value', () => {

        const { result } = renderHook(() => useForm( initialValue ))
        expect( result.current ).toEqual({
            formState: initialValue,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
          })
        

    })

    test('Should change the name in the form', () => {
        const { result } = renderHook(() => useForm( initialValue ))
        const { onInputChange } = result.current;
        const newValue = 'Juan'

        act(() => {
            onInputChange( { target : { name: 'name', value: newValue } } );
        })

        expect( result.current.formState.name ).toBe( newValue )
        
    })

    test('Should realize reset of the form', () => {
        const { result } = renderHook(() => useForm( initialValue ))
        const { onInputChange, onResetForm } = result.current;
        const newValue = 'Juan'

        act(() => {
            onInputChange( { target : { name: 'name', value: newValue } } );
            onResetForm();
        })

        expect( result.current.formState.name ).toBe( initialValue.name )
        
    })
})