import { Logo } from './logo';
import { Account } from './account';

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <header className= "flex flex-row justify-between px-16 py-14">
      <Logo />
      {isAccountVisible && <Account />}
    </header>
  );
}

export { Header };
