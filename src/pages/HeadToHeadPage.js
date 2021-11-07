import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import '../components/TeamTile.scss';

import './HomePage.scss';

import {Link} from 'react-router-dom';

import './HeadToHeadPage.scss';

import { H2HTeamTile } from '../components/H2HTeamTile';

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

export const HeadToHeadPage = () => {

    const location = useLocation();
    const { teams } = location.state;

    const initialBooleanTeam = new Array(teams.length).fill(false);

    const [selectedTeams, setSelectedTeams] = useState(initialBooleanTeam);

    const [headToheadMatches, setHeadToHeadMatches] = useState([]);

    const [selectedTeamNames, setSelectedTeamNames] = useState({
        firstSelectedTeam : "",
        secondSelectedTeam: ""
    });

    const [winnersCount, setWinnersCount] = useState({
        firstTeamWinCount: 0,
        secondTeamWinCount: 0
    })

    let selectedTeamsCount = selectedTeams.filter(Boolean).length;

    const refreshPage = ()=>{
        setSelectedTeams(initialBooleanTeam);
     }

    useEffect(
        () => {
            for(let i = 0;i<selectedTeams.length;i++){
                if(selectedTeamsCount === 1 && selectedTeams[i]===true){
                    setSelectedTeamNames({ ...selectedTeamNames, firstSelectedTeam: teams[i].teamName});
                    break;
                }
                else if(selectedTeamsCount === 2 && selectedTeams[i]===true && teams[i].teamName !== selectedTeamNames.firstSelectedTeam && selectedTeamNames.secondSelectedTeam === ""){
                    setSelectedTeamNames({ ...selectedTeamNames, secondSelectedTeam: teams[i].teamName});
                    break;
                }
                else if(selectedTeamsCount === 0) {
                    setSelectedTeamNames({
                        firstSelectedTeam : "",
                        secondSelectedTeam: ""
                    })
                }
            }
            if(headToheadMatches.length !== 0) {
                let firstTeamsWins = 0, secondTeamsWin = 0;
                headToheadMatches.forEach((match) => {
                    if(match.matchWinner === selectedTeamNames.firstSelectedTeam) {
                        firstTeamsWins++;
                    }
                    else if(match.matchWinner === selectedTeamNames.secondSelectedTeam){
                        secondTeamsWin++;
                    }
                });

                setWinnersCount({ ...winnersCount, firstTeamWinCount: firstTeamsWins, secondTeamWinCount: secondTeamsWin});
            }
            if(selectedTeamsCount===2 && selectedTeamNames.firstSelectedTeam !== "" && selectedTeamNames.secondSelectedTeam !== "" && headToheadMatches.length === 0){ 

                const fetchHeadToHeadMatches = async () => {
                    const response = await fetch(`http://localhost:8080/head-to-head?team=${selectedTeamNames.firstSelectedTeam},${selectedTeamNames.secondSelectedTeam}`);
                    const data = await response.json();
                    setHeadToHeadMatches(data);
                }
                fetchHeadToHeadMatches();
            }
            else if(selectedTeamsCount === 0 && headToheadMatches.length !== 0){
                setHeadToHeadMatches([]);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [selectedTeams,selectedTeamNames.secondSelectedTeam,headToheadMatches]
    )
    
    

    const handleOnChange = (position) => {
        const updatedSelectedTeams = selectedTeams.map((team, index) =>
            index === position ? !team : team
        );

        setSelectedTeams(updatedSelectedTeams);
    };
        
        return (
            <div className="HeadToHeadPage">
                <div className="H2H-Header">
                    <h1 className="Header-Value">Head to Head</h1>
                </div>
                <Link to="/">
                  <div className="fancy-button-dashboard">
                    <button className="btn-hover color-1">Dashboard</button>
                  </div>
                </Link>
                {(selectedTeamsCount ===2) && 
                        <div className="fancy-button-head-to-head">
                            <button onClick={refreshPage} className="btn-hover color-1">Change Teams</button>
                        </div>
                }
                <div className="H2H-selected-teams">
                    <div className="H2HSelectedTeamTile">
                        {selectedTeamNames.firstSelectedTeam === "Mumbai Indians" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={MILOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.firstSelectedTeam === "Pune Warriors" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={PWLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.firstSelectedTeam === "Sunrisers Hyderabad" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={SRHLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.firstSelectedTeam === "Rajasthan Royals" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={RRLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.firstSelectedTeam === "Kolkata Knight Riders" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={KKRLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.firstSelectedTeam === "Royal Challengers Bangalore" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={RCBLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.firstSelectedTeam === "Gujarat Lions" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={GLLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.firstSelectedTeam === "Rising Pune Supergiants" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={RPSLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.firstSelectedTeam === "Kochi Tuskers Kerala" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={KTLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.firstSelectedTeam === "Delhi Capitals" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={DCLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.firstSelectedTeam === "Kings XI Punjab" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={KXIPLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.firstSelectedTeam === "Deccan Chargers" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={DCHLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.firstSelectedTeam === "Chennai Super Kings" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={CSKLOGO} alt="" />
                            </div>
                        )}
                    
                    </div>
                    <div className="dashed"></div>
                    <div className="v"> V </div>
                    <div className="dashed"></div>
                    <div className="H2HSelectedTeamTile">
                        {selectedTeamNames.secondSelectedTeam === "Mumbai Indians" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={MILOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.secondSelectedTeam === "Pune Warriors" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={PWLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.secondSelectedTeam === "Sunrisers Hyderabad" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={SRHLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.secondSelectedTeam === "Rajasthan Royals" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={RRLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.secondSelectedTeam === "Kolkata Knight Riders" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={KKRLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.secondSelectedTeam === "Royal Challengers Bangalore" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={RCBLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.secondSelectedTeam === "Gujarat Lions" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={GLLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.secondSelectedTeam === "Rising Pune Supergiants" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={RPSLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.secondSelectedTeam === "Kochi Tuskers Kerala" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={KTLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.secondSelectedTeam === "Delhi Capitals" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={DCLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.secondSelectedTeam === "Kings XI Punjab" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={KXIPLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.secondSelectedTeam === "Deccan Chargers" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={DCHLOGO} alt="" />
                            </div>
                        )}
                        {selectedTeamNames.secondSelectedTeam === "Chennai Super Kings" && (
                            <div className="H2HselectedTeamLogos" >
                                <img src={CSKLOGO} alt="" />
                            </div>
                        )}
                    </div>
                </div>
                <hr style={{margin: "20px" }}/>
                {(selectedTeamsCount!==2) ? (
                        <div>
                        <h3 style={{textAlign: "center"}}>Select teams</h3>
                        <div className="H2H-team-grid">
                            {teams.map((team,index) => <H2HTeamTile key = {team.id} index = {index} teamName = {team.teamName} selectedTeams = {selectedTeams} handleOnChange={handleOnChange}/>)}
                        </div>
                        </div>
                    )
                    : 
                    (
                        
                        <div className="head-to-head-results">
                            <h3 style={{textAlign: "center", margin: "10px"}}>Played: {headToheadMatches.length}</h3>
                            {headToheadMatches.length >0 && (
                                <div className="stacked-bar-graph">
                                    {
                                        winnersCount.firstTeamWinCount > 0 && (
                                            <span style={{width:`${ (winnersCount.firstTeamWinCount / headToheadMatches.length).toFixed(2) * 100}%`}} className="bar-1">{winnersCount.firstTeamWinCount}</span>
                                         )
                                    }
                                    {
                                        winnersCount.secondTeamWinCount > 0 && (
                                            <span style={{width:`${ (winnersCount.secondTeamWinCount / headToheadMatches.length).toFixed(2) * 100}%`}} className="bar-3">{winnersCount.secondTeamWinCount}</span>
                                        )
                                    }
                                    
                                </div>
                            )}
                            
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Winner</th>
                                            <th>Won By</th>
                                            <th>Venue</th>
                                            <th>Player of the Match</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {headToheadMatches.map((match) => (
                                            <tr key={match.id}>
                                                <td>{match.date}</td>
                                                <td>{match.matchWinner}</td>
                                                <td>{match.resultMargin} {match.result}</td>
                                                <td>{match.venue}, {match.city}</td>
                                                <td>{match.playerOfMatch}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )

                }
                
            </div>
            
        )

}
