import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { up, down, reset } from '../store/ducks/clickReducer';
import Counter from "./Counter";

const mapStateToProps = store => ({
    newValue: store.clickReducer.newValue 
  });
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({up, down, reset}, dispatch);
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Counter);
  