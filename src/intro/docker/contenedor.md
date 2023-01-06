# Docker
## Contenedor
Los contenedores se arrancan a partir del nombre de la imagen. Los contenedores ejecutan un único proceso y cuando éste termina se detiene el contenedor. Los contenedores parados se pueden volver a arrancar sin perder sus datos entre reinicios. Además, pueden compartir ficheros con el SO anfitrión.

<task-list title="Práctica Docker - Entregable 2 de 4 - Contenedor"></task-list>

- [ ] Con Docker arrancando, ejecuta desde un terminal:
  ```bash
  docker run --name git -v $(pwd):/practicas:rw -it git
  # ... dentro del contenedor ...
  cd /practicas
  git clone https://github.com/{usuario}/ci-cd
  exit
  ```
- [ ] Comprueba que también se ha creado `practicas/ci-cd/` en tu SO anfitrión.
- [ ] Ejecuta en el terminal anterior: 
  ```bash
  docker ps --all
  docker start -ai git
  # ... dentro del contenedor de nuevo ...
  exit
  ```

- [ ] Explica qué hace concretamente el `docker run` utilizado. ¿Cuál es el proceso que ejecuta el contenedor al arrancarse? ¿por qué necesitamos el modo `rw` y no basta con `ro`?
- [ ] ¿Por qué `docker ps` dice que el contenedor está parado?
- [ ] ¿Por qué en la última parte tenemos que usar `docker start` en vez de `docker run`? ¿por qué no necesitamos especificar la carpeta compartida con `docker start`?





