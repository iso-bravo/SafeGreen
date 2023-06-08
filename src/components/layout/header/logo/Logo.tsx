import { Link } from 'react-router-dom';
import { ReactComponent as SVG } from 'assets/images/logo.svg';

function Logo() {
  return (
    <Link to="/">
      <h1 className='font-Lexend font-bold border border-white text-5xl'>PlanetU</h1>
    </Link>
  );
}

export { Logo };
