import { login, logout, register } from '@dev/auth/helper';
import { clearUser, setUser } from '@reduer/user/userSilice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            console.log(currentUser);
            if (currentUser) {
                dispatch(
                    setUser({
                        uid: currentUser.uid,
                        email: currentUser.email,
                    })
                );
            } else {
                dispatch(clearUser());
            }
        });
        return () => unsubscribe();
    }, []);

    const handleRegister = async () => {
        try {
            await register(email, password);
            setEmail("");
            setPassword("");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleLogin = async () => {
        try {
            await login(email, password);
            setEmail("");
            setPassword("");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleLogout = async () => {
        await logout();
    };

    return (
        <div style={{ padding: "20px" }}>
            {user ? (
                <div>
                    <h2>Welcome, {user.email}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Login / Register</h2>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleRegister}>Register</button>
                </div>
            )}
        </div>
    );
}

