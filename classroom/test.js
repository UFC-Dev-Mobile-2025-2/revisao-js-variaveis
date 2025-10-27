import { execSync } from 'child_process';

let passed = 0;
const total = 1;

console.log(
    '\n---------------------------\n\n🔍 Iniciando verificação da atividade...\n'
);

// Teste 1: Verifica o main.js
try {
    // testa se roda

    const output = execSync('npm start').toString();
    if (output) {
        passed++;
        console.log('✅ main.js: código rodando corretamente.');
    }
} catch (e) {
    console.log('❌ main.js: Erro: ' + e.message);
}

// Resultado final
console.log(
    `\n\n🎯 Resultado: ${passed}/${total} testes passaram.` +
        '\n\n---------------------------\n\n'
);

// Código de saída para GitHub Classroom
process.exit(passed === total ? 0 : 1);
