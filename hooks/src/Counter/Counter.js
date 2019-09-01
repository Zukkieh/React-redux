import '@shopify/polaris/styles.css';
import { Button, Icon, DisplayText } from '@shopify/polaris';
import { RefreshMajorMonotone, MobilePlusMajorMonotone, MinusMinor } from '@shopify/polaris-icons';

import './Counter.css';
import { up, down, reset } from '../store/ducks/clickReducer';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter(){  
    const count = useSelector(state => state.newValue);
    const dispatch = useDispatch();
    //coment1
    return (
      <div className="App">
        <div className= "updown">
          <Button className="down" onClick={() => dispatch(down())}><Icon source={MinusMinor}/></Button>
          <DisplayText size="medium">{count}</DisplayText>
          <Button className="up" onClick={() => dispatch(up())}><Icon source={MobilePlusMajorMonotone}/></Button>
        </div>
        <Button className="reset" onClick={() => dispatch(reset())}><Icon source={RefreshMajorMonotone}/></Button>
      </div>
    );
}

//coment1 -> we can make a function to each dispatchers like:
    // function upf() {
    //   dispatch(up())
    // }
    // function downf() {
    //   dispatch(down())
    // }
    // function resetf() {
    //   dispatch(reset())
    // }
//and the button will be like:
    //<Button className="down" onClick={down}><Icon source={MinusMinor}/></Button>
    //<Button className="up" onClick={up}><Icon source={MobilePlusMajorMonotone}/></Button>
    //<Button className="reset" onClick={reset}><Icon source={RefreshMajorMonotone}/></Button>