import React from 'react';
import ModulesCard from './ModulesCard';
import NavLink from '../../widgets/NavLink';

const ModulesList = (props) => {
  window.m = props.modules;
  let coms = 0;
  const mods = props.modules.sort(function(a,b) {return (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0);} ).map((mod) => {
    if (mod.complete === true) {
      coms += 1;
    }
    return <ModulesCard live={mod.live ? mod.live : false} key={mod._id} complete={mod.complete} title={mod.title} id={mod._id} desc={mod.desc} checkpoints={mod.checkpoints} />;
  })

  const cats = props.modules.map((mod) => {
    return <li className="list-group-item"><NavLink to={'/modules/' + mod._id } key={mod._id} complete={mod.complete} title={mod.title} id={mod._id}> {mod.title} </NavLink>{mod.complete ? <i className="fa fa-check-square-o pull-right"></i> : null}</li>
  });

  return (
    <div>
      <div className="page-header">
          <h5 className="col-xs-6"><strong> {props.course} </strong> </h5>
          <h6 className="col-xs-4">{coms}/{props.modules.length} <em>modules complete</em></h6>
      </div>
      <div className="container mods-container">

        <div className="container modules-flex">
          { mods }
        </div>


      </div>
    </div>
  );

};

ModulesList.propTypes = {
  modules: React.PropTypes.array.isRequired
};

export default ModulesList;
