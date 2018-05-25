import React from 'react';
import Pet from './components/Pet';

const Dashboard = (props) => {

  function onAdoptPet() {
    console.log('adopt the hell out of that pet');
  }

  return (
    <div>
      <Pet information={props.catToAdopt} onAdoptPet={onAdoptPet} />
      <Pet information={props.dogToAdopt} onAdoptPet={onAdoptPet} />
    </div>
  );
};

export default Dashboard;