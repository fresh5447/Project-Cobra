import React from 'react';
import ModuleCard from './ModuleCard';

const ModulesList = (props) => {
  const mods = props.modules.map((mod) => {
    return <ModuleCard key={mod._id} title={mod.title} id={mod._id} desc={mod.desc} checkpoints={mod.checkpoints} />;
  });

  return (
    <div>
      <div>
        <h3> Modules </h3>
      </div>
      <div className="modules-flex">
        { mods }
      </div>
    </div>
  );

};

export default ModulesList;
