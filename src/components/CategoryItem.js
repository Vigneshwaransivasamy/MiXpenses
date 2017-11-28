import React from 'react';


const onDeleteCategory = (id) => {

}

const CategoryItem = (props) => {
  console.log(props)
  return (
    <li onClick={props.onClick}>
      <div className="category-name">
      {props.data.name}
      </div>
      <div className="delete-field">
        <input type="button" title="Delete" className="delete-input" onClick={() => onDeleteCategory(props.data._id)} value=""/>
      </div>
    </li>
  )
}


export default CategoryItem;