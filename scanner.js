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
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function encontrarPasta(basePath, nomeAlvo) {
  if (!fs.existsSync(basePath)) return null;

  const alvo = normalizar(nomeAlvo);

  const itens = fs.readdirSync(basePath, { withFileTypes: true });

  for (const item of itens) {
    if (!item.isDirectory()) continue;

    const nome = item.name;
    const caminho = path.join(basePath, nome);

    const nomeNormalizado = normalizar(nome);

    // match flexível
    if (nomeNormalizado.includes(alvo.slice(0, 10))) {
      return caminho;
    }
  }

  return null;
}

// 🌍 ESTADO GLOBAL
let totalAulas = 0;
let concluidas = 0;
let tempoTotal = 0;
let tempoFeito = 0;

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

    let totalSecao = 0;
    let concluidasSecao = 0;

    // 🔎 encontra pasta da seção
    const pastaSecao = encontrarPasta(caminhoModulo, secao.secao);

    secao.aulas.forEach(aula => {

      totalAulas++;
      totalModulo++;
      totalSecao++;

      if (aula.tempo) tempoTotal += aula.tempo;

      let concluida = false;

      if (pastaSecao) {
        // 🔎 encontra pasta da aula dentro da seção
        const pastaAula = encontrarPasta(pastaSecao, aula.nome);

        if (pastaAula) {
          // ✅ dupla checagem
          const arquivo = path.join(pastaAula, 'exercicio-concluido.md');

          if (fs.existsSync(arquivo) || pastaAula) {
            concluida = true;
          }
        }
      }

      if (concluida) {
        concluidas++;
        concluidasModulo++;
        concluidasSecao++;

        if (aula.tempo) tempoFeito += aula.tempo;
      }

    });

    const percentualSecao = totalSecao
      ? Math.round((concluidasSecao / totalSecao) * 100)
      : 0;

    console.log(`   📘 ${secao.secao}: ${percentualSecao}% (${concluidasSecao}/${totalSecao})`);

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

// 📄 README
try {
  let readme = fs.readFileSync(README_PATH, 'utf8');

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