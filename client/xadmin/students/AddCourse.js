import React from 'react';

class AddCourse extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      allCourses: null,
      courseToAdd: null,
    };
    this.setCourseId = this.setCourseId.bind(this);
  }
  componentWillMount() {
    this.loadCourses();
  }
  loadCourses() {
    $.ajax({
      url: '/api/v1/courses',
      method: 'GET'
    }).done((d) => this.setState({ allCourses: d }));
  }
  submitCourse(e) {
    e.preventDefault()
    const d = {
      courses: this.state.courseToAdd
    }
    $.ajax({
      url: `/editStudent/${this.props.uid}`,
      method: 'PUT',
      data: d
    }).done((success) => console.log('ADDED THE COURSE'));
  }
  setCourseId(e) {
    const id = e.target.value;
    this.setState({ courseToAdd: id });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitCourse}>
          <div className="form-group">
            <label>Select Course To Add</label>
            <select className="form-control" id="">
            {
              this.state.allCourses ? this.state.allCourses.map((item) => <option onChange={this.setCourseId} key={item._id} value={item._id}>{item.title}</option>) : null
            }
            </select>
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCourse;
