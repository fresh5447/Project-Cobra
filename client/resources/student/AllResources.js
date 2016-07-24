import React from 'react';
import ResourceCard from './ResourceCard';

const AllResources = (props) => {
  const resources = props.resources
  .map((item) => {
    window.t = item.categories;
    return (<ResourceCard
      deleteResource={props.deleteResource}
      key={item._id}
      title={item.title}
      desc={item.desc}
      link={item.link}
      categories={item.categories}
      id={item._id}
      toggleFav={props.toggleFav}
      fav={item.fav}
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

AllResources.propTypes = {
  deleteResource: React.PropTypes.func.isRequired,
  toggleFav: React.PropTypes.func.isRequired,
  resources: React.PropTypes.array.isRequired
};

export default AllResources;
