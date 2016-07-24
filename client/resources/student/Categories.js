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
      deleteResource={props.deleteResource}
      key={item._id}
      title={item.title}
      desc={item.desc}
      link={item.link}
      categories={item.categories}
      id={item._id}
      toggleFav={props.toggleFav}
      fav={item.fav}
      setOneResource={props.setOneResource}
      internal={item.internal}
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

Categories.propTypes = {
  deleteResource: React.PropTypes.func.isRequired,
  catFilter: React.PropTypes.func.isRequired,
  toggleFav: React.PropTypes.func.isRequired,
  resources: React.PropTypes.array.isRequired
};

export default Categories;
