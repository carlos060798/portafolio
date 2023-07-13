import Footerbt from "../component/Footerbt";
import Presentacion from "../component/Presentacion";
import PerfilDev from "../Component/Perfil";
import Mensage from "../component/Mensage";
import GroupExample from "../Component/Skill";



function Home() {
    return ( 
        <>
        <Presentacion/>
        <PerfilDev/>
        <GroupExample/>
         <Mensage/>
        <Footerbt/>
        </>
     );
}

export default Home;