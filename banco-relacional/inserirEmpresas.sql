ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 56369525000153),
    ('Vale', 10169483000106),
    ('Cielo', 20169483000146);

DESC empresas;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);