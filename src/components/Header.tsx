import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/create-account"}>Account</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;