# DESAFIO ACID LABS

### Propuesta de solución

Para desarrollar el ejercicio propuesto, el cual consistia en desarrollar una mini infraestructura de microservicios, implemente una arquitectura basada en la siguiente imagen:
![](https://www.cloudmasters.es/wp-content/uploads/sites/5/2019/11/imagen-12-1024x653.png)

como podemos observar, el protocolo de comunicación usado es basicamente una api gateway que se encarga de redireccionar las peticiones al servicio correspondiente y con ello realizar la operación solicitada, para lograr esto dentro del proyecto se encuentra un archivo llamado gateway.config.yml, en él se encuentra especificado todo para que nuestra app sepa como redireccionar las peticiones al servicio correspondiente. Además, si un servicio necesita información proveniente de otro servicio, esta se puede solicitar a traves de un petición http que la misma gateway se encarga de redireccionar, con el fin de que solo el servicio se conecte a su propia base de datos.

### Instalar dependencias

```sh
npm install
```

### Run APP

```sh
npm run start
```

### Run APP with Docker

```sh
npm run start-container
```

### (NOTA)
Para la implementacion de docker, quedo listo, en lo que respecta al dockerfile y el dockercompuse, lo que falto fue la configuración de docker con el motor de postres la creacion de la base de datos dentro del contenedor, pero de todas maneras dentro de cada servicio, se encuentra el script de su base datos correspondientes para ser ejecutado de forma local sin problemas.

### Consultas solicitadas en el desafío

la app se ejecuta en el puerto 8080 (localhost:8080), para realizar las consultas solicitadas se tienen las siguientes rutas:

```sh
http://localhost:8080/api/carts/productsPurchaseByUser/:id
```
donde id es el representa al usuario y para probar se puede utilizar la id con valor 1, quedando: http://localhost:8080/api/carts/productsPurchaseByUser/1
esta ruta obtiene todos los productos comprados por el usuario X.

Siguiente ruta:
```sh
http://localhost:8080/api/payments/productsByExternal/:id
```
donde id es el representa al external_reference_id y para probar se puede utilizar la id con valor 12, quedando: http://localhost:8080/api/payments/productsByExternal/12
esta ruta obtiene todos los productos asociados a un pago por el external_reference_id

ultima ruta del desafio:
```sh
http://localhost:8080/api/carts/productsByUser/:id
```
donde id es el representa al usuario y para probar se puede utilizar la id con valor 1, quedando: http://localhost:8080/api/carts/productsByUser/1
esta ruta obtiene todos los productos del carro de compras de un usuario X.

### RUTAS POR DEFECTO DE CADA SERVICIO

```sh
http://localhost:8080/api/carts
http://localhost:8080/api/payments
http://localhost:8080/api/orders
http://localhost:8080/api/products
http://localhost:8080/api/users
```

