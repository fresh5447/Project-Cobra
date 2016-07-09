import React from 'react';
import ModuleCard from './ModuleCard';

const ModulesList = (props) => {
  const mods = props.modules.map((mod) => {
    return <ModuleCard key={mod._id} title={mod.title} id={mod._id} desc={mod.desc} checkpoints={mod.checkpoints} />;
  });

  return (
    <div>
      { mods }
    </div>
  );

};

export default ModulesList;
