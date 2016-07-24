import React from 'react';
import ModulesCard from './ModulesCard';

const ModulesList = (props) => {
  const mods = props.modules.map((mod) => {
    return <ModulesCard key={mod._id} title={mod.title} id={mod._id} desc={mod.desc} checkpoints={mod.checkpoints} />;
  });

  return (
    <div className="container modulesList-container">
      <div className="row">
        <div className="card markdown-card all-modules-card">
          <div className="card-block modules-card-body">
            <h4 className="card-title">FullStack Web Developement </h4>
          </div>
          <div className="card-block modules-card-body">
            <p>0/2 modules complete </p>
          </div>
        </div>
      </div>

      <div className="modules-flex">
        { mods }
      </div>
    </div>
  );

};

export default ModulesList;
