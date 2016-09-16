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

const FilteredResources = (props) => {
  const resources = filterViaCategory(props.resources, props.activeFilter)
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
      makeFave={props.makeFave}
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

FilteredResources.displayName = FilteredResources;
export default FilteredResources;
