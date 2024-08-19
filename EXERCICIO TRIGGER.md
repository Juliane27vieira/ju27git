CREATE TABLE produtos3(
  id serial PRIMARY key,
  nome VARCHAR(40) not NULL,
  preco FLOAT NOT NULL
)
INSERT into produtos3(nome,preco)
VALUES
('arroz',35.99),
('feijao',16.75),
('musculo',39.25),
('oleo',6.99),
('acucar refinado',6.99),
('macarrao',4.59)

select *from produtos3

create or replace FUNCTION aplicar_desconto(preco FLOAT,desconto FLOAT) 
   RETURNS float as $$
   BEGIN
     RETURN preco * (1-desconto);
   END
  $$ LANGUAGE PLPGSQL
  SELECT preco ,aplicar_desconto (preco ,0.5)as preco_com_desconto from produtos3 
