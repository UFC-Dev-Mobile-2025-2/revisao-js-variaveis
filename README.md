# 🎯 Tarefa - Variáveis - Descrição

# Variáveis

<!-- toc -->

-   [O que é uma variável?](#o-que-é-uma-variável)
-   [Declarando uma variável](#declarando-uma-variável)
-   [Inicializando uma variável](#inicializando-uma-variável)
-   [A diferença entre `var` e `let`](#a-diferença-entre-var-e-let)
-   [E o `const` ?](#e-o-const-)
-   [Atualizando uma variável](#atualizando-uma-variável)
-   [Um adendo sobre regras de nomeação de variáveis](#um-adendo-sobre-regras-de-nomeação-de-variáveis)
-   [Formatação de Strings](#formatação-de-strings)
-   [Tarefa](#tarefa)
-   [Referências](#referências)

<!-- toc -->

## O que é uma variável?

Uma variável é um container para um valor, como um número que podemos usar em uma operação de adição, ou uma sequência de texto que possamos usar como parte de uma oração. Mas uma coisa especial a respeito das variáveis é que seu conteúdo pode mudar.

Outra coisa especial sobra as variáveis é que elas podem conter praticamente qualquer coisa — não apenas cadeias de texto e números. Variáveis também podem conter dados complexos e até mesmo funções completas para fazer coisas incríveis. Você irá aprender mais sobre isso a medida que continuarmos.

> **Nota**: Perceba que as **variáveis contém valores**. Essa é uma distinção importante a se fazer. Elas não são os valores; e sim os containers para eles. Você pode pensar nelas sendo pequenas caixas de papelão nas quais você pode guardar coisas..

![Caixas como variáveis](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/Variables/boxes.png)

## Declarando uma variável

Para usar uma variável primeiro tem que criá-la — mais precisamente, chamamos isso de declarar a variável. Para fazê-lo digitamos a palavra chave var seguido do nome que desejamos dar à variável:

```js
let meuNome;
let minhaIdade;
```

> **Nota**: No JavaScript, todas as instruções em código deve terminar com um ponto e vírgula (`;`) — seu código pode até funcionar sem o ponto e vírgula em linhas únicas, mas provavelmente não irá funcionar quando estiver escrevendo várias linhas de código juntas. Tente pegar o hábito de sempre incluir o ponto e vírgula.

Após a declaração, as variáveis são containers vazios. Quando você insere o nome de uma variável, você deve obter em retorno ou um valor _undefined_ (indefinido), ou se a variável não existir, você recebe uma mensagem de erro.

> **Nota**: O valor _undefined_ é um valor especial que significa que a variável foi declarada, mas ainda não tem um valor definido. Isso é diferente de uma variável que não existe, que resulta em um erro.

## Inicializando uma variável

Uma vez que você declarou uma variável, você pode inicializá-la com um valor. Você faz isso digitando o nome da variável, seguido do sinal de igual (`=`) e o valor que deseja atribuir a ela. Por exemplo:

```js
meuNome = 'Frida';
minhaIdade = 29;
```

Você pode declarar e inicializar uma variável ao mesmo tempo, assim:

```js
let meuNome = 'Frida';
let minhIdade = 29;
```

Isso provavelmente é como irá fazer na maioria das vezes, já que é mais rápido do que fazer as duas ações em duas linhas separadas.

## A diferença entre `var` e `let`

Em JavaScript ou TypeScript, você pode criar variáveis usando as palavras-chave `let`, `var` e `const`.

Tanto `let` quanto `var` são palavras-chave usadas para declarar variáveis, `let` é similar a var em alguns aspectos, mas evita que alguns usuários caiam em momentos “te peguei”.

As razões são um tanto históricas. Quando o JavaScript foi criado, havia apenas `var`. Isso funciona basicamente bem na maioria dos casos, mas tem alguns problemas na maneira como funciona. Portanto, `let` e `const` foram criados nas versões modernas de JavaScript para corrigir seus problemas no processo.

1. **Escopo de Bloco:**

    - **var:** Declarações var possuem regras de escopo estranhas para aqueles acostumados com outras linguagens. As variáveis declaradas com `var` têm escopo de função ou escopo global. Isso significa que declarações var são acessíveis em qualquer lugar dentro da função, módulo, namespace ou escopo global em que estão contidas - o que iremos ver mais à frente - independente do bloco contido. Algumas pessoas chamam isso escopo-var ou escopo de função. Essas regras de escopo podem causar muitos tipos de erros. Um problema que elas deixam exacerbado é o fato de que não é um erro declarar a mesma variável várias vezes.

    - **let:** Quando uma variável é declarada usando `let`, usa-se o que alguns chamam de _escopo léxico_ ou _escopo de bloco_. As variáveis declaradas com `let` têm escopo de bloco, o que significa que elas só são acessíveis dentro do bloco onde foram declaradas, seja um bloco de função, um loop `for`, uma condicional `if`, etc.

    Veja os exemplos em `src/exemplo-variaveis.js`.

2. **Hoisting (Elevação):**

    - **var:** Variáveis declaradas com `var` são elevadas para o topo do escopo em que foram definidas. Isso permite que você as acesse antes de sua declaração no código, mas pode levar a comportamentos inesperados se não for cuidadoso.
    - **let:** Variáveis declaradas com `let` não são elevadas (hoisted) para o topo do escopo. Isso significa que você não pode acessar uma variável `let` antes de sua declaração no código.

    Veja os exemplos em `src/exemplo-hoisting-variaveis.js`.

Em resumo, a preferência em TypeScript é usar `let` em vez de `var`, pois `let` é mais seguro em termos de escopo e ajuda a evitar erros sutis que podem ocorrer devido ao hoisting e ao escopo global compartilhado das variáveis `var`.

## E o `const` ?

Muitas linguagens de programação têm o conceito de constant — um valor que uma vez declarado não pode ser alterado. Há muitas razões pelas quais você deseja fazer isso, desde segurança (se um script de terceiros alterou esses valores, poderia causar problemas) até a depuração e a compreensão do código (é mais difícil alterar acidentalmente valores que não devem ser alterados e bagunçar as coisas).

Nos primeiros dias do JavaScript, não existiam constants. No JavaScript moderno, temos a palavra-chave const, que nos permite armazenar valores que nunca podem ser alterados:

```js
const diasNaSemana = 7;
const horasNoDia = 24;
```

`const` funciona exatamente da mesma maneira que let, exceto que você não pode atribuir um novo valor a `const`. No exemplo a seguir, a segunda linha geraria um erro:

```js
const diasNaSemana = 7;
diasNaSemana = 8; // erro
```

## Atualizando uma variável

Uma vez que uma tenha um valor atribuído, você pode atualizar esse valor simplesmente dando a ela um valor diferente. Tente inserir as seguintes linhas no seu console:

```js
meuNome = 'Frida Kahlo';
```

## Um adendo sobre regras de nomeação de variáveis

Você pode nomear uma variável praticamente qualquer nome que queira, mas há limitações. Geralmente você deve se limitar a utilizar somente caracteres latinos (0-9, a-z, A-Z) e o caractere underline ( \_ ).

1. Você não deve usar outros caracteres porque eles podem causar erros ou ser difíceis de entender por uma audiência internacional.
2. Não use underline no início do nome de variáveis — isso é utilizado em certos construtores JavaScript para significar coisas específicas, então pode deixar as coisas confusas.
3. Não use número no início do nome de variáveis. Isso não é permitido e irá causar um erro.
   Uma convenção segura é se ater à chamada "lower camel case", onde você junta várias palavras, usando minúscula para a primeira palavra inteira e, em seguida, maiusculiza a primeira letra das palavras subsequentes.
4. Faça nomes de variáveis intuitivos, para que descrevam o dado que ela contém. Não use letras ou números únicos, ou frases muito longas.
5. As variáveis diferenciam letras maiúsculas e minúsculas — então `minhaidade` é uma variável diferente de `minhaIdade`.
6. Um último ponto — você também precisa evitar utilizar palavras reservadas pelo JavaScript como nome para suas variáveis — com isso, queremos dizer as palavras que fazem parte da sintaxe do JavaScript! Então você não pode usar palavras como var, function, let e for como nome de variáveis. Os navegadores vão reconhecê-las como itens de código diferentes e, portanto, você terá erros.

Exemplos de bons nomes:

```js
idade;
minhaIdade;
inicio;
corInicial;
valorFinalDeSaida;
audio1;
audio2;
```

Exemplos ruins de nomes:

```js
1
a
\_12
minhaidade
MINHAIDADE
var
Document
skjfndskjfnbdskjfb
esseeumnomedevariavelbemlongoeestupido
```

## Formatação de Strings

Em TypeScript, você pode formatar strings de várias maneiras usando strings de modelo (template strings) e concatenação. Aqui estão algumas abordagens comuns para formatar strings:

1. **String de Modelo (Template String):**
   As strings de modelo são uma maneira conveniente de formatar strings, permitindo que você insira valores diretamente em uma string usando a sintaxe `${}`.

```js
const nome = 'Alice';
const idade = 30;

const mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(mensagem); // "Olá, meu nome é Alice e tenho 30 anos."
```

2. **Concatenação de Strings:**
   Você também pode usar a concatenação de strings para formatar strings, juntando diferentes partes com o operador `+`.

```js
const saudacao = 'Olá, ';
const nome = 'Bob';

const mensagem = saudacao + nome + '!';
console.log(mensagem); // "Olá, Bob!"
```

## Tarefa

1. Crie um programa que pergunta o que você comeu no café da manhã e apresenta a resposta na tela.
   Use o arquivo `src/main.js` para implementar a solução.

Para compilar e executar o programa:

```bash
npm start
```

2. Suba seu código para o repositório.

```bash
git status
git add .
git status
git commit -m "feat: solução da tarefa"
git status
git log
git push
```

3. Finalize esta atividade no Google Classroom.

## Referências

[qxcodefup/arcade](https://github.com/qxcodefup/arcade)  
[Variáveis (mdn web docs)](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/Variables)  
[Entenda a diferença entre var, let e const no JavaScript (Alura)](https://www.alura.com.br/artigos/entenda-diferenca-entre-var-let-e-const-no-javascript)
