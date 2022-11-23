import renderer from 'react-test-renderer';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

describe('Should render UI Components', () => {
  it('Renders Footer Component', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should rendrer Navbar Component', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
