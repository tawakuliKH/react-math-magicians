// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import App from '../App';

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
