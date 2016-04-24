# SailsTutoSite
a [Sails](http://sailsjs.org) application

## Tutorial de integración [Angular-Sails](https://scotch.io/tutorials/build-a-todo-app-using-sailsjs-and-angularjs).
>Tutorial utilizado para integrar Angular en una aplicación Sails.

## Manejo de dependencias
Todos las dependencias externas como AngularJs, Bootstrap, etc. son manejadas mediante bower con el fin de que sea más facil instalarlas y que el repositorio no crezca en espacio. en la raiz está el archivo bower con todas las dependencias a instalar.

- Ejecutar *$ bower install*. Los componentes se instalarán en */assets/bower_components* ya que el archivo *.bowerrc* define la ruta de los componentes hacia los Assets.
- Para agregar dependencias luego de instalarlas se tienen que ir al archivo ubicado en *tasks/pipeline.js* que es una tarea que se ejecuta cuando se levanta el servidor.
- Agregar la ruta de dependencia dentro del arreglo *jsFilesToInject* después de la dependencia *js/dependencies/sails.io.js*.
- La ruta se agrega con el siguiente esquema */bower_components/ruta_a_archivo*.

## Instalar plugin [FuncDocr](https://github.com/wikunia/brackets-funcdocr)
Para comentar funciones JS de forma fácil, tal como se haría con otro IDE. Con el fin de mantener una convención para entender los contenidos.
#### Uso:
- Posicionarse en la funcion.
- presionar Ctrl+Alt+D o de forma común con /** + Enter.
- Con shift+tab pueden navegar entre los parámetros *{[[type]]}* o descripcion *{[[description]]}* y cambiarlos.

## Documentación de estilos y convención
Para tener una mejor idea de la estructura, patrones y técnicas de programación que se usarán en el sitio, se debe leer la [Guía de Estilos de Angular](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md) por lo menos del inciso 1 hasta el 9.

Para los comentarios de inicio de función es recomendable usar 
[Func Docr](#instalar-plugin-FuncDocr) para poner comentarios de los parámetros al inicio de toda función.

Convenciones más importantes:
- Primero definir controladores, factories, directives con notación IIFE.
- Poner comentario de inicio y de fin para la definición del componente (controlador, directiva, factory).
- Poner comentario de inicio y de fin para la función componente (controlador, directiva, factory).
- Solo un componente (controlador, directiva, factory) por archivo, de preferencia que no sobrepasen las 400 líneas.
- Tratar de no utilizar funciones callback sin nombre.
- En general toda la estructura está basada en la Guía de Estilos.
