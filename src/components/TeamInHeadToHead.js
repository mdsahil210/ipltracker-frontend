import {React} from 'react';
import './TeamTile.scss';
export const TeamInHeadToHead = ({teamName, onClick}) => {
    return (
        <div className="TeamTile">
            <button onClick={() => onClick(teamName)}>{teamName}</button>
        </div>
    )
}