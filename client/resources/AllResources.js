import React from 'react';
import ResourceCard from './ResourceCard';

const AllResources = (props) => {
  const resources = props.resources.map((item) => {
    return (<ResourceCard
      key={item._id}
      title={item.title}
      desc={item.desc}
      link={item.link}
    />);
  });

  return (
    <div>
      <div>
        <h3> Resources </h3>
      </div>
      <div className="modules-flex">
        { resources }
      </div>
    </div>
  );

};

AllResources.displayName = AllResources;
export default AllResources;
