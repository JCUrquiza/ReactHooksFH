import React from 'react'
import { useFetch } from '../Hooks/useFetch'
import { useCounter } from '../Hooks/useCounter';

export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://fakestoreapi.com/products/${ counter }`);

    // console.log(data, isLoading, hasError);

    // !!data = true;
    // const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading 
                    ? (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    ) : (
                        <blockquote className='blockquote text-end'>
                            <p className='mb-1'>{ data.description }</p>
                            <footer className='blockquote-footer'>
                                { data.category }
                            </footer>
                        </blockquote>
                    )
            }

            <button className='btn btn-primary' onClick={() => increment(1)}>Next quote</button>

        </>
    )
}




