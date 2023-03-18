const { renderHook } = require("@testing-library/react")
const { act } = require("react-dom/test-utils")
const { useCounter } = require("../../src/hooks/useCounter")

describe('Test in the useCounter', () => {

    test('Should return default value', () => {

        const { result } = renderHook(() => useCounter())
        const { counter, increment, decrement, reset } = result.current;
        

        expect( counter ).toBe( 10 )
        expect( increment ).toEqual( expect.any( Function ) )
        expect( decrement ).toEqual( expect.any( Function ) )
        expect( reset ).toEqual( expect.any( Function ) )

    })

    test('Should return counter with value of 100', () => {

        const { result } = renderHook(() => useCounter(100))
        const { counter } = result.current;
        
        expect( counter ).toBe( 100 )

    })

    test('Should increment properly', () => {

        const { result } = renderHook(() => useCounter())
        const { counter, increment } = result.current;

        act( () => {
            increment();
        } )
        
        
        expect( result.current.counter ).toBe( 11 )

    })

    test('Should decrement properly', () => {

        const { result } = renderHook(() => useCounter())
        const { counter, decrement } = result.current;

        act( () => {
            decrement();
        } )
        
        
        expect( result.current.counter ).toBe( 9 )

    })

    test('Should do the reset', () => {

        const { result } = renderHook(() => useCounter())
        const { counter, reset } = result.current;

        act( () => {
            reset();
        } )
        
        
        expect( result.current.counter ).toBe( 10 )

    })

})