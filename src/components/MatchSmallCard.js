import {Link} from 'react-router-dom';
import './MatchSmallCard.scss';
export const MatchSmallCard = ({teamName, match}) => {
    if(!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const isMatchWon = teamName === match.matchWinner;
    return (
        <div className={isMatchWon ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
            <span className="vs">vs</span>
            <h2><Link to={`/teams/${otherTeam}`}>{otherTeam}</Link></h2>
            <p className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>
    )
}