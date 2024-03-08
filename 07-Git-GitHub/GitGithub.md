# Git

**O Git é um sistema de controle de versões distribuído e um sistema de gerenciamento de código fonte, com ênfase em velocidade.**
O Git foi inicialmente um projeto projetado para o desenvolvimento do Kernel Linux, mas foi adotado por muitos outros projetos e atualmente é o controlador de versões mais utilizado.

### Como funciona o Git

![Git 01](./git01.png)

A linha horizontal representa a **linha do tempo** do projeto e ccada círculo verde representa um **commit**, que é uma captura instantânea do estado do seu projeto em um determinado momento.

#### Commits - cada commit armazena:

- O estado de todos os arquivos do seu projeto naquele momento;
- Uma mensagem que descreve as alterações feitas;
- O nome e o email do autor do commit;

### Configurações gerais

```git
git config --global user.name "nome"
Configura o nome do usuário para o Git em um nível global.
```

####

#### Subindo um repositório para o GitHub

```git
git init

# Adiciona todos os arquivos modificados ao staging area
git add .

# Cria um commit com as alterações
git commit -m "Meu primeiro commit"

# Cria e muda para a branch main
git branch -M main

# Adiciona o repositório remoto do GitHub
git remote add origin [URL_DO_SEU_REPOSITÓRIO]

# Envia as alterações para o repositório remoto
git push-u origin main
```

---

# Github

**O GitHub é uma plataforma online que combina o sistema de controle de versão Git com recursos de rede social para desenvolvedores.**

### Funcionalidades:

**Controle de versão:** Armazene e monitore o histórico de alterações do seu código;
**Colaboração:** Trabalhe em projetos com outros desenvolvedores, mesmo que estejam em locais diferentes;
**Comunidade:** Conecte-se com milhões de desenvolvedores de todo o mundo, participe de projetos de código aberto e compartilhe seu conhecimento;
**Gerenciamento de projetos:** Utilize ferramentas para organizar e acompanhar o progresso do seu projeto;
