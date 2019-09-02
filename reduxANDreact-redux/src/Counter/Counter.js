import '@shopify/polaris/styles.css';
import { Button, Icon, DisplayText } from '@shopify/polaris';
import { RefreshMajorMonotone, MobilePlusMajorMonotone, MinusMinor } from '@shopify/polaris-icons';

import './Counter.css';

import React from 'react';


class Counter extends React.Component {
  render(){ 

    const { up, down, reset, newValue } = this.props;
    
    return (
      <div className="App">
        <div className= "updown">
          <Button className="down" onClick={() => down()}><Icon source={MinusMinor}/></Button>
          <DisplayText size="medium">{newValue}</DisplayText>
          <Button className="up" onClick={() => up()}><Icon source={MobilePlusMajorMonotone}/></Button>
        </div>
        <Button className="reset" onClick={() =>reset()}><Icon source={RefreshMajorMonotone}/></Button>
      </div>
    );
  }
}

export default Counter;

