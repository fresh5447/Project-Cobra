import React from 'react';
import ResourceCard from './ResourceCard';

const AllResources = (props) => {
  const resources = props.resources
  .map((item) => {
    return (<ResourceCard
      deleteResource={props.deleteResource}
      key={item._id}
      title={item.title}
      link={item.link}
      categories={item.categories}
      id={item._id}
      toggleFav={props.toggleFav}
      fav={item.fav}
      internal={item.internal}
      publish={item.publish}
      setOneResource={props.setOneResource}
      role={props.role}
      video={item.video}
      kind={item.kind}
      toggleComp={props.toggleComp}
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

AllResources.displayName = 'AmIAllResources';


export default AllResources;
