import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
    const [search, setSearch] = useState('');

    return (
        <>
            <Navbar setSearch={setSearch} />
            <Home search={search} />
        </>
    );
}

export default App;
