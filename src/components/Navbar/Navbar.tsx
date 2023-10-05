import { useState } from 'react';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/searchIcon.svg';
import { IPropsNavbar } from '../../types/interfaces/INotes';

const Navbar = ({ setSearch }: IPropsNavbar) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        setSearch(searchTerm);
    };

    return (
        <div className="flex items-center flex-wrap shadow-md">
            <div className="flex items-center w-90 gap-6">
                <img
                    src={logo}
                    alt="Logo da página"
                    className="w-10 h-10 ml-9"
                />

                <h1 className="font-sans font-normal text-gray-700 mr-5">
                    CoreNotes
                </h1>
            </div>
            <div className="flex items-center justify-center p-2 gap-6 border border-gray-300 shadow-md rounded-md sm:max-w-md max-w-screen-xl w-full mx-5 my-4 sm:mx-0">
                <input
                    type="text"
                    placeholder="Pesquisar notas"
                    className="w-full bg-transparent border-none focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>
                    <img
                        src={searchIcon}
                        alt="icone de busca"
                        className="w-5 h-5 mr-2"
                    />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
