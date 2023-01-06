# Docker
## Imagen

Para crear una imagen que contenga las librerías, herramientas, configuraciones, etc. necesarias para ejecutar nuestro programa se utiliza un [Dockerfile](https://docs.docker.com/engine/reference/builder/). Los Dockerfile parten de una imagen padre base sobre la que se instalan las dependencias necesarias. Las imágenes públicas se alojan en un "registry" del que se descargan si no están cacheadas localmente.

<task-list title="Práctica Docker - Entregable 1 de 4 - Imagen"></task-list>

- [ ] Crea el fichero `practicas/Dockerfile` con este contenido:
  ```bash
  FROM alpine
  RUN apk add --no-cache bash openssh git git-bash-completion
  RUN git clone https://github.com/magicmonty/bash-git-prompt.git /root/.bash-git-prompt --depth=1
  RUN echo -e "source /usr/share/bash-completion/completions/git\nsource /root/.bash-git-prompt/gitprompt.sh" > /root/.bashrc
  CMD ["/bin/bash"]
  ```
- [ ] Con Docker arrancando, ejecuta en un terminal:
  ```bash
  cd {ruta}/practicas
  docker build -t git .
  docker images
  ```
- [ ] Explica qué hacen las instrucciones del Dockerfile. ¿Qué software estará disponible en la imagen?
- [ ] ¿Qué hacen los comandos `docker` anteriores?
- [ ] Las imágenes se identifican así: `registry/repository:tag`, ¿cuál es el "registry", "repository" y "tag" de la imagen padre descargada?