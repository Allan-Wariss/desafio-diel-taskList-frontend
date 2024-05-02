# React + TypeScript + Vite

Este modelo fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) utiliza o [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) utiliza o [SWC](https://swc.rs/)  para Fast Refresh

## Baixe as dependências 

Se você está desenvolvendo uma aplicação de produção, recomendamos atualizar a configuração para habilitar regras de lint de tipo consciente:

- Usando o `npm` rode o seguinte comando para baixar as dependências:

```terminal
npm i
```
- Usando o `npm` rode o seguinte para inciar o projeto localmente:

```terminal
npm run dev
```
- Para consumir localmente a API mude a url da host para a local do SpringBoot na pasta `/services` no arquivo `index.tsx`

```index.tsx
import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://localhost:8080', //Caso o consumo seja local da API
    timeout: 10000
});
```

## Acesse sem ser local (Nuvem)

Link: https://desafio-diel-tasklist-frontend-production.up.railway.app
