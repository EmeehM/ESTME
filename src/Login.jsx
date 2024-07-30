import { useState } from "react";

function Login(){


    return(
        <div className="relative flex text-emerald-900 antialiased flex-col justify-center overflow-hidden py-6">
            <div className="relative py-3 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-5 bg-white shadow-md rounded-lg text-left">
                    <div className="h-2 bg-emerald-900 rounded-t-md"></div>
                    <div className="px-6 py-8">
                        <h1 className="text-2xl font-semibold text-emerald-900 mb-6 text-center">Inicio de sesión</h1>
                        <label className="block font-semibold">DNI</label>
                        <input 
                            type="number" 
                            placeholder="DNI" 
                            className="border w-full h-12 px-3 py-2 mt-2 hover:outline-none focus:outline-none focus:ring-emerald-800 focus:ring-1 rounded-md" 
                        />
                        <label className="block mt-3 font-semibold">Contraseña</label>
                        <input 
                            type="password" 
                            placeholder="Contraseña" 
                            className="border w-full h-12 px-3 py-2 mt-2 hover:outline-none focus:outline-none focus:ring-emerald-800 focus:ring-1 rounded-md" 
                        />
                        <div className="mt-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                            <button 
                                type="submit" 
                                className="bg-emerald-900 text-white py-2 px-6 rounded-md hover:bg-emerald-700 flex-1"
                            >
                                Ingresar
                            </button>
                            <button 
                                type="submit" 
                                className="bg-emerald-900 text-white py-2 px-6 rounded-md hover:bg-emerald-700 flex-1"
                            >
                                Registrarse
                            </button>
                            <button 
                                type="submit" 
                                className="bg-emerald-900 text-white py-2 px-6 rounded-md hover:bg-emerald-700 flex-1"
                            >
                                Registrar Comercio
                            </button>
                        </div>
                        <a href="#" className="block text-sm hover:underline mt-4 text-center">Recuperar contraseña</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login