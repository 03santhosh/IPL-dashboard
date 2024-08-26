import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {id, name, teamImageUrl} = teamDetails
    return (
      <li className="team-list">
        <Link className="link" to={`/team-matches/${id}`}>
          <div className="teams-card">
            <img className="team-logo" src={teamImageUrl} alt={name} />
            <p className="team-name">{name}</p>
          </div>
        </Link>
      </li>
    )
  }
}

export default TeamCard
