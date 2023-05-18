import React from 'react'
import { useCounter, useFetch } from '../Hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://fakestoreapi.com/products/${ counter }`);

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




