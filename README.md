# 📱 App de Autenticação com Ionic e React

Este projeto é um protótipo de aplicativo web e móvel focado nas telas de autenticação, incluindo **login** e **recuperação de senha**.  
Desenvolvido com **React** e **Ionic**, ele demonstra a estrutura de um app moderno, com componentes reutilizáveis e roteamento.

---

## 🚀 Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para a construção da interface do usuário.  
- **Ionic Framework**: Kit de ferramentas de código aberto para criar aplicativos híbridos de alto desempenho.  
- **TypeScript**: Adiciona tipagem estática, garantindo maior segurança e previsibilidade ao código.  
- **Capacitor**: Permite a execução do aplicativo em plataformas nativas (iOS e Android), além da web.  
- **CSS**: Utilizado para estilização global e de componentes, com uma abordagem de classes reutilizáveis.  

---

## 📦 Instalação e Execução

Para rodar o projeto em sua máquina local, siga estes passos:

### 1. Clone o repositório
```bash
git clone https://github.com/FelipeBritoSP10/mobile-auth-hub
cd mobile-auth-hub
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento
```bash
ionic serve
```
O aplicativo será aberto automaticamente no seu navegador padrão.

## 📁 Estrutura de Arquivos

A estrutura de pastas foi organizada para facilitar a escalabilidade e a manutenção do projeto:

```plaintext
mobile-auth-hub/
│-- src/
│   │-- pages/
│   │   │-- LoginPage/
│   │   │   │-- LoginPage.tsx
│   │   │-- ForgotPassword/
│   │   │   │-- ForgotPasswordPage.tsx
│   │-- theme/
│   │   │-- variables.css
│   │   │-- global.css
│   │-- App.tsx
│   │-- main.tsx
│-- package.json
│-- tsconfig.json
│-- vite.config.ts
│-- README.md
---
```

# 💻 Funcionalidades Implementadas

### 🔑 Tela de Login (`LoginPage.tsx`)
A tela de login permite que o usuário se autentique no sistema.  
Funcionalidades principais:
- 📧 **Formulário de entrada** para e-mail e senha.  
- 🎨 **Botão "Entrar"** com gradiente de cor.  
- 🔗 **Link "Esqueceu sua senha?"** redirecionando para a tela de recuperação.  
- 🆕 **Link "Registre-se"** para criação de uma nova conta.  

---

### 🔐 Tela de Recuperação de Senha (`ForgotPasswordPage.tsx`)
Página dedicada ao processo de redefinição de senha.  
Funcionalidades principais:
- ✉️ **Campo para inserção do e-mail** do usuário.  
- 📩 **Botão "Enviar Link"** para iniciar o processo de recuperação.  
- ↩️ **Link "Voltar para o Login"**, permitindo retorno rápido à tela inicial.

---

### 🎨 Estilização

Os estilos foram aplicados de forma modular e reutilizável, utilizando classes CSS para garantir consistência visual em toda a aplicação.

Exemplos de classes:

.login-card

.login-button

.input-field-wrapper

Essas classes são compartilhadas entre as páginas para manter a identidade visual.

### 📱 Recursos Extras do App

🌐 Compatível com web, Android e iOS via Capacitor.

🔒 Segurança com campos de senha ocultos e validação mínima.

🎨 Design responsivo para diferentes tamanhos de tela.

⚡ Componentes reutilizáveis para acelerar o desenvolvimento de novas telas.

### 🤝 Contribuição

Contribuições são sempre bem-vindas! Siga estas etapas para contribuir:

- Faça um fork do projeto.

- Crie uma nova branch para sua feature:

```bash
git checkout -b feature/minha-nova-feature
```

# Faça suas alterações e commit:
```bash
git commit -m 'feat: Adiciona nova funcionalidade'
```

# Envie para a sua branch:
```bash
git push origin feature/minha-nova-feature
```

# Abra um Pull Request no GitHub.
