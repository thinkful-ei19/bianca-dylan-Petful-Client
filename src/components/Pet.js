import React from 'react';

const Pet = (props) => {
  return (
    <div>
      <section className="animal">
        <header role="banner">
          <p>{props.information.name}</p>
          <img src={props.information.imageURL} alt={props.information.imageDescription} />
        </header>
        <main role="main">
          <dl className="main-info">
            <dt>Sex: </dt>
            <dd>{props.information.sex}</dd>
            <dt>Age: </dt>
            <dd>{props.information.age}</dd>
            <dt>Breed: </dt>
            <dd>{props.information.breed}</dd>
            <dt>Story: </dt>
            <dd>{props.information.story}</dd>
          </dl>
          <button className="adopt" onClick={props.onAdoptPet}>Adopt</button>
        </main>
      </section>
    </div>
  );
};

export default Pet;