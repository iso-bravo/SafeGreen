import Seccion2 from "components/layout/header/seccion2";
import { Seccion1 } from "../../components/layout/header/seccion1";
import Footer from "../../components/layout/header/footer";

function Home() {
  return (
    <div>
      <Seccion1 />
      <Seccion2 />
      <Footer/>
    </div>
  );
}

export { Home };
