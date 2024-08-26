import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latestmatch-container">
      <div className="matchdetails_one">
        <div>
          <p className="competingteam-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue-and-result">{venue}</p>
          <p className="venue-and-result">{result}</p>
        </div>
        <img
          className="competingteam-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr />
      <div className="matchdetails_two">
        <p className="innings">First Innings</p>
        <p className="match">{firstInnings}</p>
        <p className="innings">Second Innings</p>
        <p className="match">{secondInnings}</p>
        <p className="innings">Man Of The Match</p>
        <p className="match">{manOfTheMatch}</p>
        <p className="innings">Umpires</p>
        <p className="match">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
