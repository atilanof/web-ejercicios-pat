# Git
## CI

La integración continua consiste en la ejecución automática de pruebas y la obtención de sus informes cada vez que cambia el código.

<task-list title="Práctica Git - Ejercicio 4 de 6 - CI"></task-list>

- [ ] Crea un nuevo workflow llamado `ci.yml` desde las Github-Actions del repo (`https://github.com/{usuario}/ci-cd/actions/new`) `➜` "set up a workflow yourself" con el siguiente contenido:
  ```yaml
  name: CI
  on:
    push:
      branches: [ "main" ]
  jobs:
    html-validator:
      runs-on: ubuntu-latest
      steps:
      - uses: actions/checkout@v3
      - name: HTML validator
        run: docker run --rm -v ${{ github.workspace }}/src:/src ghcr.io/validator/validator:latest vnu /src/index.html
  ```

- [ ] Guarda los cambios en el repo dando a "Start commit" `➜` "Commit new file" y comprueba el resultado de la ejecución en las Actions del repo (`https://github.com/{usuario}/ci-cd/actions`).

- [ ] ¿Por qué se ha disparado la ejecución de la CI?
- [ ] ¿Cuál ha sido el resultado de la ejecución de la CI y qué objetivo ha tenido?


