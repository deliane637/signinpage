import mylogo from "./assets/logo.png"
import { RiSearchLine, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import "./App.css"
const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const clearSearch = () => {
        setSearchValue('');
    };

    const handleSearch = () => {
        if (searchValue.trim()) {
            console.log('Searching for:', searchValue);
            // Add your search logic here
        }
    };

    return (
        <>
            <nav>
                <div className="nav">
                    <div className="logo-area">
                        <img src={mylogo} alt="" className="logo-img" />
                        <div className="logo-text">Flearnaxy</div>
                    </div>

                    <div className="search-bar">
                        <RiSearchLine
                            size={18}
                            style={{
                                color: "#757575",
                                cursor: "pointer"
                            }}
                            onClick={handleSearch}
                        />
                        <input
                            type="text"
                            placeholder="Search flearnaxy"
                            className="search"
                            value={searchValue}
                            onChange={handleSearchChange}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        {searchValue && (
                            <RiCloseLine
                                size={18}
                                style={{
                                    color: "#757575",
                                    cursor: "pointer"
                                }}
                                onClick={clearSearch}
                            />
                        )}
                    </div>

                    <div className="info-area">
                        <div className="button">
                            <div className="create-text">Signup</div>
                        </div>
                        <div className="button">
                            <div className="create-text">Signin</div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar