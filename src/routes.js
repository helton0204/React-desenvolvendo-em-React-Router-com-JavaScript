import Menu from "componentes/menu/Menu";
import PaginaPadrao from "componentes/paginaPadrao/PaginaPadrao";
import Rodape from "componentes/rodape/Rodape";
import Inicio from "paginas/inicio/Inicio";
import NaoEncontrada from "paginas/naoEncontrada/NaoEncontrada";
import Post from "paginas/post/Post";
import SobreMim from "paginas/sobreMim/SobreMim";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}> {/* Essa é a rota pai. No componente <PaginaPadrao/> tem o componente <Outlet/> que é responsável por renderizar os componentes das rotas filhas (<Inicio/> e <SobreMim/>) dentro do componente <PaginaPadrao/> da rota pai */}
          <Route index element={<Inicio/>} /> {/* index é a mesma coisa do atributo path="/" */}
          <Route path="sobremim" element={<SobreMim/>} /> {/* As rotas filhas são relativas a rota pai, ou seja, o path="sobremim" resulta em uma rota que concatena a rota pai mais essa rota filha ficando a rota "/sobremim" da  */}
        </Route>
        <Route path="/posts/:id/*" element={<Post/>} /> {/* :id significa que qualquer url com "post/qualquer-coisa" vai selecionar essa rota e renderizar o componente <Post/>*/}
        <Route path="*" element={<NaoEncontrada/>} />
      </Routes>
      <Rodape/>
    </BrowserRouter> 
  );
}

export default AppRoutes;

/*Explicando o seguinte código que são rotas aninhadas:
<Route path="/" element={<PaginaPadrao/>}>
  <Route index element={<Inicio/>} />
  <Route path="sobremim" element={<SobreMim/>} />
</Route>

Na rota "/", a estrutura renderizada é: 
<PaginaPadrao>
  <Inicio/>
<PaginaPadrao/>

E na rota "/sobremim", a estrutura renderizada é: 
<PaginaPadrao>
  <SobreMim/>
<PaginaPadrao/>
*/
