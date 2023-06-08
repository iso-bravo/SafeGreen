import { Link } from 'react-router-dom';
import { ReactComponent as SVG } from 'assets/images/logo.svg';

function Logo() {
  return (
    <Link to="/">
      <h1 className='border border-white'>PlanetU</h1>
    </Link>
  );
}

export { Logo };
