const url_base = 'https://thatcopy.pw/catapi/rest/';
const botao = document.getElementById('change-cat');
const imagemGato = document.getElementById('cat');

const pegaGato = async () => {
    try {
        const data = await fetch(url_base);
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
