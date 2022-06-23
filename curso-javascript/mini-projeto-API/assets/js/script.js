const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const botao = document.getElementById('change-cat');
const imagemGato = document.getElementById('cat');

const pegaGato = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;
    }
    catch (e) {
        console.log(e.message);
    }
}

const pegaImagem = async () => {
    imagemGato.src = await pegaGato();
}

botao.addEventListener('click', pegaImagem);

pegaImagem();
