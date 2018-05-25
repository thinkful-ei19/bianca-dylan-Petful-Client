import React from 'react';
import { connect } from 'react-redux';
import Pet from './components/Pet';
import { fetchCat, adoptCat } from './actions/cat';
import { fetchDog, adoptDog } from './actions/dog';

class Dashboard extends React.Component {

  componentDidMount() {
    Promise.all([this.props.dispatch(fetchCat()), this.props.dispatch(fetchDog())]);
  }

  render() {
    return (
      <div>
        <Pet {...this.props.catToAdopt} onAdoptPet={() => this.props.dispatch(adoptCat())} />
        <Pet {...this.props.dogToAdopt} onAdoptPet={() => this.props.dispatch(adoptDog())} />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  catToAdopt: state.catToAdopt.data,
  dogToAdopt: state.dogToAdopt.data
});

export default connect(mapStateToProps)(Dashboard);


// module.exports = { petQueue, catQueue, dogQueue };