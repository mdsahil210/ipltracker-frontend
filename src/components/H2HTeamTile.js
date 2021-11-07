import {React} from 'react';
import './H2HTeamTile.scss';

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

export const H2HTeamTile = ({index, teamName, selectedTeams,handleOnChange}) => {
    return (
        <div className="H2HTeamTile">
            <div id="checkboxes">
                <input
                    type="checkbox"
                    id={index}
                    name={teamName}
                    value={teamName}
                    checked={selectedTeams[index]}
                    onChange={() => handleOnChange(index)}
                />
                <label htmlFor={index} className="H2Hcheckbox">
                    {teamName === "Mumbai Indians" && (
                        <div className="H2HteamLogos" >
                            <img src={MILOGO} alt="" />
                        </div>
                    )}
                    {teamName === "Pune Warriors" && (
                        <div className="H2HteamLogos" >
                            <img src={PWLOGO} alt="" />
                        </div>
                    )}
                    {teamName === "Sunrisers Hyderabad" && (
                        <div className="H2HteamLogos" >
                            <img src={SRHLOGO} alt="" />
                        </div>
                    )}
                    {teamName === "Rajasthan Royals" && (
                        <div className="H2HteamLogos" >
                            <img src={RRLOGO} alt="" />
                        </div>
                    )}
                    {teamName === "Kolkata Knight Riders" && (
                        <div className="H2HteamLogos" >
                            <img src={KKRLOGO} alt="" />
                        </div>
                    )}
                    {teamName === "Royal Challengers Bangalore" && (
                        <div className="H2HteamLogos" >
                            <img src={RCBLOGO} alt="" />
                        </div>
                    )}
                    {teamName === "Gujarat Lions" && (
                        <div className="H2HteamLogos" >
                            <img src={GLLOGO} alt="" />
                        </div>
                    )}
                    {teamName === "Rising Pune Supergiants" && (
                        <div className="H2HteamLogos" >
                            <img src={RPSLOGO} alt="" />
                        </div>
                    )}
                    {teamName === "Kochi Tuskers Kerala" && (
                        <div className="H2HteamLogos" >
                            <img src={KTLOGO} alt="" />
                        </div>
                    )}
                    {teamName === "Delhi Capitals" && (
                        <div className="H2HteamLogos" >
                            <img src={DCLOGO} alt="" />
                        </div>
                    )}
                    {teamName === "Kings XI Punjab" && (
                        <div className="H2HteamLogos" >
                            <img src={KXIPLOGO} alt="" />
                        </div>
                    )}
                    {teamName === "Deccan Chargers" && (
                        <div className="H2HteamLogos" >
                            <img src={DCHLOGO} alt="" />
                        </div>
                    )}
                    {teamName === "Chennai Super Kings" && (
                        <div className="H2HteamLogos" >
                            <img src={CSKLOGO} alt="" />
                        </div>
                    )}
                    <div className="TeamName">
                        {teamName}
                    </div>
                </label>
            </div>
            
        </div>
    )
}