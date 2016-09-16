import React from 'react';
import ResourceCard from './ResourceCard';

function filterViaCategory(arr, category) {
  return arr.filter((obj) => {
    for (var i = 0, length = obj.categories.length; i < length; i++) {
      if (obj.categories[i].name === category) {
        return true;
      }
    }
    return false;
  });
}


const Categories = (props) => {
  const resources = filterViaCategory(props.resources, props.catFilter)
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

Categories.displayName = Categories;


export default Categories;
