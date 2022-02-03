# Exercicio 1
Leia os comandos abaixo e indique o que eles fazem. **Não** **os rode** nas tabelas desse projeto! Explique o que elas fariam **se fossem** rodadas.  Você, provavelmente, terá que fazer algumas pesquisas para responder
**A)ALTER TABLE Actor DROP COLUMN salary;**
R= alteraria a tabela actor e deletaria a coluna salary.
**B)ALTER TABLE Actor CHANGE gender sex VARCHAR(6);**
R=redeclara a coluna gender da tabela actor
**C)ALTER TABLE Actor CHANGE gender gender VARCHAR(255);*
R= redeclara a tabela actor pra que a coluna gender aceite ate 255 caracters
**d) Agora,  altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres**
R= ALTER TABLE Actor  CHANGE gender gender VARCHAR(100);

# Exercicio 2
**a) *Escreva uma query que atualize o nome e a data de nascimento do ator com o id `003`**
R=  UPDATE Actor SET name = "Moacyr Franco", birth_date = "1968-05-12" WHERE id= "003";
**b) Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.**
R= 1-UPDATE Actor  SET name="JULIANA PAES" WHERE name= "Juliana Paes";
2- UPDATE Actor  SET name="Juliana Paes" WHERE name= "JULIANA PAES";
 **c) Escreva uma query que atualize todas as informações do ator com o id 005**
 R=UPDATE Actor SET name="Taís Araujo",birth_date="1978-11-25", salary=200000, gender="female"  WHERE id= "005";
 **d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.**
 R= UPDATE Actor  SET name="Juliana Paes" WHERE id="120";
 ele atualizou mesmo sendo um id que nao existe na tabela, mas quando coloquei uma coluna nao existente ele deu erro dizendo que o campo não existe na lista

 # Exercicio 3
**a) *Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`**
R= DELETE FROM Actor WHERE name="Fernanda Montenegro";
**b) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00**
R= DELETE FROM Actor WHERE gender="male" AND salary >"1000000; 

# Exercicio 4
**a) Escreva uma query que pegue o maior salário de todos os atores e atrizes**
R= SELECT MAX(salary) FROM Actor;
 **b) Escreva uma query que pegue o menor salário das atrizes**
 R= SELECT MIN(salary)  FROM Actor WHERE gender="female";
**c) Escreva uma query que pegue a quantidade de atrizes**
R= SELECT COUNT(*) FROM Actor WHERE gender="female";
**d) Escreva uma query que pegue a soma de todos os salários**
R= SELECT SUM(salary) FROM Actor;

# Exercicio 5
SELECT COUNT(*), gender FROM Actor GROUP BY gender
**a) *Releia a última query. Teste-a. Explique o resultado com as suas palavras*
R=A query retornar duas colunas, uma com a contagem resutante e a outra o que foi contado, entao tem a coluana count e a coluna gender, e a coluna count tem 3 referente a male e 4 referente a female
**b) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética**
R= SELECT id, name FROM Actor ORDER BY name DESC;
**c) Faça uma query que retorne todos os atores ordenados pelo salário**
R= SELECT * FROM Actor ORDER BY salary;
**d) Faça uma query que retorne os atores com os três maiores salarios**
R= SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
**e) Faça uma query que retorne a média de salário por gênero**
R= SELECT AVG(salary),gender FROM Actor GROUP BY gender;

# Exercicio 6
**a) *Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.**
R=ALTER TABLE Movie ADD playing_limit_date DATE;
**b) Altere a tabela de Movie para que o parâmetro rating possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5.**
R= ALTER TABLE Movie CHANGE rating rating FLOAT;
**c) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído**
R=  UPDATE Movie SET playing_limit_date = CURDATE() WHERE id="001";
R2=UPDATE Movie SET playing_limit_date = "2022-01-26" WHERE id="002";
**d) *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.**
R= DELETE FROM Actor WHERE id="001";
UPDATE Movie SET synopsis = "Era uma vez uma casinha bem velhinha e fofa no meio da floresta" WHERE id="001";
R= atualizou mas deu como se nehuma linha fosse afetada pela mudança.