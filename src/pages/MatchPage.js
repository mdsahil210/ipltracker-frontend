import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from "../components/MatchDetailCard"
import { YearSelector } from '../components/YearSelector';
import './MatchPage.scss'
import './HomePage.scss'

export const MatchPage = () => {
    
    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();
    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`/team/${teamName}/matches?year=${year}`);
                const data = await response.json();
                setMatches(data);
            }
            fetchMatches();
        }, [teamName,year]
    );


    return (
        <div className="MatchPage">
            <div className = "year-selector">
                <h3>Select Year</h3>
                <YearSelector teamName={teamName}/>
            </div>
            <div>
                <h1 className="page-heading">{teamName} matches in {year}</h1>
                <Link to="/">
                  <div className="fancy-button-dashboard-match">
                    <button className="btn-hover color-1">Dashboard</button>
                  </div>
                </Link>
                {matches.length === 0 && (
                    <div className="No-Matches-Played">No matches played by {teamName} in {year}</div>
                )
                }
                {
                    matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)
                }
            </div>
            
        </div>
    )
}
