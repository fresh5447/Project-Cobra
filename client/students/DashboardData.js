import React from 'react'
import StudentProgressBar from '../modules/StudentProgressBar'
import AllModulesCard from './AllModulesCard'

AllModulesCard.displayName = 'AllModulesCard';
StudentProgressBar.displayName = 'StudentProgressBar';


export default React.createClass({
  getInitialState() {
    return {
      modules: null,
      user: null,
      activeProject: null
    }
  },
  contextTypes: {
    getUser: React.PropTypes.func.isRequired,
  },
  setActiveModule(id) {
    console.log(id)
    this.setState({ activeProject: id })
  },
  loadModulesFromServer() {
    $.ajax({
      url: '/api/v1/modules',
      method: 'GET'
    }).done((data) => this.setState({ modules: data }))
  },
  componentWillMount() {
    this.loadModulesFromServer();
    this.context.getUser((data) => this.setState({ user: data }))
  },
  render() {

    if(this.state.modules){
      const modulesArr = this.state.modules.map((item) => {
        return <AllModulesCard key={item._id} setActiveModule={ self.setActiveModule } id={item._id} title={ item.title } desc={item.desc} checkpoints={item.checkpoints} hours={item.hours} />
      })
      return (
        <div>
          <StudentProgressBar/>
          <div className="container student-card-container">
          { this.state.modules ? modulesArr : null }
          </div>
        </div>
        )
    } else {
      return (<div> </div>)
    }
  }
})
