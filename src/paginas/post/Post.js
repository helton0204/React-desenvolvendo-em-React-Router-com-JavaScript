import PostModelo from 'componentes/postModelo/PostModelo';
import { Route, Routes, useParams } from "react-router-dom";
import posts from 'json/posts.json'; 
import './Post.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import NaoEncontrada from 'paginas/naoEncontrada/NaoEncontrada';
import PaginaPadrao from 'componentes/paginaPadrao/PaginaPadrao';

const Post = () => {
    const parametros = useParams(); //parametros é um objeto que tem o atributo id vindo de <Route path="posts/:id" element={<Post/>} /> do componente routes.js
    const post = posts.find(post => {
        return post.id === Number(parametros.id); //quando der true esse método vai retornar o elemento post em questão
    });

    if(!post){
        return <h1><NaoEncontrada/></h1>
    }
    
    return( 
        <PaginaPadrao>
            <PostModelo fotoCapa={`/assets/posts/${post.id}/capa.png`} titulo={post.titulo}>
                <div className="post-markdown-container">                    
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
            </PostModelo> 
        </PaginaPadrao>
    )
}
export default Post;

/* 
useParams é uma função do React Router que permite acessar os parâmetros da rota atualmente ativa. 
Essa função é importada do pacote 'react-router-dom' e é usada dentro de um componente que está sendo renderizado, nesse caso <Post/>, por uma rota que espera parâmetros.

const parametros = useParams() é uma constante que está armazenando o objeto com os parâmetros da rota. 
Essa constante, uma vez definida, pode ser usada dentro do componente para acessar os valores dos parâmetros.

Por exemplo, se você estivesse usando a rota "posts/:id", você poderia acessar o valor do parâmetro "id" com parametros.id.

Ao se usar essa função, o componente que o usa fica "escutando" as mudanças na rota e, quando há uma mudança, ele atualiza os valores das variáveis armazenadas com os parâmetros.
*/