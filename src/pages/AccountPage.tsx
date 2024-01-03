import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {apiUrl} from "../config";

interface League {
    id: number;
    name: string;
}

const AccountPage: React.FC = () => {
    const [accountInfo, setAccountInfo] = useState<any>(null);
  const [leagues, setLeagues] = useState<League[]>([]);

    useEffect(() => {
        const accountUrl = `${apiUrl}/account`;

    // Fetch account information
        axios.get(accountUrl).then((response) => {
            setAccountInfo(response.data);
        });

    // Fetch leagues (replace with your actual data fetching logic)
        const fetchedLeagues: League[] = [
      { id: 1, name: 'League 1' },
      // ... other leagues
      { id: 3, name: 'League 3' },
        ];
        setLeagues(fetchedLeagues);
    }, []);

    if(!accountInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Account Information</h2>
            <p>Username: {accountInfo.username}</p>
            <p>Email: {accountInfo.email}</p>

            <h2>Your Leagues</h2>
            <ul>
                {leagues.map((league) => (
                    <li key={league.id}>
                        <Link to={`/league/${league.id}`}>{league.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccountPage;
