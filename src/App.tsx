import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import SignIn from './pages/SignIn.tsx';
import SignUp from './pages/SignUp.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import ProtectedRoute from './components/auth/ProtectedRoute.tsx';
import SmartMeters from './pages/SmartMeters.tsx';

const protectedRoutes = [
    { path: '/', element: <HomePage /> },
];

const router = createBrowserRouter([
    ...protectedRoutes.map(route => ({
        ...route,
        element: <ProtectedRoute>{route.element}</ProtectedRoute>,
    })),
    {
        path: 'signin',
        element: <SignIn />,
    },
    {
        path: 'signup',
        element: <SignUp />,
    },
    {
        path: 'smart-meters',
        element: <SmartMeters />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
]);

const App = (): React.ReactElement => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
