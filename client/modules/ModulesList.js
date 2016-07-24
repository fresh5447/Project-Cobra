import React from 'react';
import ModulesCard from './ModulesCard';
import NavLink from '../widgets/NavLink';

const ModulesList = (props) => {
  window.m = props.modules;
  let coms = 0;
  const mods = props.modules.map((mod) => {
    if (mod.complete === true) {
      coms += 1;
    }
    return <ModulesCard key={mod._id} complete={mod.complete} title={mod.title} id={mod._id} desc={mod.desc} checkpoints={mod.checkpoints} />;
  });

  const cats = props.modules.map((mod) => {
    return <li><NavLink to={'/modules/' + mod._id } key={mod._id} complete={mod.complete} title={mod.title} id={mod._id}> {mod.title} </NavLink>{!mod.complete ? <i className="fa fa-check-square-o pull-right"></i> : null}</li>
  });

  return (
    <div className="container">
      <div className="row">
      <div>
        <h4><strong> modules</strong> </h4>
        <p> {coms}/{props.modules.length} <i className="fa fa-check-square-o"></i></p>        
      </div>

      </div>

      <div className="col-xs-2">

        <div className="cats-container">

          <ul>


          <i className="fa fa-filter"><em></em></i>
            { cats }
          </ul>
        </div>
      </div>
      <div className="col-xs-10">
      <div className="modules-flex">
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
