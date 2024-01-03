import React from 'react';
import { Link } from 'react-router-dom';

interface Team {
    id: number;
    name: string;
    owner: string;
}

const teams: Team[] = [
    { id: 1, name: 'Team 1', owner: 'Owner 1'},
    { id: 2, name: 'Team 2', owner: 'Owner 2'},
    { id: 3, name: 'Team 3', owner: 'Owner 3'},
    { id: 4, name: 'Team 4', owner: 'Owner 4'},
    { id: 7, name: 'Team 7', owner: 'Owner 7'},
    { id: 10, name: 'Team 10', owner: 'Owner 10'},
    { id: 5, name: 'Team 5', owner: 'Owner 5'},
    { id: 8, name: 'Team 8', owner: 'Owner 8'},
    { id: 11, name: 'Team 11', owner: 'Owner 11'},
    { id: 6, name: 'Team 6', owner: 'Owner 6'},
    { id: 9, name: 'Team 9', owner: 'Owner 9'},
    { id: 12, name: 'Team 12', owner: 'Owner 12'},
];

const LeaguePage: React.FC = () => {
    return (
        <div>
            <h2>Fantasy Football League</h2>
            <table>
                <thead>
                <tr>
                    <th>Team</th>
                    <th>Owner</th>
                </tr>
                </thead>
                <tbody>
                {teams.map((team) => (
                    <tr key={team.id}>
                        <td>
                            <Link to={`/team/${team.id}`}>{team.name}</Link>
                        </td>
                        <td>{team.owner}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaguePage;