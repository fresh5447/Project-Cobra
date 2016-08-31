import React from 'react';
import ModulesNav from './ModulesNav';

class ModulesContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modules: null
    };
    this.loadModules = this.loadModules.bind(this);
  }

  componentWillMount() {
    this.loadModules();
  }

  componentWillReceiveProps() {
    this.loadModules();
  }



  loadModules() {
    $.ajax({
      url: '/api/v1/modules',
      method: 'GET',
    }).done((data) => {
      this.setState({ modules: data });
    });
  }

  render() {
    return (
      <div>
      <div className="page-header">
        <h6 className="">Admin Dashboard</h6>
      </div>
      <div className="container">

        <div className="row">
          <div className="col-xs-offset-3 col-xs-6">
          {
            this.state.modules ? <ModulesNav modules={this.state.modules} /> : null
          }
          </div>
        </div>
          <div className="col-xs-12">
          {
            this.props.children || <h2> select course </h2>
          }
          </div>

      </div>
      </div>
    )
  }
}

export default ModulesContainer;
