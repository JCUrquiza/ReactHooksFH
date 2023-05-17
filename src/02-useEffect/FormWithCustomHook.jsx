import { useForm } from '../Hooks/useForm';
// import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });

    // const { username, email, password } = formState;

    const onResetForm = () => {
        console.log('click!');
    }

    return (
        <>

            <h1>Formulario con Custom Hook</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username" 
                name="username"
                value={username} 
                onChange={onInputChange} />

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="juan@gmail.com" 
                name="email" 
                value={email} 
                onChange={onInputChange} />

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña" 
                name="password" 
                value={password} 
                onChange={onInputChange} />

            
            {/* 
            {
                username === 'strider2' && <Message />
            }
            */}

            <button onClick={ onResetForm } className='btn btn-primary mt-2'>Borrar</button>

        </>
    )
}


