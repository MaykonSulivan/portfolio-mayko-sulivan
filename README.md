# Portfólio Profissional — React + TypeScript

Site responsivo com apresentação, projetos, serviços, sobre e contato. Não depende de backend.

## 1. Personalizar antes de publicar

Abra **`src/config.ts`**. O nome Mayko Sulivan e o WhatsApp 55 92 99148-9340 já estão configurados. Preencha `email`, `github` e `linkedin` quando quiser. O WhatsApp deve conter apenas números, incluindo 55 e DDD.

Os quatro projetos são **descrições para portfólio** baseadas nos trabalhos citados na conversa. Confira as descrições e publique detalhes de sistemas corporativos somente com autorização. Não exponha API keys, sistemas internos, nomes de clientes ou dados reais.

## 2. Abrir no VS Code

Requisitos: Node.js 20.19+ (ou 22+), npm.

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo terminal, normalmente `http://localhost:5173`.

## 3. Testar e gerar versão final

```bash
npm run build
npm run preview
```

A pasta `dist` será gerada durante o build.

## 4. Publicar na Vercel

1. Crie um novo repositório no GitHub exclusivo para este portfólio (não reutilize o repositório corporativo Gemba Vision).
2. Envie os arquivos da pasta deste projeto para o repositório.
3. Na Vercel, clique em **Add New > Project** e importe o repositório.
4. Framework: **Vite**; Build Command: `npm run build`; Output Directory: `dist`.
5. Clique **Deploy**.

## Observações

- O formulário não existe: o botão de orçamento abre WhatsApp **se informado** ou e-mail como alternativa.
- O e-mail está em branco; o botão de e-mail só aparece depois que você informar um endereço.
- Telas dos projetos são ilustrações em CSS, não capturas das ferramentas reais.
- Os números na interface de demonstração são decorativos, não dados de produção reais.