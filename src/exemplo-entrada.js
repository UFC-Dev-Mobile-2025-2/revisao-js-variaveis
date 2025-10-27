// Mais informações sobre Readline Sync em: https://www.npmjs.com/package/readline-sync
// outras opções: https://npmtrends.com/prompt-vs-readline-vs-readline-sync

import readlineSync from 'readline-sync';

// Espera uma resposta do usuário
let nome = readlineSync.question('Como se chama? ');
console.log('Oi ' + nome + '!');

// Para rodar o código, use o comando:
// node src/exemplo-entrada.js

// Dica: digite "clear" no terminal para limpar a tela
// ou use o atalho Ctrl + L
