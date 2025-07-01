import { useState, useEffect } from 'react';
import { signUp, confirmSignUp, signIn, signOut, getCurrentUser } from '@aws-amplify/auth';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        verificationCode: ''
    });


    const [step, setStep] = useState('loading'); // Start with loading state
    const [message, setMessage] = useState('');

    // Check if the user is already signed in
    useEffect(() => {
        async function checkUser() {
            try {
                const user = await getCurrentUser();
                if (user) {
                    setStep('loggedin'); // If user is signed in, show logged-in state
                } else {
                    setStep('login'); // Otherwise, show login form
                }
            } catch {
                setStep('login'); // No user is logged in
            }
        }
        checkUser();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle User Signup
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signUp({
                username: formData.email,
                password: formData.password,
                attributes: {
                    name: formData.name,
                    email: formData.email
                }
            });

            setMessage('Signup successful! Check your email for verification.');
            setStep('verify'); // Move to verification step
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    // Handle Email Verification
    const handleVerify = async (e) => {
        e.preventDefault();
        try {
            await confirmSignUp({
                username: formData.email,
                confirmationCode: formData.verificationCode
            });

            setMessage('Verification successful! You can now log in.');
            setStep('login'); // Move to login step
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    // Handle User Login
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signIn({
                username: formData.email,
                password: formData.password
            });
    
            setMessage('Login successful! Redirecting...');
            setStep('loggedin');
    
            
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };
    
    // Handle Logout
    const handleLogout = async () => {
        try {
            await signOut();
            setMessage('Logged out successfully.');
            setStep('login'); // Redirect to login
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h3>{step === 'signup' ? 'Sign Up' : step === 'login' ? 'Login' : 'Welcome'}</h3>

            {/* Show Loading State */}
            {step === 'loading' && <p>Loading...</p>}

            {/* Signup Form */}
            {step === 'signup' && (
                <form onSubmit={handleSignUp}>
                    <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Message</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Create Password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <button type="submit"  className="btn btn-primary">Sign Up</button>
                    <p>Already have an account? <span onClick={() => setStep('login')} style={{ cursor: 'pointer', color: 'blue' }}>Login here</span></p>
                </form>
            )}

            {/* Verification Form */}
            {step === 'verify' && (
                <form onSubmit={handleVerify}>
                    <div className="mb-3">
                    <input
                        type="text"
                        name="verificationCode"
                        placeholder="Enter Verification Code"
                        className="form-control"
                        value={formData.verificationCode}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <button type="submit"  className="btn btn-primary">Verify Account</button>
                </form>
            )}

            {/* Login Form */}
            {step === 'login' && (
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <p>New user? <span onClick={() => setStep('signup')} style={{ cursor: 'pointer', color: 'blue' }}>Sign up here</span></p>
                </form>
            )}

            {/* Logged-in Screen */}
            {step === 'loggedin' && (
                <div>
            {message && <p>{message}</p>}
                    <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                </div>
            )}

        </div>
    );
}
