# Introdução ao React

## O que é ReactJS?

**O ReactJS é uma biblioteca JavaScript para construção de interfaces de usuário interativas. Ele utiliza uma abordagem declarativa, onde você define como a interface deve ser, e o React se encarrega de atualizar o DOM (Document Object Model) do navegador para refletir essa interface.**

### Processo de renderização:

- **Compilação JSX:** O código JSX (JavaScript e XML) é compilado para JavaScript puro usando o Babel. O Babel converte a sintaxe JSX em chamadas de funções JavaScript que criam elementos DOM.
- **Criação da árvore virtual:** O React cria uma árvore virtual do DOM (Virtual Document Object Model) a partir dos elementos JavaScript criados na etapa anterior. A árvore virtual é uma representação leve e eficiente da interface do usuário.
- **Diferença entre árvores:** O React compara a árvore virtual atual com a árvore virtual anterior (se houver) para determinar quais partes da interface do usuário precisam ser atualizadas.
- **Atualização do DOM real:** O React aplica as mudanças mínimas necessárias ao DOM real do navegador para sincronizá-lo com a árvore virtual atualizada. Isso otimiza o desempenho e evita atualizações desnecessárias.

### Conceitos-chave:

- **Componentes:** São blocos de construção reutilizáveis ​​que definem uma parte da interface do usuário.
- **Estado:** O estado interno de um componente pode ser usado para controlar como ele se comporta e renderiza.
- **Props:** São propriedades passadas de um componente para outro para personalizar seu comportamento.
- **Ciclo de vida:** Os componentes têm um ciclo de vida definido com diferentes métodos que são chamados em momentos específicos, como `componentDidMount` e `componentWillUnmount`.

### Fragments

**Em um componente React, você pode frequentemente precisar retornar vários elementos JSX. No entanto, o React espera que uma função de renderização retorne um único elemento raiz.** É aqui que entram os fragmentos do React.

**Quando usar fragments?**

- **Retorno de vários elementos:** Quando sua função de renderização precisa retornar vários elementos filhos, use fragmentos para agrupá-los sem adicionar um elemento DOM extra.
- **Evitar elementos desnecessários:** Em alguns casos, você pode precisar agrupar elementos para fins de renderização condicional ou lógica, mas não deseja introduzir um elemento desnecessário na árvore de componentes. Fragmentos ajudam a manter a estrutura do código limpa.

### CSS-in-Js

CSS-in-Js faz muito sentido, porque aproveita métodos atuais de componentização em JavaScript para criar componentes **performáticos** à **prova de colisão**.

E tudo isso é extremamente automatizado.

#### Styled Components

Foi desenvolvido para melhorar a maneira que lidamos com CSS nos componentes de aplicações React.

**Vantagens:**

- **Desempenho:** Como funciona diretamente nos componentes, ele consegue analisar facilmente quais códigos serão ou não usados, inclusive os que são adicionados após interação do usuário. O que também ajuda a diminuir o código final.

- **Estilo dinâmico:** permite adaptar os estilos baseando nas props recebidas, é possível criar estilos dinâmicos de forma fácil e intuitiva.

- **Manutenção sem dor:** Tudo que você precisa vai estar no próprio contexto do componente, facilitando encontrar tudo o que você precisa para o desenvolvimento.

- **Boas práticas:** Você escreve seu CSS no melhor padrão do mercado e pronto, os componentes cuidam para fornecer suporte para browsers antigos.
