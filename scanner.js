const fs = require('fs');
const path = require('path');

console.log("🚀 Iniciando scanner (versão blindada)...");

// 📦 Módulos
const modules = [
  { name: 'Modulo-JavaScript', label: 'JS' },
  { name: 'Modulo-TypeScript', label: 'TS' },
  { name: 'Modulo-Angular', label: 'Angular' }
];

// 🚫 pastas ignoradas
const IGNORED = new Set(['assets', '.github', 'node_modules']);

// 🔍 pega apenas pastas finais reais (leaf nodes)
function getLeafDirs(dir) {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir);

  const dirs = entries
    .map(e => path.join(dir, e))
    .filter(p => {
      if (!fs.existsSync(p)) return false;
      if (!fs.statSync(p).isDirectory()) return false;
      if (IGNORED.has(path.basename(p))) return false;
      return true;
    });

  if (dirs.length === 0) {
    return [dir];
  }

  let result = [];
  dirs.forEach(d => {
    result = result.concat(getLeafDirs(d));
  });

  return result;
}

// 📊 cálculo de progresso
const results = modules.map(mod => {
  const modPath = path.join(__dirname, mod.name);

  if (!fs.existsSync(modPath)) {
    return { label: mod.label, percent: 0 };
  }

  const leafDirs = getLeafDirs(modPath);

  const completed = leafDirs.filter(dir =>
    fs.existsSync(path.join(dir, 'exercicio-concluido.md'))
  ).length;

  const percent = leafDirs.length
    ? Math.round((completed / leafDirs.length) * 100)
    : 0;

  return { label: mod.label, percent };
});

// 📊 dados
const labels = results.map(r => r.label);
const data = results.map(r => r.percent);

// 🎨 gráfico estável (SEM quebra de URL)
const chartConfig = {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      data,
      backgroundColor: '#F8C1D1',
      borderRadius: 8,
      barThickness: 26
    }]
  },
  options: {
    indexAxis: 'y',
    plugins: { legend: { display: false } },
    scales: {
      x: { min: 0, max: 100, ticks: { color: '#999' } },
      y: { ticks: { color: '#333' } }
    }
  }
};

const chartUrl =
  `https://quickchart.io/chart?bkg=transparent&c=${encodeURIComponent(JSON.stringify(chartConfig))}`;

// 📄 atualizar README (SEGURO)
try {
  const readmePath = path.join(__dirname, 'README.md');
  let content = fs.readFileSync(readmePath, 'utf8');

  // 🔒 regex seguros (NUNCA quebram README)
    const badgeRegex =
  /(<!--PROGRESS_BADGES_START-->)[\s\S]*?(<!--PROGRESS_BADGES_END-->)/;

// 🔥 BADGES FIXOS (100% estáveis no GitHub)
const badgesHTML = `
<p align="center">
  <img src="https://img.shields.io/badge/JS-${results[0].percent}%25-ff69b4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/TS-${results[1].percent}%25-ff69b4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Angular-${results[2].percent}%25-ff69b4?style=for-the-badge" />
</p>
`;

content = content.replace(badgeRegex, `$1${badgesHTML}$2`);

  const chartRegex =
    /(<!--PROGRESS_CHART_START-->)[\s\S]*?(<!--PROGRESS_CHART_END-->)/;

  // 📊 gráfico
  const newChart = `
<p align="center">
  <img src="${chartUrl}" alt="Gráfico de Conhecimento" width="65%" />
</p>
`;

  content = content.replace(chartRegex, `$1${newChart}$2`);


  fs.writeFileSync(readmePath, content);

  console.log('✅ README atualizado com segurança total');
  console.log('📊 Progresso:', results);

} catch (err) {
  console.log('❌ Erro:', err.message);
}