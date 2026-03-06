const configColecoes = {
    'VERÃO': { titulo: 'COLEÇÃO RAY-BAN', banner: 'https://media.ray-ban.com/cms/resource/image/1561062/landscape_ratio144x65/2592/1170/4a0666aa6639e8aa251feca0b58e2f1f/81838FA01E24C4EC87319B7AF4D89FE0/rbm-jupiter-pdp-d.jpg' },
    'INVERNO': { titulo: 'COLEÇÃO ANA HICKMANN', banner: 'https://anba.com.br/wp-content/uploads/2018/08/ana-hickmann-eyewear2.jpg' },
    'PRIMAVERA': { titulo: 'COLEÇÃO VOGUE', banner: 'https://media.vogue-eyewear.com/2025/09_BRASIL_SASHA/D_Hero.jpg' },
    'LENTES_GRAU': { titulo: 'PRATICIDADE', banner: 'https://olhardigital.com.br/wp-content/uploads/2020/09/20200914123501.jpg' },
    'LENTES_ESTETICA': { titulo: 'OLHAR MARCANTE', banner: 'https://conhecimentocientifico.r7.com/wp-content/uploads/2021/06/colagem-de-olhos_93624-136-1.jpg' },
    'GERAL': { titulo: 'ATITUDE', banner: 'https://catracalivre.com.br/wp-content/uploads/2026/01/freepik-pessoa-usando-culos-de-sol-tendncia-2026-em-ambien-1222.jpeg' }
};

const produtosData = {
    'VERÃO': [{ id: 1, nome: 'Aviador Premium', preco: 499.9, img: 'https://http2.mlstatic.com/D_Q_NP_2X_655225-CBT92881727500_092025-P.webp' }],
    'INVERNO': [{ id: 3, nome: 'Classic Gold', preco: 620.0, img: 'https://cdn.dooca.store/101255/products/oculos-de-grau-rayban-aviador-rx6489-dourado_640x640.jpg?v=1753722835&webp=0' }],
    'PRIMAVERA': [{ id: 5, nome: 'Vogue Meneghel', preco: 350.0, img: 'https://images.tcdn.com.br/img/img_prod/1390546/180_oculos_de_sol_vogue_x_sasha_meneghel_vo5625s_w44_87_52_683_1_58a929026257d8942179a1fa17c68ebc.jpg' }],
    'LENTES_GRAU': [
        { id: 20, nome: 'Lente ZEISS', preco: 150.00, img: 'https://oculosja.com/upload/produto/imagem/36aa42174bd4a99fcf3bd3b31270f9c7.webp' },
        { id: 21, nome: 'Lente OPTIX', preco: 280.00, img: 'https://http2.mlstatic.com/D_NQ_NP_830149-MLU74346191744_022024-O.webp' }
    ],
    'LENTES_ESTETICA': [
        { id: 30, nome: 'Lente Mel Natural', preco: 210.00, img: 'https://images.tcdn.com.br/img/img_prod/1148725/natural_colors_mel_anual_com_1_unidade_257_1_ea22f590e335cdbc21a412f2d55859b7.jpg' },
        { id: 31, nome: 'Lente Azul Oceano', preco: 210.00, img: 'https://naturelens.com.br/cdn/shop/files/245.png?v=1709305268&width=1445' }
    ],
    'GERAL': [
        { id: 1, nome: 'Aviador Premium', preco: 499.9, img: 'https://http2.mlstatic.com/D_Q_NP_2X_655225-CBT92881727500_092025-P.webp' },
        { id: 10, nome: 'Casual', preco: 189.90, img: 'https://chillibeans.vteximg.com.br/arquivos/ids/555817-425-425/OC.CL.5251-5702.1-Oculos-de-Sol-Unissex-Chilli-Beans-Classicos-Jazz-Degrade-Marrom--3-.jpg?v=638911496762200000' },
        { id: 2, nome: 'Esportivo Oranssi', preco: 399.0, img: 'https://cdn.awsli.com.br/600x450/1293/1293420/produto/231709386ddcfd1382e.jpg' }
    ]
};

let carrinho = {}; let totalQtd = 0; let vTotal = 0;

// FUNÇÕES DO MENU MOBILE
function toggleMobileMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

function toggleSubMenu(id) {
    const sub = document.getElementById(id);
    sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
}

function trocarColecao(nome) {
    document.getElementById('secao-contato').style.display = "none";
    document.getElementById('vitrine-principal').style.display = "block";
    const config = configColecoes[nome] || configColecoes['GERAL'];
    document.getElementById('titulo-banner').innerText = config.titulo;
    document.getElementById('banner-principal').style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${config.banner}')`;
    const lista = document.getElementById('lista-produtos');
    lista.innerHTML = "";
    (produtosData[nome] || produtosData['GERAL']).forEach(p => {
        const q = carrinho[p.id] ? carrinho[p.id].qtd : 0;
        const btn = q > 0 ? `<div class="controle-quantidade"><button class="btn-qty" onclick="add(${p.id},'${p.nome}',${p.preco},-1,'${nome}')">-</button><span>${q}</span><button class="btn-qty" onclick="add(${p.id},'${p.nome}',${p.preco},1,'${nome}')">+</button></div>` : `<button class="btn-vitrine" onclick="add(${p.id},'${p.nome}',${p.preco},1,'${nome}')">ADICIONAR</button>`;
        lista.innerHTML += `<div class="card-produto"><img src="${p.img}"><h3>${p.nome}</h3><p>R$ ${p.preco.toFixed(2)}</p><div>${btn}</div></div>`;
    });
}

function add(id, n, p, m, col) {
    if(!carrinho[id]) carrinho[id] = {n, p, qtd: 0};
    carrinho[id].qtd += m; if(carrinho[id].qtd <= 0) delete carrinho[id];
    totalQtd = 0; vTotal = 0;
    for(let i in carrinho) { totalQtd += carrinho[i].qtd; vTotal += (carrinho[i].qtd * carrinho[i].p); }
    document.getElementById('contagem').innerText = totalQtd; trocarColecao(col);
}

function abrirCarrinho() {
    fecharModais(); document.getElementById('janelaCarrinho').style.display = "block";
    const l = document.getElementById('lista-itens-carrinho'); const statusFrete = document.getElementById('status-frete');
    l.innerHTML = totalQtd === 0 ? "<p>Vazio</p>" : "";
    for(let i in carrinho) { l.innerHTML += `<div class="item-carrinho"><span>${carrinho[i].n} (x${carrinho[i].qtd})</span><strong>R$ ${(carrinho[i].qtd * carrinho[i].p).toFixed(2)}</strong></div>`; }
    if (vTotal >= 399.90) { statusFrete.innerHTML = `<span>Frete:</span> <span class="frete-sucesso">GRÁTIS! ✅</span>`; } 
    else if (vTotal > 0) { statusFrete.innerHTML = `<span>Frete:</span> <span>Faltam R$ ${(399.90 - vTotal).toFixed(2)}</span>`; } 
    document.getElementById('valor-total').innerText = vTotal.toFixed(2);
}

function fecharModais() { document.getElementById('janelaCarrinho').style.display = "none"; }

function enviarWhatsApp() {
    if (totalQtd === 0) return alert("Carrinho vazio!");
    let msg = `Olá! Pedido Oranssi Óticas:\n\n`;
    for (let i in carrinho) { msg += `* ${carrinho[i].n} (x${carrinho[i].qtd}) - R$ ${(carrinho[i].qtd * carrinho[i].p).toFixed(2)}\n`; }
    msg += `\n*Total: R$ ${vTotal.toFixed(2)}*`;
    window.open(`https://wa.me/5511962629845?text=${encodeURIComponent(msg)}`, '_blank');
}

function mostrarContato() { 
    document.getElementById('vitrine-principal').style.display = "none"; 
    document.getElementById('secao-contato').style.display = "block"; 
    document.getElementById('titulo-banner').innerText = "CONTATO";
}

window.onload = () => trocarColecao('GERAL');