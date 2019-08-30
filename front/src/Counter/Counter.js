import '@shopify/polaris/styles.css';
import { Button, Icon, DisplayText } from '@shopify/polaris';
import { RefreshMajorMonotone, MobilePlusMajorMonotone, MinusMinor } from '@shopify/polaris-icons';

import './Counter.css';

import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { up, down, reset } from '../store/ducks/clickReducer';

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

const mapStateToProps = store => ({
  newValue: store.clickState.newValue 
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({up, down, reset}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
