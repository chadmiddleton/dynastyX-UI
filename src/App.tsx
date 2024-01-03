import React from 'react';
import './App.css';
import CreateAccount from "./pages/CreateAccount";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SuccessPage from "./pages/SuccessPage";
import ToolbarWithMenu from "./components/Toolbar";
import LeaguePage from "./pages/LeaguePage";
import TeamPage from "./pages/TeamPage";
import AccountPage from "./pages/AccountPage";

import './styles/HeaderStyles.css'
import LoginPage from "./pages/LoginPage";

const App: React.FC = () => {
    const handleAccountCreated = () => {
        console.log('Account created!');
    }
    return (
        <Router>
            <div>
                {/* Title Header */}
                <div className="header">DynastyX</div>

                {/* Toolbar */}
                <ToolbarWithMenu/>

                {/* Routes */}
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/create-account" element={<CreateAccount onAccountCreated={handleAccountCreated}/>}/>
                    <Route path="/success" element={<SuccessPage/>}/>
                    <Route path="/league" element={<LeaguePage/>}/>
                    <Route path="/team/:teamId" element={<TeamPage/>}/>
                    <Route path="/account" element={<AccountPage/>}/>
                </Routes>
            </div>
        </Router>
    )
        ;
}

export default App;
