# Como Publicar no GitHub Pages

## Passo a Passo:

### 1. Criar Repositório no GitHub
- Acesse [github.com](https://github.com) e faça login
- Clique em "New repository"
- Nomeie o repositório (ex: `daniel-lacerda-media-kit`)
- Deixe como público
- Clique em "Create repository"

### 2. Fazer Push do Código
No terminal, execute os comandos:

\`\`\`bash
git init
git add .
git commit -m "Initial commit: Daniel Lacerda Media Kit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/daniel-lacerda-media-kit.git
git push -u origin main
\`\`\`

**Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub**

### 3. Configurar GitHub Pages
1. No repositório do GitHub, vá em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. O deploy será automático após o push!

### 4. Acessar o Site
Após alguns minutos, seu site estará disponível em:
\`\`\`
https://SEU-USUARIO.github.io/daniel-lacerda-media-kit/
\`\`\`

## Atualizações Futuras

Sempre que você fizer alterações:
\`\`\`bash
git add .
git commit -m "Descrição das mudanças"
git push
\`\`\`

O GitHub Actions fará o deploy automaticamente!

## Alternativa: Deploy na Vercel (Recomendado)

Para melhor performance e domínio customizado:
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "Import Project"
4. Selecione o repositório
5. Clique em "Deploy"

Pronto! Seu site estará no ar em segundos com domínio `.vercel.app`
