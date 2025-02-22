---
title: "libre_game_of_life"
description: "Implementação FLOSS do Jogo da Vida de Conway"
license: "GNU AGPLv3"
repository: "https://github.com/joao-arthur/libre_game_of_life"
created_at: "2023-05-07"
updated_at: "2025-02-12"
languages:
  - "Rust"
  - "TypeScript"
technologies:
  - "Web Assembly"
  - "NextJS"
img_url: "/images/libre_game_of_life.png"
app_url: "/app/libre_game_of_life/index.html"
---

# libre_game_of_life

Implementação FLOSS do Jogo da Vida de Conway

> O _Jogo da Vida_ é um autômato celular criado pelo matemático britânico John Horton Conway em 1970

## Regras

O autômato _Jogo da Vida_ ocorre em um grid onde cada célula pode estar ou **viva** ou **morta**. A
cada etapa de tempo, o que determina o estado de cada célula são as seguintes regras:

- **Células vivas** sobrevivem com 2 ou 3 vizinhos vivos
- **Células mortas** se tornam vivas com 3 vizinhos vivos

## Minha implementação

Eu implementei uma versão do _Jogo da Vida_ em _Rust_.

```rust
let grid = HashMap::from([
    (Coordinate::from(0, 1), State::Alive),
    (Coordinate::from(-4, 2), State::Alive),
    (Coordinate::from(7, 3), State::Alive),
]);
```

> No código acima, a implementação da grid do autômato. Um _HashSet_ também iria funcionar **nesse
> cenário**, porque apenas células vivas são consideradas. Porém, algumas variações do Jogo da Vida
> possuem mais estados

Usando um _HashMap_, nós desacoplamos a **grid** e a **renderização**, permetindo a nós renderizar
qualquer parde do grid, aproximar e afastar o zoom, sem afetar o estado atual.

Outro aspecto é que, precisamos de algum **sistema de coordenadas** para identificar uma posição
específica. A mais simples é o **plano cartesiano**, que é o que foi usado.

### Iterando

Para criar a próxima geração, o _HashMap_ atual é percorrido, e para célula viva e seus vizinhos, as
regras são aplicadas. As células vivas resultantes são então salvas em um novo _HashMap_.

### A aplicação

Eu implementei o _Jogo da Vida_ na web, renderizado em um _canvas_. O projeto possui três camadas:

### lib

Uma implementação genérica e reutilizável do _Jogo da Vida_ em _Rust_.

### web_backend

Uma aplicação _Web Assembly_ que funciona como uma ponte entre a _lib_ e o _web_frontend_

### web_frontend

A aplicação do usuário, responsável por renderizar o canvas, as configurações, e inicializar o _Web
Assembly_. Atualmente, as configurações são as seguintes:

- **Preset:** Permite ao usuário escolher entre muitas formas populares (Glider, Blinkder, etc.)
- **Gap:** Uma opção visual, por estética
- **Size:** A quantidade de zoom na tela
- **FPS:** O FPS desejado para a renderização

## Referência

https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
