import { connect } from 'react-redux';
import Search from '../components/Search/Search';
import { setTopic } from '../actions';

const mapStateToProps = state => ({
  topics: state.getIn(['main', 'topics']),
});

const mapDispatchToProps = {
  setTopic
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
