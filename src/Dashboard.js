import React from 'react';

const Dashboard = (props) => {
  return (
    <div>
      <section className="catToAdopt">
        <header role="banner">
          <p>{props.catToAdopt.name}</p>
          <img src={props.catToAdopt.imageURL} alt={props.catToAdopt.imageDescription} />
        </header>
        <main role="main">
          <dl className="info">
            <dt>Sex: </dt>
            <dd>{props.catToAdopt.sex}</dd>
            <dt>Age: </dt>
            <dd>{props.catToAdopt.age}</dd>
            <dt>Breed: </dt>
            <dd>{props.catToAdopt.breed}</dd>
            <dt>Story: </dt>
            <dd>{props.catToAdopt.story}</dd>
          </dl>
          <button className="adopt">Adopt</button>
        </main>
      </section>

      <section className="dogToAdopt">
        <header role="banner">
          <p>{props.dogToAdopt.name}</p>
          <img src={props.dogToAdopt.imageURL} alt={props.dogToAdopt.imageDescription} />
        </header>
        <main role="main">
          <dl className="info">
            <dt>Sex: </dt>
            <dd>{props.dogToAdopt.sex}</dd>
            <dt>Age: </dt>
            <dd>{props.dogToAdopt.age}</dd>
            <dt>Breed: </dt>
            <dd>{props.dogToAdopt.breed}</dd>
            <dt>Story: </dt>
            <dd>{props.dogToAdopt.story}</dd>
          </dl>
          <button className="adopt">Adopt</button>
        </main>
      </section>
    </div>
  );
};

export default Dashboard;