import React from 'react';
export default function Login(props) {
    return (
        <div className='container'>
            <div id='form'>
                <form>
                    <h1>Login to continue</h1>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Your email here' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Your password here' />
                    </div>
                    <div className="form-check submit" style={{ "text-align": "center" }}>
                        <input className="btn" type="submit" />
                    </div>
                </form>
                <div className='switch'>
                    <button onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here</button>
                </div>
            </div>
            <div id="image"></div>
        </div>
    )
}
