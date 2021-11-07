import { useEffect, useState } from 'react';
import { TeamTile } from '../components/TeamTile';
import {Link} from 'react-router-dom';
import './HomePage.scss';
import IPLlogo from '../teamLogos/ipl-logo.png';

export const HomePage = () => {

    const [teams,setTeams] = useState([]);

    useEffect(
        () => {
            const fetchAllTeams = async () => {
                const response = await fetch(`/team`);
                const data = await response.json();
                setTeams(data);
            }
            fetchAllTeams();
        }, []
    )

    return (
        <div className="HomePage">
            <div className="header-section">
                <Link to="/">
                    <div href="/" className="IPLlogo" >
                        <img src={IPLlogo} alt="" />
                    </div>
                    <h1 className="app-name">IPL Tracker</h1>
                </Link>
                <Link to={{ pathname: '/head-to-head', state: { teams: teams }}}>
                  <div className="fancy-button-head-to-head">
                    <button className="btn-hover color-1">Head-to-Head</button>
                  </div>
                </Link>
            </div>
            
            
            
            <div className="team-grid">
                {teams.map(team => <TeamTile key = {team.id} teamName = {team.teamName} />)}
            </div>
        </div>
        
    )
}
