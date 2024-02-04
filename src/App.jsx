import  { useState, useEffect } from 'react';

const App = () => {
    // Define initial state
    const initialState = {
        name: "",
        uName: "",
        email: "",
        number: ""
    };

    const gradientStyle = {
        backgroundImage: 'linear-gradient(to right, #654ea3, #eaafc8, #005c97, #00223e)'
    };

    const getStorageValue = (key, defaultValue) => {
        const saved = localStorage.getItem(key);
        const initial = JSON.parse(saved);
        return initial || defaultValue;
    };

    const [state, setState] = useState(() => getStorageValue("formState", initialState));

    useEffect(() => {
        localStorage.setItem("formState", JSON.stringify(state));
    }, [state]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Additional submit logic here if needed

        // Reset the form state
        setState(initialState);
    };

    return (
        <div style={gradientStyle} className="flex items-center justify-center h-screen">
            <div className="p-6 max-w-md w-full bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">Register</h2>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block" htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" name="name" placeholder="Full Name" value={state.name} onChange={handleInput} className="mt-1 px-3 py-2 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="username">Username</label>
                        <input type="text" id="username" name="uName" placeholder="Username" value={state.uName} onChange={handleInput} className="mt-1 px-3 py-2 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email" value={state.email} onChange={handleInput} className="mt-1 px-3 py-2 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="number" placeholder="Phone Number" value={state.number} onChange={handleInput} className="mt-1 px-3 py-2 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" value={state.password} onChange={handleInput} className="mt-1 px-3 py-2 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" value={state.confirmPassword} onChange={handleInput} className="mt-1 px-3 py-2 w-full bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                    </div>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default App;
