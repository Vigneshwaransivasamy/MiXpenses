import React from 'react';

import CategoryItem from './CategoryItem.js';

const CategoryList = ({items, handleDeleteList, handleChange})=>{
  return (
    <ul style={{padding: 0, margin: 0, marginBottom: 15}}>
      {items.map((list,index) => {
        console.log(index);
        return (
          <CategoryItem 
            key={index} 
            data={list}
            onDeleteList={handleDeleteList}
            handleChange={handleChange} />
        );
      })}
    </ul>
  )
}

export default CategoryList;