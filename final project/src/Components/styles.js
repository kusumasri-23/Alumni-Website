import './styles.css';
function Login(){
    return(
        <div class="wrapper">
        <div class="form-holder">
            <h2>Forgot Password?</h2>
            <form className="form" onSubmit="http://localhost:3000/register/save" method="post">
                <div className="form-group">
                        <img src="/images/email.png" alt="Email Icon" />
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            
                            required
                        />
                </div>
                <div className="form-group">
                        <img src="/images/lock.png" alt="Lock Icon" />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            
                            required
                        />
                    </div>
                <div className="form-group">
                        <button type="submit" >Login</button>
                </div>
            </form>
        </div>
    </div>
    );
}
export default Login;
