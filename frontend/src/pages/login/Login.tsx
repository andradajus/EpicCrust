import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
    const backendBaseUrl = import.meta.env.VITE_BACKEND_BASE_URL;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect (() => {
        const cookies = document.cookie.split(';');
        let token = null;
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.trim().split('=');
            if (cookieName === 'token') {
                token = cookieValue;
                break;
            }
        }
        if (token) {
            navigate('/menu')
        }
    }, [navigate])

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const user = {
            user: {
            email: email,
            password: password,
            },
        };
        const axiosConfig = {
            headers: {
            Authorization: '',
            },
        };
        try {
        const res = await axios.post(`${backendBaseUrl}/users/sign_in`, user, axiosConfig);
        const token = res.headers.authorization;
        document.cookie = `token=${token};path=/`;
        setEmail('')
        setPassword('')
        if (res.data.role == 'employee') {
            navigate('/admin')
        } else {
            navigate('/menu')
        }
        } catch (error) {
        console.error('Login failed', error);
        }
    };

return (
    <>
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://wallpapers.com/images/high/thin-capricciosa-pizza-rcj1d6gllxeowytq.webp)'}}>
            <div className="hero-content flex-col lg:flex-row gap-16">
                <div className="text-center lg:text-left bg-ghost p-5 rounded-md">
                    <h1 className="text-5xl font-bold text-primary">Login now!</h1>
                    <p className="py-6 text-neutral">"Indulge in the irresistible allure of flavor with Epic Crust – where every slice is a journey of taste perfection! Savor the extraordinary, embrace the epicurean delight of our artisanal pizzas!"</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="flex justify-center w-full">
                            <div className="flex justify-center gap-2 mb-5">
                                <img src="https://i.ibb.co/JpvPTYs/LOGO.png" className="w-12 h-10" />
                                <p className="font-bold text-3xl">Epic Crust</p>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow" placeholder="Password" value={password} onChange ={(e) => setPassword(e.target.value)}/>
                            </label>
                            <div className="flex justify-between">
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <Link to="/registration">
                                    <label className="label">
                                        <a className="label-text-alt link link-hover">No account yet? Register here!</a>
                                    </label>
                                </Link>
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
