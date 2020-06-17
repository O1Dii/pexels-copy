import { connect } from 'react-redux';
import { getPhotos } from '../actions/thunkActions';
import HomePage from '../components/HomePage/HomePage';

const mapStateToProps = state => ({
  topSectionBackgroundImage: state.getIn(['main', 'topSectionImage']),
  photos: state.getIn(['main', 'photos']),
});

const mapDispatchToProps = {
  getPhotos,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
