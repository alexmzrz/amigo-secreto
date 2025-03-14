# Amigo Secreto

Este proyecto es una aplicación web simple para organizar un sorteo de "Amigo Secreto" entre amigos. Permite a los usuarios ingresar los nombres de los participantes y luego realizar un sorteo aleatorio para asignar a cada persona un amigo secreto.

## Funcionalidades.

   **_Agregar Amigos_**
        Los usuarios pueden ingresar los nombres de sus amigos en un campo de texto y hacer clic en el botón "Añadir" para agregarlos a la lista de participantes.
        La aplicación verifica que no se ingresen nombres duplicados y que el campo de entrada no esté vacío.
        
  **_Lista de Amigos_**
        A medida que se agregan los amigos, sus nombres se muestran en una lista en la interfaz.
       Los nombres se formatean para que la primera letra de cada palabra esté en mayúscula.
       
 **_Sortear Amigos_**
        Una vez que se han agregado todos los participantes, los usuarios pueden hacer clic en el botón "Sortear amigo" para realizar el sorteo.
        La aplicación selecciona aleatoriamente un amigo secreto y muestra los resultados en la interfaz.
        Se comprueba que existan al menos dos nombres en la lista de amigos para poder realizar el sorteo.


## Cómo Usar.
- Abre el archivo index.html en tu navegador web.
- Ingresa los nombres de tus amigos en el campo de texto y haz clic en "Añadir" después de cada nombre.
- Una vez que hayas agregado a todos los participantes, haz clic en el botón "Sortear amigo".
- Los resultados del sorteo se mostrarán en la pantalla.


## Estructura del Proyecto.
- index.html: Contiene la estructura HTML de la aplicación.
- style.css: Contiene los estilos CSS para la aplicación.
- app.js: Contiene la lógica JavaScript de la aplicación.
- assets/: Contiene los recursos de imágenes utilizados en la aplicación.

## Lógica del Código JavaScript
- El código JavaScript utiliza un array (amigos) para almacenar los nombres de los participantes.
- La función **agregarAmigo()** se encarga de agregar nuevos amigos al array, convertir los nombres a minusculas para verificar duplicados y actualizar la lista en la interfaz.
- La función **mostrarAmigos()** muestra la lista de amigos en el html.
- La función **formatearNombre()** se encarga de formatear los nombres de los amigos para que al mostrar los nombres registrados la primer letra empieza con mayusculas.
- La función **sortearAmigo()** realiza el sorteo aleatorio y muestra los resultados en la interfaz.

## Dependencias
Este proyecto utiliza fuentes de Google Fonts para mejorar la apariencia de la interfaz.
