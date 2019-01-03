import React, { Component } from 'react';
import { dataReady } from '../../lib/utils';

import Map from '../Map';

import style from './style.css';

const geoJSON = require('../../../../data/geoJSON.json');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { gpsData: geoJSON };
  }

  render() {
    const { gpsData } = this.state;
    if (dataReady(gpsData)) {
      return (
        <main className={style.app}>
          <Map data={gpsData[0]} />
        </main>
      );
    }
    return <div />;
  }

}

export default App;
