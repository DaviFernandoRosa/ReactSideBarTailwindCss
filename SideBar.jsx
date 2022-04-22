import React, { useState } from 'react';
import '../Dashboard.css';
import logo from '../assets/logoDashboard.png';
import avatar from '../assets/avatarTeste.jpg';

export default function  Sidebar() {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className=" md:relative flex absolute">
            <button className="md:hidden absolute  " onClick={() => setIsOpen(!isOpen)}>
                <i className={isOpen ? "ml-3 fa-solid fa-bars text-white": "ml-3 fa-solid fa-xmark text-black"}></i>  
            </button>
            <div className={!isOpen ? "block bg-white transition-transform duration-300 bg-write-500 w-80  p-10 border-solid border-2 border-light-gray-500" : " md:block hidden  bg-white transition-transform duration-300 bg-write-500 w-80  p-10 border-solid border-2 border-light-gray-500"}>
                <div className="flex items-center flex-row  ">
                    <div className="">
                        <img className=" w-24 h-7" src={logo} alt='logo dashboard' />
                    </div>

                    <div className="ml-7">
                        <p><i class=" text-purple-800 fa-solid fa-bell" /></p>
                    </div>

                    <div className='ml-4 '>
                        <img className=" inline-block  h-12 w-12 rounded-full ring-2 ring-white " src={avatar} alt="avatar" />
                    </div>

                </div>
                <div>
                    <p className=" text-left font-normal mt-10 text-sm text-purple-800 ">Olá, <strong>Davi</strong>!</p>
                    <p className=' text-purple-800 font-bold '>O que você deseja realizar hoje? </p>
                </div>

                <div className='mt-10'>
                    <ul className="list-none">
                        <hr />
                        <li className="mt-3 flex text-gray-400 font-bold text-xs"><i class="ml-3 mr-2 fa-solid hover:text-purple-700 fa-house" /><span className="">Inicio</span></li><hr />
                        <li className="mt-3 flex text-gray-400 font-bold text-xs"><i class="ml-3 mr-2 fa-solid hover:text-purple-700 fa-fire" /><span className="">Explorar</span></li><hr />
                        <li className="mt-3 flex text-gray-400 font-bold text-xs"><i class="ml-3 mr-2 fa-solid hover:text-purple-700 fa-money-check-dollar" /><span className="">Financeiro</span></li><hr />
                        <li className="mt-3 flex text-gray-400 font-bold text-xs"><i class="ml-3 mr-2 fa-solid hover:text-purple-700 fa-chart-bar" /><span className="">Analytics</span></li><hr />
                        <li className="mt-3 flex text-gray-400 font-bold text-xs"><i class="ml-3 mr-2 fa-solid hover:text-purple-700 fa-circle-question" /><span className="">Ajuda</span></li><hr />
                        <li className="mt-3 flex text-gray-400 font-bold text-xs"><i class="ml-3 mr-2 fa-solid hover:text-purple-700 fa-gear" /><span className="">Configuracao</span></li><hr />
                    </ul>
                </div>

                <div className="flex flex-col mt-3">
                    <div>
                    <button className=" sm:w-64 w-56 font-sans font-bold sm:text-sm tex-xs flex p-3 mt-2 text-white bg-purple-800 waves-effect hover:text-purple-900 leading-none   rounded-md transition-all duration-200">
                    <i class="mr-2 fa fa-message" /> <span>Chat</span>
                    </button>
                    </div>

                </div>
                <div className="flex flex-row  mt-8">
                    <div>
                        <p className="text-gray-500 hover:text-purple-900"><i class=" mr-2 fa-solid fa-right-from-bracket"></i></p>
                    </div>
                    <div>
                        <p className=" text-sm text-gray-400 font-sans"><span className=''>Logout</span></p>
                    </div>
                </div>

            </div>
            
        </div>

    );
}



