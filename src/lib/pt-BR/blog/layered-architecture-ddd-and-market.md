---
title: "Arquitetura Limpa, DDD e Mercado"
description: "Se Arquitetura Limpa e DDD fornecem muitas vantagens, por que não está todo mundo usando?"
created_at: "2023-08-11"
updated_at: "2025-02-20"
---

# Arquitetura Limpa, DDD e Mercado

Se **Clean Architecture** e **DDD** fornecem muitas vantagens, por que não está todo mundo usando?

## Código

Software real depende de tecnologia: Conexão com banco de dados, requisições **HTTP**, servidores
**FTP**, mensagens **TCP**, **criptografar** dados, para citar algumas. Em uma perspectiva de
arquitetura em camadas, tudo isso é detalhe, e uma aplicação é essencialmente as **entidades** e as
**operações**. Essa abordagem, porém, leva tempo para ser implementada.

```bash
.
└── todo_app
    ├── aplicacao
    │   └── controlador
    │       ├── todo
    │       └── usuario
    ├── domain
    │   ├── todo
    │   │   ├── atualizar
    │   │   ├── criar
    │   │   ├── excluir
    │   │   └── ler
    │   └── usuario
    │       ├── acessar
    │       ├── atualizar
    │       └── criar
    ├── infra
    │   ├── banco_de_dados
    │   ├── gerador_id
    │   ├── gerador_senha
    │   ├── http
    │   └── validador_schema
    └── principal
```

> Árvore de uma aplicação de _lista todo_ aplicando _arquitetura em camadas_.

## Stack

Em corporações, software possui um prazo apertado que obriga os desenvolvedores a usar o máximo da
stack, sem tempo para criar um modelo mais profundo ou uma arquitetura reutilizável. A consequência
é que quando é necessário migrar de uma tecnologia para outra, o projeto é reescrito. Isso é
particulamente verdade no desenvolvimento web, que passou por vários períodos diferentes, com
**HTML** plano, então **JavaScript**, então **JSF** e **applets**, então **JQuery**, então
**React**.

## Conclusão

Isso ocorre porque companhias lucram mais com software bugado hoje, do que com um software que
funciona amanhã. Esse ciclo não começou hoje e não vai sumir tão cedo. Seus efeitos estão ao nosso
redor, pelo nome de **legado**, e cabe a nós aceitar que software é imperfeito, similar a tudo que
nós criamos.
