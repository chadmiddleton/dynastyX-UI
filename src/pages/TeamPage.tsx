import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

interface TeamParams {
    teamId: string
}

const TeamPage: React.FC = () => {
    // @ts-ignore
    const {teamId} = useParams<TeamParams>();
    const [teamName, setTeamName] = useState<string>('');
    const [players, setPlayers] = useState<string[]>([]);

    useEffect(() => {
        const apiUrl = `https://localhost:8080/teams/${teamId}/players`;
        const fetchedTeamName = `Team ${teamId}`;
        setTeamName(fetchedTeamName);

        // Fetch players
        axios.get(apiUrl).then((response) => {
            setPlayers(response.data);
        });
    }, [teamId]);

    return (
        <div>
            <h2>{teamName}</h2>
            <h3>Players:</h3>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
};

export default TeamPage;