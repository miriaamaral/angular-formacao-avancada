const fs = require('fs');
const path = require('path');

console.log("🚀 Scanner PRO (estrutura por seção + busca inteligente)");

// 📁 CONFIG
const ROOT = __dirname;
const MAP_PATH = path.join(ROOT, 'course-map.json');
const README_PATH = path.join(ROOT, 'README.md');

if (!fs.existsSync(MAP_PATH)) {
  console.log('❌ course-map.json não encontrado');
  process.exit(1);
}

const mapa = JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'));

// 🧠 HELPERS
function normalizar(texto) {
  if (!texto) return '';
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

// 🔍 busca direta (rápida)
function encontrarPasta(basePath, nomeAlvo) {
  if (!fs.existsSync(basePath)) return null;

  const alvo = normalizar(nomeAlvo);

  let itens;
  try {
    itens = fs.readdirSync(basePath, { withFileTypes: true });
  } catch {
    return null;
  }

  for (const item of itens) {
    if (!item.isDirectory()) continue;

    const nomeNormalizado = normalizar(item.name);

    if (nomeNormalizado.includes(alvo.slice(0, 10))) {
      return path.join(basePath, item.name);
    }
  }

  return null;
}

// 🔥 fallback recursivo (só usa se não achar direto)
function encontrarPastaProfunda(basePath, nomeAlvo) {
  const alvo = normalizar(nomeAlvo);

  function buscar(dir) {
    let itens;
    try {
      itens = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return null;
    }

    for (const item of itens) {
      if (!item.isDirectory()) continue;

      // ignora lixo
      if (['node_modules', '.git', 'dist'].includes(item.name)) continue;

      const caminho = path.join(dir, item.name);
      const nomeNormalizado = normalizar(item.name);

      if (nomeNormalizado.includes(alvo.slice(0, 10))) {
        return caminho;
      }

      const sub = buscar(caminho);
      if (sub) return sub;
    }

    return null;
  }

  return buscar(basePath);
}

// 🌍 ESTADO GLOBAL
let totalAulas = 0;
let concluidas = 0;
let tempoTotal = 0;
let tempoFeito = 0;

// 🧠 🚀 PROCESSAMENTO
function processarAulas(aulas, pastaBase) {
  let total = 0;
  let feitas = 0;
  let tempo = 0;
  let tempoDone = 0;

  aulas.forEach(item => {

    // 🔁 SUBSEÇÃO
    if (item.aulas && Array.isArray(item.aulas)) {
      const pastaSub =
        encontrarPasta(pastaBase, item.secao) ||
        encontrarPastaProfunda(pastaBase, item.secao) ||
        pastaBase;

      const sub = processarAulas(item.aulas, pastaSub);

      total += sub.total;
      feitas += sub.feitas;
      tempo += sub.tempo;
      tempoDone += sub.tempoDone;

      return;
    }

    // 🧠 AULA NORMAL
    if (!item.nome) return;

    // 🧪 DEBUG
    let debugInfo = {
    aula: item.nome,
    encontrada: false,
    caminho: null,
    arquivo: false
    };

    total++;
    totalAulas++;

    if (item.tempo) {
      tempoTotal += item.tempo;
      tempo += item.tempo;
    }

    let concluida = false;

    // 🔍 tenta rápido primeiro, depois profundo
    const pastaAula =
      encontrarPasta(pastaBase, item.nome) ||
      encontrarPastaProfunda(pastaBase, item.nome);

    if (pastaAula) {
  debugInfo.encontrada = true;
  debugInfo.caminho = pastaAula;

  const arquivo = path.join(pastaAula, 'exercicio-concluido.md');

  if (fs.existsSync(arquivo)) {
    concluida = true;
    debugInfo.arquivo = true;
  }
}

    if (concluida) {
      feitas++;
      concluidas++;

      if (item.tempo) {
        tempoFeito += item.tempo;
        tempoDone += item.tempo;
      }
    }

    if (!concluida) {
    console.log('❌ NÃO CONCLUÍDA:', debugInfo);
  }
  });

  return { total, feitas, tempo, tempoDone };
}

// 📊 PROCESSAMENTO
const resultadosModulos = Object.entries(mapa).map(([nomeModulo, dadosModulo]) => {

  console.log(`\n📦 MÓDULO: ${nomeModulo}`);

  const caminhoModulo = path.join(ROOT, nomeModulo);

  if (!fs.existsSync(caminhoModulo)) {
    console.log(`⚠️ Pasta do módulo não existe: ${nomeModulo}`);
    return {
      rotulo: nomeModulo,
      percentual: 0
    };
  }

  let totalModulo = 0;
  let concluidasModulo = 0;

  dadosModulo.sections.forEach(secao => {

    const pastaSecao =
      encontrarPasta(caminhoModulo, secao.secao) ||
      encontrarPastaProfunda(caminhoModulo, secao.secao) ||
      caminhoModulo;

    const resultado = processarAulas(secao.aulas, pastaSecao);

    totalModulo += resultado.total;
    concluidasModulo += resultado.feitas;

    const percentualSecao = resultado.total
      ? Math.round((resultado.feitas / resultado.total) * 100)
      : 0;

    console.log(`   📘 ${secao.secao}: ${percentualSecao}% (${resultado.feitas}/${resultado.total})`);
  });

  const percentualModulo = totalModulo
    ? Math.round((concluidasModulo / totalModulo) * 100)
    : 0;

  return {
    rotulo: dadosModulo.meta?.label || nomeModulo,
    percentual: percentualModulo
  };

});

// 🌍 GLOBAL
const percentualGlobal = totalAulas
  ? Math.round((concluidas / totalAulas) * 100)
  : 0;

console.log('\n📊 RESUMO GERAL:');
console.log(`✔ Aulas concluídas: ${concluidas}`);
console.log(`⏳ Pendentes: ${totalAulas - concluidas}`);
console.log(`📈 Progresso: ${percentualGlobal}%`);

console.log('\n⏱️ TEMPO:');
console.log(`✔ Estudado: ${tempoFeito} min`);
console.log(`⏳ Restante: ${tempoTotal - tempoFeito} min`);

// 📊 GRÁFICO
const labels = resultadosModulos.map(r => r.rotulo);
const data = resultadosModulos.map(r => r.percentual);

const chartConfig = {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      data,
      backgroundColor: '#F8C1D1'
    }]
  }
};

const chartURL = `https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify(chartConfig))}`;

// 🏷️ BADGES
let badges = `\n<p align="center">\n`;
badges += `<img src="https://img.shields.io/badge/Global-${percentualGlobal}%25-purple?style=for-the-badge" />\n`;

resultadosModulos.forEach(m => {
  badges += `<img src="https://img.shields.io/badge/${m.rotulo}-${m.percentual}%25-pink?style=for-the-badge" />\n`;
});

badges += `</p>\n`;

// 📊 RESUMO VISUAL
const resumo = `

<p align="center">
💜 <b>Aulas concluídas:</b> ${concluidas} &nbsp;&nbsp;|&nbsp;&nbsp;
⏳ <b>Pendentes:</b> ${totalAulas - concluidas} &nbsp;&nbsp;|&nbsp;&nbsp;
📈 <b>Progresso:</b> <b>${percentualGlobal}%</b></p>

<p align="center">
⏱️ <b>Tempo estudado:</b> ${tempoFeito} min &nbsp;&nbsp;|&nbsp;&nbsp;
⌛ <b>Restante:</b> ${tempoTotal - tempoFeito} min
</p>
`;

// 📄 README
try {
  let readme = fs.readFileSync(README_PATH, 'utf8');
  readme = readme.replace(
  /(<!--PROGRESS_SUMMARY_START-->)[\s\S]*?(<!--PROGRESS_SUMMARY_END-->)/,
  `$1${resumo}$2`
);

  readme = readme.replace(
    /(<!--PROGRESS_BADGES_START-->)[\s\S]*?(<!--PROGRESS_BADGES_END-->)/,
    `$1${badges}$2`
  );

  readme = readme.replace(
    /(<!--PROGRESS_CHART_START-->)[\s\S]*?(<!--PROGRESS_CHART_END-->)/,
    `$1\n<img src="${chartURL}" />\n$2`
  );

  fs.writeFileSync(README_PATH, readme);

  console.log('\n✅ README atualizado!');
} catch (e) {
  console.log('⚠️ Erro ao atualizar README:', e.message);
}