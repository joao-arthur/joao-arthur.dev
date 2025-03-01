---
title: "Arquitetura e Mercado"
description: "A arquitetura reutilísável já se provou poderosa. Por que ninguém usa?"
created_at: "2023-08-11"
updated_at: "2025-02-27"
---

# Arquitetura e Mercado

A arquitetura reutilísável já se provou poderosa. Por que ninguém usa?

## Tecnologia

Um software de verdade depende de várias tecnologias:

- Conexão com **banco de dados**
- Requisições **HTTP**
- Servidores **FTP**
- Mensagens **TCP**
- **Criptografia**
- **Serialização** e **desserialização** em diversos formatos (XML, JSON, YAML, TOML, etc.)

## Interfaces

É possível isolar os conceitos principais de uma aplicação de todo o resto, em uma **camada de
domínio**. Nesse caso, quando é necessário utilizar alguma tecnologia (algo que não faça parte do
domínio da aplicação ou da biblioteca padrão da linguagem de programação), isso é feito através de
interfaces.

Essa abordagem oferece as seguintes vantagens:

- **Foco no domínio:** Permite pensar de forma isolada nas **entidades** e **operações** da
  aplicação, utilizando uma linguagem ubíqua
- **Testabilidade:** A capacidade de testar todo o código do domínio, garantindo um número reduzido
  de bugs
- **Reusabilidade:** O domínio pode ser usado como uma biblioteca em qualquer aplicação: Aplicativo
  desktop, aplicativo mobile, API REST, frontend web, etc.

## Arquiteturas

Várias pessoas já pensaram em arquiteturas que aplicassem esses conceitos. As mais proeminentes são:

- **Arquitetura Hexagonal (Alistair Cockburn):** Prioriza a separação clara entre o núcleo da
  aplicação e as interfaces externas
- **Arquitetura Limpa (Robert Cecil Martin):** Prioriza a independência das camadas
- **Design Dirigido a Domínios (Eric Evans):** Prioriza a modelagem do domínio da aplicação

## Problema Corporativo

No ambiente profissional, o desenvolvimento de software possui um prazo apertado, que obriga os
desenvolvedores a usar o máximo da stack. Isso impede de criar um modelo profundo ou uma arquitetura
reutilizável, acumulando **dívida técnica**.

Quando se passam alguns anos, e o projeto vai ser migrado (de desktop para web, de web para mobile,
etc.), a tendencia natural é ele ser reescrito, reiniciando o mesmo processo.

Um software que possui bugs, ainda vai possuir clientes utilizando, já que a maioria dos bugs está
em rotinas menos utilizadas, de menor importancia para o cliente. Isso significa que uma empresa
pode ganhar mais dinheiro com um software bugado hoje, do que com um software perfeito amanhã, pelo
menos no curto prazo.

## Conclusão

Arquiteturas que alavancam o valor de um software também atrasam o desenvolvimento a curto prazo, o
que se torna um objetivo desinteressante para a maioria das empresas.
