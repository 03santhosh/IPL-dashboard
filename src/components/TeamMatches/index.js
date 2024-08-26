import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {matchList: [], isLoading: true}

  componentDidMount() {
    this.getSpecifiedMatchDetails()
  }

  updatedData = datas => ({
    umpires: datas.umpires,
    result: datas.result,
    manOfTheMatch: datas.man_of_the_match,
    id: datas.id,
    date: datas.date,
    venue: datas.venue,
    competingTeam: datas.competing_team,
    competingTeamLogo: datas.competing_team_logo,
    firstInnings: datas.first_innings,
    secondInnings: datas.second_innings,
    matchStatus: datas.match_status,
  })

  getSpecifiedMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatches: this.updatedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(each => this.updatedData(each)),
    }

    this.setState({matchList: formatedData, isLoading: false})
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'pbks'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  loader = () => (
    <div className="loader" >
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  teamMatches = () => {
    const {matchList} = this.state
    const {teamBannerUrl, latestMatches, recentMatches} = matchList
    return (
      <div>
        <img className="team-banner" alt="team banner" src={teamBannerUrl} />
        <h1 className="latestmatches-heading">Latest Matches</h1>
        <LatestMatch latestMatchDetails={latestMatches} />
        <ul className="recentmatches-ul-list">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} matchCardDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const className = `team-matches-container ${this.getRouteClassName()}`
    return (
      <div className={className}>
        {isLoading ? this.loader() : this.teamMatches()}
      </div>
    )
  }
}

export default TeamMatches
