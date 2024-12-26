// Redirecionar para outra página
function irParaPagina(pagina) {
    window.location.href = pagina;
  }
  
  // Abrir formulário para adicionar memórias (imagens, vídeos, músicas)
  function abrirFormularioMemorias() {
    const formulario = document.getElementById('formulario');
    formulario.style.display = 'block';
    formulario.innerHTML = `
      <h2>Adicionar Memória</h2>
      <input type="file" id="inputArquivo" accept="image/*,video/*,audio/*">
      <button onclick="salvarMemoria()">Salvar</button>
      <button onclick="fecharFormulario()">Fechar</button>
    `;
  }
  
  // Abrir formulário para adicionar texto
  function abrirFormularioTexto() {
    const formulario = document.getElementById('formulario');
    formulario.style.display = 'block';
    formulario.innerHTML = `
      <h2>Adicionar Texto</h2>
      <textarea id="inputTexto" placeholder="Escreva algo..."></textarea>
      <button onclick="salvarTexto()">Salvar</button>
      <button onclick="fecharFormulario()">Fechar</button>
    `;
  }
  
  // Fechar formulário
  function fecharFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.style.display = 'none';
    formulario.innerHTML = '';
  }
  
  // Salvar memória no localStorage
  function salvarMemoria() {
    const inputArquivo = document.getElementById('inputArquivo');
    const arquivo = inputArquivo.files[0];
    if (arquivo) {
      const url = URL.createObjectURL(arquivo);
      const tipo = arquivo.type.startsWith('image/')
        ? 'imagem'
        : arquivo.type.startsWith('video/')
        ? 'video'
        : 'audio';
  
      const memoria = { tipo, url };
      adicionarAoLocalStorage(memoria);
      fecharFormulario();
      exibirMemorias();
    }
  }
  
  // Salvar texto no localStorage
  function salvarTexto() {
    const inputTexto = document.getElementById('inputTexto');
    const texto = inputTexto.value.trim();
    if (texto) {
      const memoria = { tipo: 'texto', texto };
      adicionarAoLocalStorage(memoria);
      fecharFormulario();
      exibirMemorias();
    }
  }
  
  // Adicionar ao localStorage
  function adicionarAoLocalStorage(memoria) {
    const galeria = localStorage.getItem('galeria') ? JSON.parse(localStorage.getItem('galeria')) : [];
    galeria.push(memoria);
    localStorage.setItem('galeria', JSON.stringify(galeria));
  }
  
  // Exibir memórias na galeria
  function exibirMemorias() {
    const galeria = localStorage.getItem('galeria') ? JSON.parse(localStorage.getItem('galeria')) : [];
    const container = document.getElementById('memorias');
    container.innerHTML = '';
  
    galeria.forEach(memoria => {
      let elemento;
      if (memoria.tipo === 'imagem') {
        elemento = document.createElement('img');
        elemento.src = memoria.url;
      } else if (memoria.tipo === 'video') {
        elemento = document.createElement('video');
        elemento.src = memoria.url;
        elemento.controls = true;
      } else if (memoria.tipo === 'audio') {
        elemento = document.createElement('audio');
        elemento.src = memoria.url;
        elemento.controls = true;
      } else if (memoria.tipo === 'texto') {
        elemento = document.createElement('div');
        elemento.className = 'mensagem-texto';
        elemento.textContent = memoria.texto;
      }
      container.appendChild(elemento);
    });
  }
  
  // Carregar memórias ao abrir a página
  document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('galeria.html')) {
      exibirMemorias();
    }
  });
  
  // Voltar para a página anterior
  function voltarParaPaginaAnterior() {
    history.back();
  }
  // Lista de mensagens motivacionais e versículos bíblicos
const mensagens = [
    '"Acredite em você e tudo será possível!"',
    '"A vida é feita de escolhas. Escolha ser feliz!"',
    '"Cada dia é uma nova oportunidade para ser melhor."',
    '"O sucesso é a soma de pequenos esforços repetidos dia após dia."',
    '"Nunca desista. Grandes coisas levam tempo!"',
    '"Você é mais forte do que pensa."',
    '"O único lugar onde o sucesso vem antes do trabalho é no dicionário."',
    '"Tudo o que você precisa já está dentro de você."',
    '"A jornada de mil milhas começa com um passo."',
    '"O melhor ainda está por vir!"',
    
    // Versículos bíblicos
    '"O Senhor é o meu pastor; nada me faltará." - Salmo 23:1',
    '"Tudo posso naquele que me fortalece." - Filipenses 4:13',
    '"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna." - João 3:16',
    '"Pois eu bem sei os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de lhes causar dano, planos de dar-lhes uma esperança e um futuro." - Jeremias 29:11',
    '"E conhecereis a verdade, e a verdade vos libertará." - João 8:32',
    '"O Senhor é a minha luz e a minha salvação; de quem terei medo?" - Salmo 27:1',
    '"Entrega o teu caminho ao Senhor; confia nele, e o mais ele fará." - Salmo 37:5',
    '"Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça." - Isaías 41:10',
    '"Tudo o que pedirdes em oração, crendo, recebereis." - Mateus 21:22',
    '"Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento." - Provérbios 3:5',
    '"O Senhor é bom para todos; as suas misericórdias estão sobre todas as suas obras." - Salmo 145:9',
    '"Bendito o homem que confia no Senhor e cuja confiança é o Senhor." - Jeremias 17:7',
    '"Pois onde está o vosso tesouro, aí estará também o vosso coração." - Mateus 6:21',
    '"O Senhor é o meu refúgio e a minha fortaleza, o meu Deus, em quem confio." - Salmo 91:2',
    '"E o Deus de toda a graça, que em Cristo vos chamou à sua eterna glória, depois de um pouco de sofrimento, ele mesmo vos há de aperfeiçoar, firmar, fortificar e fundamentar." - 1 Pedro 5:10',
    '"O Senhor faz prosperar os planos do homem, mas o que se realiza é o propósito do Senhor." - Provérbios 19:21',
    '"Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco." - 1 Tessalonicenses 5:18',
    '"O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha." - 1 Coríntios 13:4',
    '"Mas o fruto do Espírito é: amor, alegria, paz, para a paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio." - Gálatas 5:22-23',
    '"Portanto, amados, visto que temos tais promessas, purifiquemo-nos de toda a impureza da carne e do espírito, aperfeiçoando a santidade no temor de Deus." - 2 Coríntios 7:1',
    '"Porque para Deus nada é impossível." - Lucas 1:37'
  ];
  
  // Função para escolher uma mensagem aleatória
  function exibirMensagemAleatoria() {
    const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
    document.getElementById('textoMensagem').innerText = mensagem;
  }
  
  // Chamar a função ao carregar a página
  document.addEventListener('DOMContentLoaded', exibirMensagemAleatoria);
  
  // Função para redirecionar para a página de galeria
  function irParaPagina(url) {
    window.location.href = url;
  }
  