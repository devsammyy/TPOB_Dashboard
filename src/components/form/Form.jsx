import "./form.style.css";
const Form = () => {
    return (
        <div className='form_container'>
            <section className='form-container'>
                <form action='#' method='POST' encType='multipart/form-data'>
                    <div className='form-block'>
                        <label htmlFor='fc-generated-1-email'>
                            Enter your email ID
                        </label>
                        <input
                            type='text'
                            name='email'
                            id='fc-generated-1-email'
                            placeholder='Enter your email'
                        />
                    </div>

                    <div className='form-block'>
                        <label htmlFor='fc-generated-1-password'>
                            Enter your Password
                        </label>
                        <input
                            type='password'
                            name='password'
                            id='fc-generated-1-password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='form-block'>
                        <button type='submit'>Login</button>
                    </div>

                    <div className='forgot_password'>
                        <a href='#'>Forgot Password?</a>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Form;
