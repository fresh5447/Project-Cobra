import React from 'react';
import ResourceCard from './FavResourceCard';

const FavoriteResources = (props) => {
  const resources = props.resources
  .map((item) => {
    window.t = item.categories;
    return (<ResourceCard
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

FavoriteResources.displayName = FavoriteResources;
export default FavoriteResources;
