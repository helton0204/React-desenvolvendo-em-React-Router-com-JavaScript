import styles from "./NaoEncontrada.module.css";
import erro404 from "assets/erro_404.png";
import BotaoPrincipal from "componentes/botaoPricipal/BotaoPrincipal";
import { useNavigate } from "react-router-dom";

const NaoEncontrada = () => {
    /*
     useNavigate é uma função do React Router que permite navegar programaticamente para outra rota. 
     Ele é fornecido pelo pacote react-router-dom e pode ser importado a partir dele. 
     Ele retorna uma função que pode ser chamada com o endereço de destino da rota como parâmetro para 
     navegar para essa rota. Ele é geralmente usado em componentes de função para permitir que o usuário 
     navegue para outra rota quando determinadas ações são realizadas, como clicar em um botão ou submeter um formulário.
    */
    const navegar = useNavigate();

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a tela anterior.
                </p>
                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar("/")}
                >
                    <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
                </div>
                <img className={styles.imagemCachorro} src={erro404} alt="Cachorro de óculos"/>
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}
export default NaoEncontrada;