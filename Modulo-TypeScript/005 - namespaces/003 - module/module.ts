// Módulos em JavaScript ou TYpeScript é uma forma de você compartilhar informações entre arquivos
// todos os arquivos que realizarem a importação desse módulo padrão utilizar e usufruir
// de suas funções ou informações que forem expostas.

// import = importa informações de uma classe, namespaces, const, let, etc.
// export = exporta para outras pessoas consumirem informações.


import { Pessoa1 } from "./pessoa1";
import { Pessoa } from "./namespace-aninhados";

export { Pessoa1, Pessoa };