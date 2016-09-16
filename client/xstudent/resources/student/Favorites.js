import React from 'react';
import ResourceCard from './ResourceCard';

const Favorites = (props) => {
  const resources = props.resources
  .filter((thing) => thing.fav)
  .map((item) => {
    console.log(item.internal)
    return (<ResourceCard
      key={item._id}
      title={item.title}
      link={item.link}
      categories={item.categories}
      id={item._id}
      toggleFav={props.toggleFav}
      fav={item.fav}
      setOneResource={props.setOneResource}
      role={"student"}
      kind={item.kind}
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

Favorites.displayName = Favorites;


export default Favorites;
