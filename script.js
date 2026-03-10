/**
 * CONFIGURAÇÃO DAS COLEÇÕES
 * Define os títulos e as imagens de banner para cada categoria do site.
 */
const configColecoes = {
    'VERÃO': { titulo: 'COLEÇÃO RAY-BAN', banner: 'https://media.ray-ban.com/cms/resource/image/1561062/landscape_ratio144x65/2592/1170/4a0666aa6639e8aa251feca0b58e2f1f/81838FA01E24C4EC87319B7AF4D89FE0/rbm-jupiter-pdp-d.jpg' },
    'INVERNO': { titulo: 'COLEÇÃO ANA HICKMANN', banner: 'https://anba.com.br/wp-content/uploads/2018/08/ana-hickmann-eyewear2.jpg' },
    'PRIMAVERA': { titulo: 'COLEÇÃO VOGUE', banner: 'https://media.vogue-eyewear.com/2025/09_BRASIL_SASHA/D_Hero.jpg' },
    'LENTES_GRAU': { titulo: 'PRATICIDADE', banner: 'https://olhardigital.com.br/wp-content/uploads/2020/09/20200914123501.jpg' },
    'LENTES_ESTETICA': { titulo: 'OLHAR MARCANTE', banner: 'https://conhecimentocientifico.r7.com/wp-content/uploads/2021/06/colagem-de-olhos_93624-136-1.jpg' },
    'GERAL': { titulo: 'ORANSSI', banner: 'https://catracalivre.com.br/wp-content/uploads/2026/01/freepik-pessoa-usando-culos-de-sol-tendncia-2026-em-ambien-1222.jpeg' }
};

/**
 * BANCO DE DADOS DE PRODUTOS COMPLETO
 * Cada categoria agora conta com pelo menos 7 itens, garantindo uma vitrine rica.
 */
const produtosData = {
    'VERÃO': [
        { id: 1, nome: 'Aviador Premium', preco: 499.9, img: 'https://http2.mlstatic.com/D_Q_NP_2X_655225-CBT92881727500_092025-P.webp' },
        { id: 2, nome: 'Wayfarer Black', preco: 450.0, img: 'https://newotica.com.br/cdn/shop/files/0RB2132__646231__STD__noshad__qt.jpg?v=1708108574' },
        { id: 3, nome: 'Erika Velvet', preco: 380.0, img: 'https://oakvintage.com.br/cdn/shop/products/retro-square-men-rivets-sunglasses-shades-uv400-fashion-women-green-sun-glasses-0-oak-vintage-gray-green-877802.jpg?v=1692331028' },
        { id: 101, nome: 'Round Metal Gold', preco: 510.0, img: 'https://assets2.sunglasshut.com/cdn-record-files-pi/347b69f8-6ca1-40e4-872d-a3580139a540/a7cd21ba-336e-4293-8712-acfd006a835e/0RB3447__001__STD__shad__cfr.png?impolicy=SGH_bgtransparent&width=1024' },
        { id: 102, nome: 'Clubmaster Classic', preco: 480.0, img: 'https://officina7.fbitsstatic.net/img/p/oculos-de-sol-ray-ban-clubmaster-classic-polarizado-rb3016-901-58-51-84366/271022.jpg?w=1200&h=960&v=202504241240&qs=ignore' },
        { id: 103, nome: 'Justin Matte', preco: 420.0, img: 'https://officina7.fbitsstatic.net/img/p/oculos-de-sol-ray-ban-justin-dark-grey-rb4165-651287-55-88019/278310.jpg?w=1200&h=960&v=no-change&qs=ignore' },
        { id: 104, nome: 'Aviador Degradê', preco: 520.0, img: 'https://images.tcdn.com.br/img/img_prod/1148844/oculos_de_sol_aviador_unissex_aviadora_dovddg_verde_degrade_3723_1_632bffc7b9c2be5286be70eab237d168.jpg' }
    ],
    'INVERNO': [
        { id: 4, nome: 'Classic Gold', preco: 620.0, img: 'https://cdn.dooca.store/101255/products/oculos-de-grau-rayban-aviador-rx6489-dourado_640x640.jpg?v=1753722835&webp=0' },
        { id: 5, nome: 'Elegance Tortoise', preco: 580.0, img: 'https://acdn-us.mitiendanube.com/stores/001/116/055/products/oculos-de-sol-verona-frente-ac693a653f410d734a17525139378577-480-0.webp' },
        { id: 6, nome: 'Executive Silver', preco: 710.0, img: 'https://images.tcdn.com.br/img/img_prod/1090782/armacao_imperial_quadrada_modelo_lince_105_3_348ba5f66c54ee5a7ca79987d7daafff.png' },
        { id: 105, nome: 'AH Crystal Rose', preco: 650.0, img: 'https://oculosshop.com.br/cdn/shop/products/AH6388C02copiar_6ba1881d-83cf-493f-9163-3c031f1337a2.jpg?v=1594499266' },
        { id: 106, nome: 'AH Black Diamond', preco: 690.0, img: 'https://oculosshop.com.br/cdn/shop/products/ana-hickmann-ah-9235-oculos-de-sol-a01-preto-e-dourado-brilho-rosa-degrade-espelhado-lente-55-frente_1.jpg?v=1707485406&width=1140' },
        { id: 107, nome: 'AH Velvet Blue', preco: 590.0, img: 'https://oculosshop.com.br/cdn/shop/products/ana-hickmann-ah-6363-oculos-de-grau-c03-azul-translucido-degrade-brilho-lente-5-4-cm-frente_a3003887-b4f2-40cc-a565-ed7243a13138.jpg?v=1706129548&width=1140' },
        { id: 108, nome: 'AH Gold Slim', preco: 750.0, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQae3xE-ikrJpTTnaW9zRicgy__oBrbg2a5gQ&s' }
    ],
    'PRIMAVERA': [
        { id: 7, nome: 'Vogue Meneghel', preco: 350.0, img: 'https://images.tcdn.com.br/img/img_prod/1390546/180_oculos_de_sol_vogue_x_sasha_meneghel_vo5625s_w44_87_52_683_1_58a929026257d8942179a1fa17c68ebc.jpg' },
        { id: 8, nome: 'Vogue Cat Eye', preco: 420.0, img: 'https://www.oticacientifica.com.br/wp-content/uploads/2021/10/vougue-VO5377-S-29168-G-52.jpg' },
        { id: 9, nome: 'Vogue Boho Green', preco: 390.0, img: 'https://images.tcdn.com.br/img/img_prod/809533/culos_vogue_vo4342s_1_20251218153335_7bbc57116d35.jpg' },
        { id: 109, nome: 'Vogue Pink Glow', preco: 370.0, img: 'https://http2.mlstatic.com/D_NQ_NP_720866-MLB75962084884_052024-O.webp' },
    ],
    'LENTES_GRAU': [
        { id: 20, nome: 'Lente ZEISS Vision', preco: 150.00, img: 'https://oculosja.com/upload/produto/imagem/36aa42174bd4a99fcf3bd3b31270f9c7.webp' },
    ],
    'LENTES_ESTETICA': [
        { id: 30, nome: 'Lente Natural Colorida', preco: 210.00, img: 'https://lensnet.com.br/cdn/shop/products/OptimaNaturalLookAnual.webp?v=1740678460' },
    ],
    'GERAL': [
        { id: 1, nome: 'Aviador Premium', preco: 499.9, img: 'https://http2.mlstatic.com/D_Q_NP_2X_655225-CBT92881727500_092025-P.webp' },
        { id: 10, nome: 'Casual Urban', preco: 189.90, img: 'https://chillibeans.vteximg.com.br/arquivos/ids/555817-425-425/OC.CL.5251-5702.1-Oculos-de-Sol-Unissex-Chilli-Beans-Classicos-Jazz-Degrade-Marrom--3-.jpg?v=638911496762200000' },
        { id: 11, nome: 'Esportivo Oranssi', preco: 399.0, img: 'https://cdn.awsli.com.br/600x450/1293/1293420/produto/231709386ddcfd1382e.jpg' },
    ]
};

// Variáveis de estado da aplicação (Carrinho e Totais)
let carrinho = {}; 
let totalQtd = 0; 
let vTotal = 0;

/* --- FUNÇÕES DE NAVEGAÇÃO MOBILE --- */

// Abre e fecha o menu lateral no celular
function toggleMobileMenu() {
    document.getElementById('side-menu').classList.toggle('active');
}

// Expande ou recolhe os submenus (Marcas/Lentes) dentro do menu mobile
function toggleSubMenu(id) {
    const sub = document.getElementById(id);
    sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
}

/* --- FUNÇÕES DA VITRINE E PRODUTOS --- */

// Renderiza os produtos e banners baseados na categoria selecionada
function trocarColecao(nome) {
    document.getElementById('secao-contato').style.display = "none";
    document.getElementById('vitrine-principal').style.display = "block";
    
    const config = configColecoes[nome] || configColecoes['GERAL'];
    document.getElementById('titulo-banner').innerText = config.titulo;
    document.getElementById('banner-principal').style.backgroundImage = `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${config.banner}')`;
    
    const lista = document.getElementById('lista-produtos');
    lista.innerHTML = ""; // Limpa a vitrine para carregar novos itens
    
    (produtosData[nome] || produtosData['GERAL']).forEach(p => {
        const q = carrinho[p.id] ? carrinho[p.id].qtd : 0;
        
        // NOVIDADE: Adiciona campos de personalização dependendo da categoria
        let htmlOpcoes = "";
        if (nome === 'LENTES_GRAU') {
            htmlOpcoes = `
                <div class="seletores-lente" style="display: flex; gap: 5px; margin-bottom: 10px;">
                    <select id="od-${p.id}" style="width: 50%; padding: 5px; font-size: 11px;">
                        <option value="">Grau OD</option>
                        <option value="0.00">0.00</option>
                        <option value="1.00">1.00</option>
                        <option value="2.00">2.00</option>
                    </select>
                    <select id="oe-${p.id}" style="width: 50%; padding: 5px; font-size: 11px;">
                        <option value="">Grau OE</option>
                        <option value="0.00">0.00</option>
                        <option value="1.00">1.00</option>
                        <option value="2.00">2.00</option>
                    </select>
                </div>`;
        } else if (nome === 'LENTES_ESTETICA') {
            htmlOpcoes = `
                <div class="seletores-lente" style="margin-bottom: 10px;">
                    <select id="cor-${p.id}" style="width: 100%; padding: 5px; font-size: 11px;">
                        <option value="Azul">Azul</option>
                        <option value="Verde">Verde</option>
                        <option value="Mel">Mel</option>
                    </select>
                </div>`;
        }

        // Lógica de botão: mostra 'Adicionar' ou os controles de +/- se já houver no carrinho
        const btn = q > 0 ? `<div class="controle-quantidade"><button class="btn-qty" onclick="add(${p.id},'${p.nome}',${p.preco},-1,'${nome}')">-</button><span>${q}</span><button class="btn-qty" onclick="add(${p.id},'${p.nome}',${p.preco},1,'${nome}')">+</button></div>` : `<button class="btn-vitrine" onclick="add(${p.id},'${p.nome}',${p.preco},1,'${nome}')">ADICIONAR</button>`;
        
        lista.innerHTML += `
            <div class="card-produto">
                <img src="${p.img}">
                <h3>${p.nome}</h3>
                <p style="margin-bottom: 10px;">R$ ${p.preco.toFixed(2)}</p>
                ${htmlOpcoes}
                <div>${btn}</div>
            </div>`;
    });
}

// Adiciona ou remove itens do carrinho e atualiza os valores totais
function add(id, n, p, m, col) {
    if(!carrinho[id]) {
        let espec = "";
        // Captura o grau ou cor no momento da adição
        const od = document.getElementById(`od-${id}`);
        const oe = document.getElementById(`oe-${id}`);
        const cor = document.getElementById(`cor-${id}`);

        if(od && oe) espec = ` (OD: ${od.value || 'N/I'} | OE: ${oe.value || 'N/I'})`;
        else if(cor) espec = ` (Cor: ${cor.value})`;

        carrinho[id] = {n: n + espec, p, qtd: 0};
    }
    
    carrinho[id].qtd += m; 
    
    if(carrinho[id].qtd <= 0) delete carrinho[id]; // Remove o item se a quantidade chegar a zero
    
    totalQtd = 0; 
    vTotal = 0;
    
    // Recalcula o carrinho completo
    for(let i in carrinho) { 
        totalQtd += carrinho[i].qtd; 
        vTotal += (carrinho[i].qtd * carrinho[i].p); 
    }
    
    document.getElementById('contagem').innerText = totalQtd; 
    trocarColecao(col); // Atualiza a vitrine para refletir a nova quantidade nos botões
}

/* --- FUNÇÕES DO CARRINHO E FINALIZAÇÃO --- */

// Prepara e exibe a janela do carrinho com cálculo de frete grátis
function abrirCarrinho() {
    fecharModais(); 
    document.getElementById('janelaCarrinho').style.display = "block";
    
    const l = document.getElementById('lista-itens-carrinho'); 
    const statusFrete = document.getElementById('status-frete');
    
    l.innerHTML = totalQtd === 0 ? "<p>Vazio</p>" : "";
    
    for(let i in carrinho) { 
        l.innerHTML += `<div class="item-carrinho" style="text-align: left; font-size: 13px; margin-bottom: 8px;"><span>${carrinho[i].n} (x${carrinho[i].qtd})</span><br><strong>R$ ${(carrinho[i].qtd * carrinho[i].p).toFixed(2)}</strong></div>`; 
    }
    
    // Lógica da regra de negócio: Frete Grátis acima de R$ 399.90
    if (vTotal >= 399.90) { 
        statusFrete.innerHTML = `<span>Frete:</span> <span class="frete-sucesso">GRÁTIS! ✅</span>`; 
    } 
    else if (vTotal > 0) { 
        statusFrete.innerHTML = `<span>Frete:</span> <span>Faltam R$ ${(399.90 - vTotal).toFixed(2)}</span>`; 
    } 
    
    document.getElementById('valor-total').innerText = vTotal.toFixed(2);
}

function fecharModais() { 
    document.getElementById('janelaCarrinho').style.display = "none"; 
}

// Formata a lista de compras e abre o WhatsApp com a mensagem pronta
function enviarWhatsApp() {
    if (totalQtd === 0) return alert("Carrinho vazio!");
    
    let msg = `Olá! Pedido Oranssi Óticas:\n\n`;
    for (let i in carrinho) { 
        msg += `* ${carrinho[i].n} (x${carrinho[i].qtd}) - R$ ${(carrinho[i].qtd * carrinho[i].p).toFixed(2)}\n`; 
    }
    msg += `\n*Total: R$ ${vTotal.toFixed(2)}*`;
    
    window.open(`https://wa.me/5511962629845?text=${encodeURIComponent(msg)}`, '_blank');
}

// Troca a visualização da vitrine para as informações de contato
function mostrarContato() { 
    document.getElementById('vitrine-principal').style.display = "none"; 
    document.getElementById('secao-contato').style.display = "block"; 
    document.getElementById('titulo-banner').innerText = "CONTATO";
}

// Inicia o site carregando a coleção Geral por padrão
window.onload = () => trocarColecao('GERAL');

/**
 * ALGORITMO DE SIMILARIDADE (DISTÂNCIA DE LEVENSHTEIN)
 * Calcula quão parecidas são duas palavras para sugerir correções.
 */
function calcularSimilaridade(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let custos = new Array();
    for (let i = 0; i <= s1.length; i++) {
        let ultimoValor = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0) custos[j] = j;
            else {
                if (j > 0) {
                    let novoValor = custos[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        novoValor = Math.min(Math.min(novoValor, ultimoValor), custos[j]) + 1;
                    custos[j - 1] = ultimoValor;
                    ultimoValor = novoValor;
                }
            }
        }
        if (i > 0) custos[s2.length] = ultimoValor;
    }
    // Retorna um valor de 0 a 1 (1 sendo idêntico)
    return (1.0 - (custos[s2.length] / Math.max(s1.length, s2.length)));
}

/**
 * SISTEMA DE BUSCA INTELIGENTE COM APROXIMAÇÃO
 * Filtra produtos por nome ou categoria e sugere termos similares se nada for encontrado.
 */
function realizarBusca(termo, forcarRolagem = false) {
    const busca = termo.toLowerCase().trim();
    const lista = document.getElementById('lista-produtos');
    const titulo = document.getElementById('titulo-colecao');
    
    if (busca === "") {
        trocarColecao('GERAL');
        return;
    }

    lista.innerHTML = "";
    titulo.innerText = `RESULTADOS PARA: "${termo.toUpperCase()}"`;
    document.getElementById('secao-contato').style.display = "none";
    document.getElementById('vitrine-principal').style.display = "block";

    // ROLAGEM CONTROLADA: Só move a tela se o usuário confirmar (Enter ou Lupa)
    if (forcarRolagem) {
        window.scrollTo({
            top: 450, 
            behavior: 'smooth' 
        });
    }

    let encontrados = false;
    let melhorSugestao = { termo: "", score: 0 };

    // Primeira varredura: Busca exata ou parcial direta
    for (let categoria in produtosData) {
        produtosData[categoria].forEach(p => {
            const nomeP = p.nome.toLowerCase();
            const catP = categoria.toLowerCase();

            if (nomeP.includes(busca) || catP.includes(busca)) {
                encontrados = true;
                const q = carrinho[p.id] ? carrinho[p.id].qtd : 0;
                const btn = q > 0 ? `<div class="controle-quantidade"><button class="btn-qty" onclick="add(${p.id},'${p.nome}',${p.preco},-1,'GERAL')">-</button><span>${q}</span><button class="btn-qty" onclick="add(${p.id},'${p.nome}',${p.preco},1,'GERAL')">+</button></div>` : `<button class="btn-vitrine" onclick="add(${p.id},'${p.nome}',${p.preco},1,'GERAL')">ADICIONAR</button>`;
                
                lista.innerHTML += `<div class="card-produto"><img src="${p.img}"><h3>${p.nome}</h3><p>R$ ${p.preco.toFixed(2)}</p><div>${btn}</div></div>`;
            }

            // Guardar a melhor sugestão caso não encontre nada exato
            const scoreNome = calcularSimilaridade(busca, nomeP);
            if (scoreNome > melhorSugestao.score) {
                melhorSugestao = { termo: p.nome, score: scoreNome };
            }
        });
    }

    // Se nada foi encontrado, tenta a busca por aproximação automática
    if (!encontrados) {
        if (melhorSugestao.score > 0.4) { // Se a similaridade for razoável (acima de 40%)
            titulo.innerText = `VOCÊ QUIS DIZER: "${melhorSugestao.termo.toUpperCase()}"?`;
            // Realiza a busca novamente usando a sugestão encontrada
            realizarBusca(melhorSugestao.termo, false);
        } else {
            lista.innerHTML = "<p style='grid-column: 1/-1;'>Nenhum modelo encontrado com esse termo.</p>";
        }
    }
}

