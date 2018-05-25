import React from 'react';

const Pet = (props) => {
  return (
    <div>
      <section className="animal">
        <header role="banner">
          <p>{props.name}</p>
          <img src={props.imageURL} alt={props.imageDescription} />
        </header>
        <main role="main">
          <dl className="main-info">
            <dt>Sex: </dt>
            <dd>{props.sex}</dd>
            <dt>Age: </dt>
            <dd>{props.age}</dd>
            <dt>Breed: </dt>
            <dd>{props.breed}</dd>
            <dt>Story: </dt>
            <dd>{props.story}</dd>
          </dl>
          <button className="adopt" onClick={() => props.onAdoptPet()}>Adopt</button>
        </main>
      </section>
    </div>
  );
};

export default Pet;