import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} =
    matchCardDetails
  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchClassName = getMatchStatusClassName(matchStatus)

  return (
    <li className="matchcard-list">
      <img
        className="matchcard-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="matchcard-competingTeam">{competingTeam}</p>
      <p className="matchcard-result">{result}</p>
      <p className={matchClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
