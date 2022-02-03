# Exercício 1
**a) Nesta tabela, utilizamos o `FLOAT` para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela. Explique os demais comandos que estão nessa query.**
R= nessa mesma variavel tem o not null expecificando que ela não pode ser nula,
no id e name, o varcha significa que eles so pode receber strings de no maximo 255 caracters. onde o id é a primary key, o identificador e o name não pode ser nullo. tambem tem birth_date que dever ser uma data e nao pode ser nula, e o genero que deve receber uma string de no maximo 6 caracteres e nao pode ser nula.

**b) O comando `SHOW` é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.**
R= SHOW DATABASES mostrao banco de dados que estou atualmente, e `SHOW TABLES mostra a tabela actor
**c) O comando `DESCRIBE` pode ser usado para ver estrutura de uma tabela. Utilize o comando  `DESCRIBE Actor` e explique os resultados.**
R= mostra od dados da tabela base,os tipos e s valores padroes iniciais.

# Exercicio 2
**a) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963**

**b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior `002`. Isso gerará um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.**
*R= deu um erro de entrada duplicada, no caso de dois ids iguais, deu conflito pois ja existe um actor com esse id na tabela
**c)Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esses erros aconteceram. Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta**
*R= 1 erro aconteceu pois os nomes das colunas declarados no insert nao condizem com os valores que estou passando.*
**d)**
*R=faltou passar a coluna e o valor de nome*
**e)**
*R= o formato da data está errado, não esta sendo passando em valta de aspas*
**f) Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.**
*R=ok*
# Exercicio 3
**a) *Escreva uma query que retorne todas as informações das atrizes**
*R=SELECT * from Actor WHERE gender = "female"*
**b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos**
*R= SELECT salary from Actor Where name="Tony Ramos"*
**c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.**
*R=SELECT * From Actor WHERE gender = "invalid" retornou tudo nulo pois não tem nenhum valor na tabela correspondente a condição*
**d) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000**
*R=SELECT id,name,salary From Actor where salary<=500000;*
**e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta**
*R=aconteceu pois a coluna nome não existe e sim a name. SELECT id, name from Actor WHERE id = "002";*
# Exercicio 4
*SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000*
**a) *Explique com as suas palavras a query acima**
*R=é uma query que seleciona todas as colunas que tiverem nome que comecem com A ou J e com salario maior que 300000*
**b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00**
*R= SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;*
**c) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.**
*R= SELECT * FROM Actor WHERE name LIKE "%g%" OR  name LIKE "%G%";*
**d) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00**
*R= SELECT *FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000*

# Exercicio 5
*R= ok, feitos*

# Exercicio 6
**a) Retorne o id, título e avaliação a partir de um id específico;**
*R=SELECT id, title, rating FROM Movie WHERE id="002";*
**b) Retorne um filme a partir de um nome específico;**
*R= SELECT * FROM Movie WHERE title="Se Eu Fosse Você"*
**c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7**
*R= SELECT id, title, synopsis FROM Movie WHERE rating>=7;*

# Exercicio 7
**a) Retorna um filme cujo título contenha a palavra vida**
*R= SELECT * FROM Movie WHERE title LIKE "%vida%"*
**b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.**
*R= SELECT * FROM Movie WHERE title LIKE "%anos%" OR synopsis LIKE "%anos%";*
**c) Procure por todos os filmes que já tenham lançado**
*R= SELECT * FROM Movie WHERE release_date < CURDATE();*
**d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que `7`.**
*R= SELECT * FROM Movie WHERE release_date < CURDATE() AND  (title LIKE "%vida%" OR synopsis LIKE "%vida%") AND rating > 7;*