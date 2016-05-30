import React from 'react'
import StudentProgressBar from './modules/StudentProgressBar'
import StudentCard from './DashboardCard'

export default React.createClass({
  render() {
    return (
      <div>
      <StudentProgressBar/>
      <div className="container student-card-container">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </div>
      </div>
      )
  }
})
