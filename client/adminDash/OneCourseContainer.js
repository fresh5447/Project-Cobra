import React from 'react';
import PostModuleData from '../modules/PostModuleData';
import NavLink from '../widgets/NavLink';

class OneCourseCountainer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      course: null
    };
  }

  componentWillReceiveProps() {
    this.loadCourse();
  }

  componentWillUnmount() {
    this.setState({ course: null })
  }


  loadCourse() {
    $.ajax({
      url: '/api/v1/courses/' + this.props.params.id,
      method: 'GET',
    }).done((data) => {
      this.setState({ course: data });
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="card profile-card">
            <div className="card-block lg-card-block">
              <h4 className="card-title">
              {
                this.state.course ? this.state.course.title : "loading..."
              }
              </h4>

            </div>
          </div>
          <div>
          <h4> All Modules </h4>
            <ul>
          {
            this.state.course && this.state.course.modules && this.state.course.modules.length > 0 ? this.state.course.modules.map((item) => {
              return  <li key={item._id}><NavLink to={'/admin/dashboard/view/' + this.props.params.id + '/module/' + item._id}>{item.title}</NavLink></li>
            }) : <li key='12'>"no modules for this course yet..." </li>
          }
          <div className="collapse" id="collapseExample">
            <div className="card card-block">
              <PostModuleData course={this.props.params.id}/>
            </div>
          </div>

          </ul>
          </div>
          { this.props.children || <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"> Add Module</button>}
        </div>
      </div>
    )
  }

}
OneCourseCountainer.displayName = OneCourseCountainer;
export default OneCourseCountainer;
