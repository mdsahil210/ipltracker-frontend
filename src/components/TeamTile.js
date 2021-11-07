import {React} from 'react';
import {Link} from 'react-router-dom';
import './TeamTile.scss';

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

export const TeamTile = ({teamName}) => {
    return (
        <Link to={`/teams/${teamName}`}>
        <div className="TeamTile">
            {teamName === "Mumbai Indians" && (
                <div className="teamLogos" >
                    <img src={MILOGO} alt="" />
                </div>
            )}
            {teamName === "Pune Warriors" && (
                <div className="teamLogos" >
                    <img src={PWLOGO} alt="" />
                </div>
            )}
            {teamName === "Sunrisers Hyderabad" && (
                <div className="teamLogos" >
                    <img src={SRHLOGO} alt="" />
                </div>
            )}
            {teamName === "Rajasthan Royals" && (
                <div className="teamLogos" >
                    <img src={RRLOGO} alt="" />
                </div>
            )}
            {teamName === "Kolkata Knight Riders" && (
                <div className="teamLogos" >
                    <img src={KKRLOGO} alt="" />
                </div>
            )}
            {teamName === "Royal Challengers Bangalore" && (
                <div className="teamLogos" >
                    <img src={RCBLOGO} alt="" />
                </div>
            )}
            {teamName === "Gujarat Lions" && (
                <div className="teamLogos" >
                    <img src={GLLOGO} alt="" />
                </div>
            )}
            {teamName === "Rising Pune Supergiants" && (
                <div className="teamLogos" >
                    <img src={RPSLOGO} alt="" />
                </div>
            )}
            {teamName === "Kochi Tuskers Kerala" && (
                <div className="teamLogos" >
                    <img src={KTLOGO} alt="" />
                </div>
            )}
            {teamName === "Delhi Capitals" && (
                <div className="teamLogos" >
                    <img src={DCLOGO} alt="" />
                </div>
            )}
            {teamName === "Kings XI Punjab" && (
                <div className="teamLogos" >
                    <img src={KXIPLOGO} alt="" />
                </div>
            )}
            {teamName === "Deccan Chargers" && (
                <div className="teamLogos" >
                    <img src={DCHLOGO} alt="" />
                </div>
            )}
            {teamName === "Chennai Super Kings" && (
                <div className="teamLogos" >
                    <img src={CSKLOGO} alt="" />
                </div>
            )}
            <div className="TeamName">
                {teamName}
            </div>
        </div>
        </Link>
    )
}