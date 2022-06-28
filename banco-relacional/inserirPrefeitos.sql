select * from prefeitos

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Zenaldo Coutinho', null);
-- a tabela foi criada com a coluna cidade_id aceitando valores nulos
INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rafael Greca', null);
-- não gera um erro, o valor null não é considerado um valor duplicado

INSERT INTO prefeitos
    (nome, cidade_id)
VALUES
    ('Rodrigo Pinheiro', 3);
-- gera um erro, pois o cidade_id é duplicado (já foi inserido)