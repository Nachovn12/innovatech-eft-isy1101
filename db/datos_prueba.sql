USE ventas_db;

INSERT INTO venta (id_venta, direccion_compra, valor_compra, fecha_compra, despacho_generado)
VALUES
(1, 'Av. Los Carrera 1234, Concepcion', 45000, '2026-07-01', 0),
(2, 'Calle Barros Arana 567, Concepcion', 78500, '2026-07-03', 0),
(3, 'Pje. Las Heras 89, San Pedro de la Paz', 32000, '2026-07-04', 1);

UPDATE venta_seq SET next_val = 100;

USE despachos_db;

INSERT INTO despacho (id_despacho, fecha_despacho, patente_camion, intento, id_compra, direccion_compra, valor_compra, despachado)
VALUES
(1, '2026-07-04', 'ABCD12', 1, 3, 'Pje. Las Heras 89, San Pedro de la Paz', 32000, 1);

UPDATE despacho_seq SET next_val = 100;
