import React from 'react'
import { useCounter, useFetch, useForm } from '../Hooks';
import { LoadingQuote, Quote } from './';

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
                        <LoadingQuote />
                    ) : (
                        <Quote description={data.description} category={data.category} />
                    )
            }

            <button className='btn btn-primary' onClick={() => increment(1)}>Next quote</button>

        </>
    )
}




