import { Logo } from './logo';
import { Account } from './account';

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <header className= "flex flex-row justify-between p-20">
      <Logo />
      {isAccountVisible && <Account />}
    </header>
  );
}

export { Header };
