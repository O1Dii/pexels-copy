import { connect } from 'react-redux';
import Search from '../components/Search/Search';

const mapStateToProps = state => ({
  topics: state.getIn(['main', 'topics'])
});

export default connect(
  mapStateToProps
)(Search);
