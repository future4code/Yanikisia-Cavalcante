# Exercicio 1
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
)
**a) Explique o que é uma chave estrangeira**
R=E a referencia da da tabela 1 na tabelal 2, é a referencia de como elas iram se relacionar
**b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes**
R=Feito
**c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.**
R=o erro fala que nao pode adicionar uma linha filha pois tem uma restrição de falha na chave estrangueira ,
**d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.**
ALTER TABLE Movie DROP COLLUM rating;
**e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query**
R= deu erro, o erro falou que nao pode apagar uma linha pai,  deu uma falha na restrição de chave estrangeira 

# Exercicio 2
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
**a) Explique, com as suas palavras, essa tabela**
R= é uma tabela de cast de filmes, onde tem o id do filme e o id do ator
***b) Crie, ao menos, 6 relações nessa tabela**
R= INSERT INTO MovieCast (movie_id,actor_id)
VALUES(
"004",
"003"
);
**c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query**
R=deu erro de nao poder atualizar ou adicionar por falha na restrição da chave estrangeira.
**d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query**
R= erro que nao pode excluir uma linha pai

# Exercicio 3
SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
**a) Explique, com suas palavras, a query acima. O que é o operador ON?**
R= é a condição de junção que junta as informações correspondentes da tabela A com a tabela B
**b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.**
R=SELECT m.id as movie_id, r.rate as rating, title as title FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;