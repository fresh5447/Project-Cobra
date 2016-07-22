import React from 'react';
import ResourceCard from './ResourceCard';

const AllResources = (props) => {
  const resources = props.resources.map((item) => {
    console.log(item);
    return (<ResourceCard
      deleteResource={props.deleteResource}
      key={item._id}
      title={item.title}
      desc={item.desc}
      link={item.link}
      categories={item.categories}
      id={item._id}
    />);
  });

  return (
    <div>
      <div className="modules-flex">
        { resources }
      </div>
    </div>
  );

};

AllResources.displayName = AllResources;
export default AllResources;
