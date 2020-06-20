import { connect } from 'react-redux';
import { getPhotos, searchPhotos } from '../actions/thunkActions';
import HomePage from '../components/HomePage/HomePage';

const mapStateToProps = state => ({
  topSectionBackgroundImage: state.getIn(['main', 'topSectionImage']),
  photos: state.getIn(['main', 'photos']),
  topic: state.getIn(['main', 'search'])
});

const mapDispatchToProps = {
  getPhotos,
  searchPhotos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
