---
title: "Interfaces"
description: "Existe alguma forma de tornar um projeto grande fácil de implementar, fácil de testar testar e
com segurança de tipos?"
created_at: "2023-08-12"
updated_at: "2025-02-27"
technologies:
  - "JavaScript"
  - "TypeScript"
  - "Java"
  - "Rust"
---

# Interfaces

Existe alguma forma de tornar um _projeto grande_ fácil de _implementar_, fácil de testar _testar_ e
com _segurança de tipos_?

## Tipos De Dado

Em qualquer linguagem de programação, dados possuem tipo. Números, texto, binários, todos eles
possuem um _tipo específico_. Da mesma forma, um objeto pode ser definido por um tipo, referido como
_interface_ na maioria das linguagens.

> Uma interface é um conjunto de operações com argumentos e tipagem de retorno.

Isso permite:

- Múltiplas implementações
- Esconder a injeção de dependências
- Plain objects testáveis

## Por que?

```ts
export type CriarUsuarioServico = {
    criar: (
        usuario: UsuarioCriar,
        validador: UsuarioValidador,
        geradorId: GeradorId,
        geradorSenha: GeradorSenha,
        repositorio: UsuarioRepositorio,
    ) => Promise<User>;
};

export const criarUsuarioServicoReal: CriarUsuarioServico = {
    criar: (
        usuario: UsuarioCriar,
        validador: UsuarioValidador,
        geradorId: GeradorId,
        geradorSenha: GeradorSenha,
        repositorio: UsuarioRepositorio,
    ) => {/* omitted */},
};

export const criarUsuarioServicoStub: CriarUsuarioServico = {
    criar: () => Promise.resolve(userStub),
};

export const criarUsuarioServicoErroStub: CriarUsuarioServico = {
    criar: () => {
        throw new Error();
    },
};
```

> Exemplo de um serviço para criar um usuário, que também exporta os seus _stubs_

Qualquer função que receba um argumento do tipo **CriarUsuarioServico** pode ser testada usando
**criarUsuarioServicoStub** e **criarUsuarioServicoErroStub** ao invés de mockar todas as
dependências. Isso abstrai a implementação e permite você pensar apenas em **entrada** e **saída**.

## Armadilhas

- Se você aplicar interfaces exaustivamente, a indireção do código torna difícil seguir o código.
  Como uma boa prática, use interfaces para: **Recursos externos** (requisições HTTP, conexão com
  bancos de dados...) e **injeção de dependência** (Quando os recursos são passados via argumentos
  da função, exatamente como no exemplo anterior)

- Existe depois problemas que um sistema de tipos pode não cobrir:

  - **Valores null**
  - **Gerenciamento de erros**

## Linguagem Por Linguagem

Veja o seguinte exemplo em _JavaScript_:

```js
async function criarUsuario(
    usuario,
    repositorio,
) {
    if (!repositorio) {
        throw new Error("repositorio é obrigatório!");
    }
    return repositorio.salvar(usuario);
}
```

Para poder comparar esse código com outras linguagens, suponha:

- **repositorio** pode ser null
- **repositorio** pode lançar um erro
- **usuario** é um argumento obrigatório
- Se **usuario** for corretamente salvo, o usuário salvo é retornado

### TypeScript

TypeScript supporta união de tipos, o que permite tipar valores obrigatórios e nulos:

```ts
function criarUsuario(
    usuario: Usuario,
    repositorio: UsuarioRepositorio | null,
): BDUsuario {
    if (!repositorio) {
        throw new Error("repositorio é obrigatório!");
    }
    return repositorio.salvar(usuario);
}
```

### Java

Java provê:

- Sintaxe de anotação que permite criar anotações para valores obrigatórios e que podem ser nulos,
  embora não haja uma implementação disso na biblioteca padrão
- Palavra reservada **throws** para tornar o gerenciamento de erro explícito
- _Mockito_ e bibliotecas similares para mockar injeção de dependências em tempo de execução

```java
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public BDUsuario criarUsuario(
    @NotNull Usuario usuario,
    @Nullable UsuarioRepositorio repositorio
) throws RepositorioException, Exception {
    if (repositorio == null) {
        throw new Exception("repositorio é obrigatório!");
    }
    return repositorio.salvar(usuario);
}
```

### Rust

Rust possui um sistema de tipos único, porque possui:

- Ausência de ponteiro _null_
- Estrutura de dado _Option_ para lidar com valores presentes ou ausentes
- Estrutura de dado _Result_ para lidar com valores de sucesso ou erro

_Option_ e _Result_ são enums, e como Rust obriga a exaustividade de enums, isso obriga o
desenvolvedor a lidar com cada cada caso:

```rust
enum CriarUsuarioErr {
    Repo(RepoErr),
    RepoNaoInformado(RepoNaoInformadoErr)
}

pub fn criar_usuario(
    usuario: Usuario,
    repo: Option<UsuarioRepo>,
) -> Result<BDUsuario, CriarUsuarioErr> {
    match repo {
        Some(r) => r
            .salvar(usuario)
            .map_err(|e|
                CriarUsuarioErr::Repo(
                    e
                )
            ),
        None => Err(
            CriarUsuarioErr::RepoNaoInformado(
                RepoNaoInformadoErr
            )
        ),
    }
}
```

## Conclusão

Quanto mais rigoroso o sistema de tipos de uma linguagem de programação, menos suscetível a erros e
mais verboso será o código. **Interfaces** são ferramentas poderosas, mas que podem **esconder erros
e valores nulos**, de acordo com a linguagem de programação.

A escolha de como lidar com essas limitações vai depender principalmente de qual a tolerancia a bugs
do projeto, porém objetivamente, um software com menos bugs é **melhor**.
