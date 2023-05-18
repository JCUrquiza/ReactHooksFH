
export const Quote = ({ description, category }) => {

    return (
        <blockquote className='blockquote text-end'>
            <p className='mb-1'>{ description }</p>
            <footer className='blockquote-footer'>
                { category }
            </footer>
        </blockquote>
    )

}



