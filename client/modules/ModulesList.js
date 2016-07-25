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
    return <li className="list-group-item"><NavLink to={'/modules/' + mod._id } key={mod._id} complete={mod.complete} title={mod.title} id={mod._id}> {mod.title} </NavLink>{mod.complete ? <i className="fa fa-check-square-o pull-right"></i> : null}</li>
  });

  return (
    <div className="container">
      <div className="row">
      <div className="center-it">
        <h4><strong> modules</strong> </h4>
      </div>

      </div>



        <div className="container tags-container">
          <ul className="list-group tags-group">
            <li><i className="fa fa-check-square-o"> {coms}/{props.modules.length} </i></li>
              { cats }
          </ul>
        </div>

      <div className="container col-xs-12 col-xs-offset-1 modules-flex">
        { mods }
      </div>


    </div>
  );

};

ModulesList.propTypes = {
  modules: React.PropTypes.array.isRequired
};

export default ModulesList;
