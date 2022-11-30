import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import { Users } from './pages/Users';
import { Login } from './pages/Login';
import { Register } from 'pages/Register/';
import { Profile } from 'pages/Profile';
import useAuth from 'hooks/useAuth';
import { Error404 } from 'pages/404';

const Private = ({ Item }) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Login />
}

export function RoutesApp() {
    const { signed } = useAuth();

    return (
        <Router>
            <Routes>
                <Route path="/" element={signed ? <Navigate to='/users' /> : <Login />} />
                <Route path="/Register" element={signed ? <Navigate to='/users' /> : <Register />} />

                <Route path="/users" element={<Private Item={Users} />} />
                <Route path="/users/:id" element={<Private Item={Profile} />} />

                <Route path="/404" element={<Error404 />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </Router>
    );
}