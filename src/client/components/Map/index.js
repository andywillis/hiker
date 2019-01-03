import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from 'prop-types';

import style from './style.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidXdzIiwiYSI6ImNqcWd1dDZuZjA5aWY0OG50NzhwOHZmYmkifQ.RcBcX-3jynsZ6WmrTtz6Xw';

class Map extends Component {

  constructor(props) {
    super(props);
    this.setNode = this.setNode.bind(this);
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/outdoors-v10?optimize=true',
      center: [1.3090467453002932, 51.24741099466612],
      zoom: 12.5
    });
    map.on('styledata', () => map.resize());
  }

  setNode(node) {
    this.mapContainer = node;
  }

  render() {
    return (
      <div className={style.entry}>
        <div className={style.mapContainer} ref={this.setNode} />
      </div>
    );
  }


}

export default Map;


Map.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
