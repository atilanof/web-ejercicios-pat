# Git
## Ramas

Los cambios en Git se realizan utilizando ramas. Las ramas representan una línea de desarrollo independiente dentro del repo. La rama inicial suele llamarse `main` (o `master`). Los cambios en una rama se realizan en 3 pasos: `① add ➜ ② commit ➜ ③ push`.

<task-list title="Práctica Git - Ejercicio 2 de 6 - Ramas"></task-list>

- [ ] Desde el Codespace anterior y usando el editor crea un nuevo directorio `src` y un fichero `index.html` dentro de él con el siguiente contenido:
  ```html
  <!DOCTYPE html>
  <html>
  <head><title></title></head>
  <body></body>
  </html>
  ```

- [ ] Desde el terminal del Codespace teclea:
  ```bash
  cd /workspaces/ci-cd
  git status
  git add .
  git commit -m "feat: homepage"
  git push origin main
  ```
- [ ] Comprueba que el nuevo directorio/fichero se encuentra ahora en el repo remoto (`https://github.com/{usuario}/ci-cd`).

- [ ] ¿Para qué han valido cada uno de los comandos `git` anteriores?
