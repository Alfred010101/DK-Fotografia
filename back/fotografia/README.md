⚙️ Configuración del entorno

Antes de iniciar el proyecto, asegúrate de configurar las variables de entorno necesarias para la conexión con la base de datos MySQL.

🧩 Variables requeridas

Agrega las siguientes variables al archivo .env o al archivo de propiedades de Spring Boot (application.properties):

🗂️ Ubicación 

El archivo debe ubicarse en:

src/main/resources/application.properties

# DATABASE CONFIGURATION
- spring.datasource.url=jdbc:mysql://localhost:[puerto]/[base_de_datos]
- spring.datasource.url=jdbc:mysql://localhost:3306/dk_fotografia
- spring.datasource.username=[usuario]
- spring.datasource.password=[contraseña]

💡 Nota <br>
Configura el puerto en el cual se encuentra ejecutando el servicio de BD (por defecto 3306)
El usuario debe tener acceso a la base de datos.

# JPA CONFIGURATION
- spring.jpa.hibernate.ddl-auto=none
- spring.jpa.show-sql=true
- spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

