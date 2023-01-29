import PostModelo from "componentes/postModelo/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png"
import styles from "./SobreMim.module.css";

export default function SobreMim() {
    return ( 
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
            <h3 className={styles.subtitulo}>Olá, eu sou Helton!</h3>
            <img 
                src={fotoSobreMim} 
                alt="Foto do Helton sorrindo"
                className={styles.fotoSobreMim}    
            />
            <p className={styles.paragrafo}>
                Meu nome é Helton e sou estudante de Tecnologia da Informação na Universidade Federal do Rio Grande do Norte (UFRN). Desde cedo, sempre tive interesse em desenvolvimento de software e decidi me especializar em Front-end, me tornando um especialista em criação de interfaces e experiência do usuário.
            </p>
            <p className={styles.paragrafo}>
                Sou um profissional dedicado e sempre busco aprender novas tecnologias para aperfeiçoar minhas habilidades. Estou sempre em busca de desafios e oportunidades para aplicar o que aprendo em projetos reais. Isso me torna um desenvolvedor inovador e criativo, sempre buscando soluções para os problemas mais complexos.
            </p>
            <p className={styles.paragrafo}>
                Além de ser apaixonado por tecnologia, me sinto realizado em trabalhar na área da tecnologia da informação. Acredito que é uma área em constante evolução e que oferece muitas oportunidades para quem está disposto a se esforçar e aprender. Atualmente, estou trabalhando em um estágio onde estou desenvolvendo o projeto Multiprova, que permite que todos os estudantes da UFRN realizem avaliações online por meio dessa plataforma. Estou ansioso em contribuir para o crescimento da indústria de TI e para a melhoria do ensino universitário.
            </p>
        </PostModelo>
    )
}