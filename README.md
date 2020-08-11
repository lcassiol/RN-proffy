<!-- VARS -->

[logo-url]: https://camo.githubusercontent.com/74c8681f6d4521903b63e79173a72f0b849243be/68747470733a2f2f692e696d6775722e636f6d2f73356c546465502e706e67
[web-badge]: https://img.shields.io/badge/WEB-6842C2?logo=typescript&logoColor=47248F&label=Proffy&labelColor=6842C2&style=for-the-badge
[backend-badge]: https://img.shields.io/badge/BACKEND-04D361?logo=Node.js&logoColor=03A14A&label=Proffy&labelColor=04D361&style=for-the-badge
[mobile-badge]: https://img.shields.io/badge/MOBILE-494949?logo=react&logoColor=161616&label=Proffy&labelColor=494949&style=for-the-badge

<!-- VARS -->

<div align="center">

# ![Proffy][logo-url]

### Plataforma de estudos online, onde é possivel conectar alunos com professores.
[![web][web-badge]](#desktop_computer-web)
[![backend][backend-badge]](#globe_with_meridians-server)
[![mobile][mobile-badge]](#iphone-mobile)

![](https://raw.githubusercontent.com/lcassiol/reactjs-proffy/d2520a09b3918bf260cc8f44a731f6be24bf55e3/src/assets/images/landing.svg)

</div>

---

<div align="center">

# :iphone: _**Mobile**_
[![LAYOUT MOBILE](https://img.shields.io/badge/Layout%20Mobile-black?style=for-the-badge&logo=figma&logoColor=red")](https://www.figma.com/file/e33KvgUpFdunXxJjHnK7CG/Proffy-Mobile?node-id=0%3A1)

</div>

O aplicação mobile foi desenvolvida usando o framework [**React Native**](https://reactnative.dev/) com [**Typescript**](https://www.typescriptlang.org/), e a _SDK 38_ da ferramenta [**Expo**](https://expo.io/).

Home | Study | Favorites
---|---|---
| <img src="https://github.com/lcassiol/RN-proffy/blob/master/src/assets/images/screenshots/proffy-home.png?raw=true" width="350" /> | <img src="https://github.com/lcassiol/RN-proffy/blob/master/src/assets/images/screenshots/proffy-resultsearch.png?raw=true" width="350" /> | <img src="https://github.com/lcassiol/RN-proffy/blob/master/src/assets/images/screenshots/proffy-favorites.png?raw=true" width="350" /> |

## :arrow_forward: **Getting Started**

```bash
# Instalar expo-cli globalmente
$ yarn global add expo-cli

# Instalar dependências
$ yarn

```

Iniciar expo

```bash
$ expo start
```

- Baixar o aplicativo do Expo diretamente da loja e entao escanear o QR Code OU Iniciar o emulador de sua preferência
- Alterar o arquivo /src/services/api.ts para colocar o ip do backend

> O DevTools do Expo fica aberto por padrão em [`http://localhost:19002`](http://localhost:19002)

---
- Backend: https://github.com/lcassiol/nodejs-proffy
- Web: https://github.com/lcassiol/reactjs-proffy
