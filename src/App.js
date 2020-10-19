import React from 'react';

function Food ({name}){
return <h3>I like {name}</h3>;
}

const foodLike = [{name:"mouse"},{name:"notebook"},{name:"phone"}]

function App() {
  return (
    <div>
      {foodLike.map(dish => <Food name={dish.name} /> )}
    </div>
    );
}

export default App;
