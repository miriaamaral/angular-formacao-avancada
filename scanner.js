const fs = require('fs');
const path = require('path');

// 1. Configuração dos módulos (ajuste os nomes conforme suas pastas)
const modules = [
  { name: 'Modulo-JavaScript', label: 'JS' },
  { name: 'Modulo-TypeScript', label: 'TS' },
  { name: 'Modulo-Angular', label: 'Angular' }
];

function updateReadme() {
  const results = modules.map(mod => {
    const modPath = path.join(__dirname, mod.name);
    if (!fs.existsSync(modPath)) return { label: mod.label, percent: 0 };

// Pega todas as subpastas do módulo
    const topics = fs.readdirSync(modPath).filter(file => 
      fs.statSync(path.join(modPath, file)).isDirectory()
    );

    // Conta quantas têm o arquivo marcador
    const completed = topics.filter(topic => 
      fs.existsSync(path.join(modPath, topic, 'exercicio-concluido.md'))
    ).length;

    const percent = topics.length > 0 ? Math.round((completed / topics.length) * 100) : 0;
    return { label: mod.label, percent };
  });

  // 2. Formata os dados para a URL do QuickChart
  const labels = results.map(r => r.label);
  const data = results.map(r => r.percent);

const chartUrl = `https://quickchart.io/chart?bkg=08080C&c={type:'radar',data:{labels:['${labels.join("','")}'],datasets:[{label:'Progresso %',data:[${data.join(',')}],backgroundColor:'rgba(248,193,209,0.2)',borderColor:'%23F8C1D1',pointBackgroundColor:'%23F8C1D1'}]},options:{scales:{r:{suggestedMin:0,suggestedMax:100,angleLines:{color:'rgba(255,255,255,0.1)'},grid:{color:'rgba(255,255,255,0.1)'},pointLabels:{fontColor:'%23ffffff',fontSize:14},ticks:{display:false}}}}}`;
 
// ... (mantenha o início igual)

// 3. Lê o README e substitui a linha do gráfico
let readmeContent = fs.readFileSync('README.md', 'utf8');

// ESTE REGEX É O SEGREDO: Ele procura apenas o que está entre as tags de comentário
const regex = /[\s\S]*/;

const newChartTag = `\n<p align="center">\n  <img src="${chartUrl}" alt="Gráfico de Conhecimento" />\n</p>\n`;

if (regex.test(readmeContent)) {
  readmeContent = readmeContent.replace(regex, newChartTag);
  fs.writeFileSync('README.md', readmeContent);
  console.log('✅ README.md atualizado com novo gráfico!');
} else {
  // Se não encontrar as tags, o script avisa você em vez de estragar o arquivo
  console.log('⚠️ Erro: As tags não foram encontradas no README.md');
}
}