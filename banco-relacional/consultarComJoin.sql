select 
    e.nome as Estado, 
    c.nome as Cidade, 
    e.regiao as Regiao 
from estados e, cidades c
where e.id = c.estado_id;
-- sem o where, ele faz um produto cartesiano das tabelas

select
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Região
from estados e
inner join cidades c on e.id = c.estado_id