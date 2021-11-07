import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from "../components/MatchDetailCard"
import { MatchSmallCard } from "../components/MatchSmallCard"
import { PieChart } from 'react-minimal-pie-chart';
import {Link} from 'react-router-dom';

import './TeamPage.scss';
import './HeadToHeadPage.scss';

import MILOGO from '../teamLogos/mumbai-indians.png';
import DCLOGO from '../teamLogos/Delhi-Capital-_Logo.png';
import CSKLOGO from '../teamLogos/csk-hd-logo-2020.png';
import KKRLOGO from '../teamLogos/KKR-Logo.png';
import KXIPLOGO from '../teamLogos/KXIP-Logo.png';
import RCBLOGO from '../teamLogos/RCB-png-logo-2020.png';
import RRLOGO from '../teamLogos/RR-Logo.png';
import SRHLOGO from '../teamLogos/SRH-Logo-Png-.png';
import DCHLOGO from '../teamLogos/Deccan-Chargers.png';
import GLLOGO from '../teamLogos/GL.png';
import KTLOGO from '../teamLogos/kochi-tuskers.png';
import PWLOGO from '../teamLogos/pune-warriors.png';
import RPSLOGO from '../teamLogos/rps.png';

export const TeamPage = () => {

    const [team,setTeam] = useState({matches:[]});
    const {teamName} = useParams();

    useEffect(
        () => {
            const fetchTeam = async () => {
                const response = await fetch(`/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
            }
            fetchTeam();
        }, [teamName]
    )
    //2nd parameter [] is a dependency list which tells
    //when to execute useEffect. By passing [], it means
    //it will be execute only once at first load of page
    
    if(!team || !team.teamName){
        return <h1>Team Not Found</h1>
    }

    const defaultLabelStyle = {
        fontSize: '10px',
        fontFamily: 'sans-serif',
        fill: '#FFFFFF',
    };

    return (
        <div className="TeamPage">
                <Link to="/">
                  <div className="fancy-button-dashboard">
                    <button className="btn-hover color-1">Dashboard</button>
                  </div>
                </Link>
            <div className="team-name-section">
                {team.teamName === "Mumbai Indians" && (
                    <div className="TeamPageLogo" >
                        <img src={MILOGO} alt="" />
                    </div>
                )}
                {team.teamName === "Pune Warriors" && (
                    <div className="TeamPageLogo" >
                        <img src={PWLOGO} alt="" />
                    </div>
                )}
                {team.teamName === "Sunrisers Hyderabad" && (
                    <div className="TeamPageLogo" >
                        <img src={SRHLOGO} alt="" />
                    </div>
                )}
                {team.teamName === "Rajasthan Royals" && (
                    <div className="TeamPageLogo" >
                        <img src={RRLOGO} alt="" />
                    </div>
                )}
                {team.teamName === "Kolkata Knight Riders" && (
                    <div className="TeamPageLogo" >
                        <img src={KKRLOGO} alt="" />
                    </div>
                )}
                {team.teamName === "Royal Challengers Bangalore" && (
                    <div className="TeamPageLogo" >
                        <img src={RCBLOGO} alt="" />
                    </div>
                )}
                {team.teamName === "Gujarat Lions" && (
                    <div className="TeamPageLogo" >
                        <img src={GLLOGO} alt="" />
                    </div>
                )}
                {team.teamName === "Rising Pune Supergiants" && (
                    <div className="TeamPageLogo" >
                        <img src={RPSLOGO} alt="" />
                    </div>
                )}
                {team.teamName === "Kochi Tuskers Kerala" && (
                    <div className="TeamPageLogo" >
                        <img src={KTLOGO} alt="" />
                    </div>
                )}
                {team.teamName === "Delhi Capitals" && (
                    <div className="TeamPageLogo" >
                        <img src={DCLOGO} alt="" />
                    </div>
                )}
                {team.teamName === "Kings XI Punjab" && (
                    <div className="TeamPageLogo" >
                        <img src={KXIPLOGO} alt="" />
                    </div>
                )}
                {team.teamName === "Deccan Chargers" && (
                    <div className="TeamPageLogo" >
                        <img src={DCHLOGO} alt="" />
                    </div>
                )}
                {team.teamName === "Chennai Super Kings" && (
                    <div className="TeamPageLogo" >
                        <img src={CSKLOGO} alt="" />
                    </div>
                )}
                <h1 className="team-name">{team.teamName}</h1>
            </div>
            <div className="win-loss-section">
                <h3 style={{padding: "10px"}}>Wins / Losses</h3>
                <PieChart
                    data={[
                        { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#a34d5d' },
                        { title: 'Wins', value: team.totalWins , color: '#4da375' },
                    ]}
                    label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
                    labelStyle={{
                        ...defaultLabelStyle,
                    }}
                />
            </div>
            <div className="match-detail-section">
                <h3>Latest Matches</h3>
                <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
            </div>
            {team.matches.slice(1).map(match => <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />)}
            <div className="more-link">
                <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More ></Link>
            </div>
        </div>
    )
}
