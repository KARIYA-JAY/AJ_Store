import React from 'react';
import { useAppContext } from '../context/Appcontext';

export const Login = () => {
    const { setShowUserLogin , setUser } = useAppContext();
    const [state, setState] = React.useState("login");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onsubmitHandler = async (event) =>{
        event.preventDefault();
        setUser({
            email: "demo@123",
            name:"demo",
        })
         setShowUserLogin(false)

    }

    return (
        <div onClick={()=> setShowUserLogin(false)} className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="relative">
            
                {/* Login Form */}
                <form onSubmit={onsubmitHandler} onClick={(e)=> e.stopPropagation()}className="flex flex-col gap-4 items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
                    <p className="text-2xl font-medium m-auto">
                        <span className="text-green-600">User</span> {state === "login" ? "Login" : "Sign Up"}
                    </p>

                    {state === "register" && (
                        <div className="w-full">
                            <p>Name</p>
                            <input onChange={(e) => setName(e.target.value)} value={name}
                                placeholder="type here"
                                className="border border-gray-200 rounded w-full p-2 mt-1 outline-green-600"
                                type="text" required />
                        </div>
                    )}

                    <div className="w-full">
                        <p>Email</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email}
                            placeholder="type here"
                            className="border border-gray-200 rounded w-full p-2 mt-1 outline-green-600"
                            type="email" required />
                    </div>

                    <div className="w-full">
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password}
                            placeholder="type here"
                            className="border border-gray-200 rounded w-full p-2 mt-1 outline-green-600"
                            type="password" required />
                    </div>

                    <p>
                        {state === "register" ? (
                            <>Already have account? <span onClick={() => setState("login")} className="text-green-600 cursor-pointer">click here</span></>
                        ) : (
                            <>Create an account? <span onClick={() => setState("register")} className="text-green-600 cursor-pointer">click here</span></>
                        )}
                    </p>

                    <button
                        className="bg-green-600 hover:bg-green-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
                        {state === "register" ? "Create Account" : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};
