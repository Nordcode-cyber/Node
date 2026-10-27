|------------------|-------------------------------------|----------------------------------------|
|Tipo	           |        Campo	                     |        Descripción                     |
|String            |   name	Nombre del proyecto          |   librería o paquete.                  |
|String            |     Versión del paquete.            |   Generalmente se utiliza semver .     |
|String            |  descriptiobreve del paquete.       | debe coincidir con el nombre del repo  |
|type	Tipo de sistema de módulos a utilizar. Con module usa ESM, en caso contrario usa CommonJS.
main	Punto de entrada del proyecto. Suele ser index.js (node) o index.html (browser).
module	Idem al anterior, pero respecto a ES Modules en lugar de CommonJS.
scripts	Colección de scripts del proyecto (lo veremos más adelante).
keywords	 de  con palabras clave relacionadas con el proyecto. Util en búsquedas.
author	Nombre del autor del paquete o un  con name, email y/o url.
license	Tipo de licencia del paquete o proyecto. Por defecto, ISC.
dependencies	Colección de paquetes para producción y la versión instalada.
devDependencies	Colección de paquetes para desarrollo y la versión instalada.
homepage	URL de la página principal del paquete.
repository	URL del repositorio. Se debe indicar type (git, svn...) y url (ruta).
bugs	Objeto con campo url con la URL de la página de issues del proyecto.