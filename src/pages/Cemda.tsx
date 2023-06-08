import { Nombre } from "components/layout/cemda/Nombre";
import { Sig } from "components/layout/cemda/Sig";
import { Texto } from "components/layout/cemda/Texto";

function Cemda() {
    return (
        <div>
            <Nombre/>
            <Texto/>
            <Sig/>
        </div>
    );
}

export { Cemda };