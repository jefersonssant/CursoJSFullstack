// se no terminal você instalar o pacote com - E, vai remover o ^ antes da versão o que impedirá a atualização automática.

// Exemplo: npm install express -E

// para atualizar os pacotes pode, no terminal: npm update

// para mover o pacote para dependência de desenvolvimento: npm install express --save-dev

// para mover o pacore para dependência: npm install express --save-prod

// para instalar uma versão específica do pacote: npm install express@2.1.0

// 2.    1.    0.
// major minor patch

// correção de bugs, sem inserir coisas novas: atualizar versão no patch: 2.1.1

// adição de recurso novo: atualizar versão no minor: 2.2.0

// quando for quebrar compatibilidade com coisas de versão anteriores: atualizar no major: 3.0.

// ^ vai atualizar na minor e patch, automaticamente

// ~ vai atualizar no patch somente

// no terminal se você utilizar npm install express@4.x vai instalar a última versão 4 do pacote

// para desinstalar o pacote: npm unistall express

// para listar os pacotes que instalou: npm ls --depth=0

// para ver quais pacotes estão desatualizados: npm outdated