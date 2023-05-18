import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ description, category }) => {

    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();

        setBoxSize({
            width,
            height
        });

        console.log(boxSize);

    }, []);

    return (

        <>
            <blockquote 
                className='blockquote text-end'
                style={{ display: 'flex' }} >
                <p ref={pRef} className='mb-1'>{ description }</p>
                <footer className='blockquote-footer'>
                    { category }
                </footer>
            </blockquote>

            <code>
                { JSON.stringify(boxSize) }
            </code>

        </>

    )

}



