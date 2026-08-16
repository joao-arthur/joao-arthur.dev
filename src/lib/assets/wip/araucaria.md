rust is a rigid language. data is structured in structs, não por acaso. outra característica da
linguagem é a ausencia de reflexão, o que dificulta a construção de comportamento dinâmico em
relação aos structs. serde e serde_json conseguem na prática emular o comportamento esperado por
reflection, permitindo aos programadores transformar o json de requisições http em structs. pois
bem.

quando uma requisição é feita pra um servidor, enviando dados, pensando em um modelo REST, temos as
seguintes etapas, todas nessa ordem:

- Verificação da validade da sessão
- verificação de que o usuário existe
- Verificação da permissão do usuário acessar aquela rota
- validacão do conteúdo enviado pelo usuário

pensando na validação do conteudo, caso alguma propriedade esteja faltando ou com tipo de dado
errado, o servidor pode simplesmente estourar um erro, avisando que o json enviado foi inválido.
isso é o comportamento adotado pela maioria das aplicações, que optam, ao invés disso por documentar
as suas apis usando ferramentas como swagger.

Eu optei por uma outra alternativa, pensando na experiencia do usuário da api, retornar erros que
indiquem exatamente o que o usuário enviou de errado, de forma programática.

eu poderia ter usado json schemas para isso, porém json schemas tem o propósito de definir os campos
presentes em um endpoint. é possível criar validações avançadas usando json schemas, mas é muuuuuito
difícil.

araucaria é uma biblioteca que provê uma alternativa que permite validar os campos e os seus valores
em uma mesma operação, retornando o que o usuário fez de errado.
