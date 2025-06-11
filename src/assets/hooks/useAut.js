import { useContext } from "react";
import { AutContext } from "../contexts/AutorizacionesContext";

function useAut () {
    const context = useContext(AutContext);

    if(context === null) {
        throw new Error ("useAut debe ser usado dentro de AutProvider");
    }

    return context;
}

export default useAut;