# Git
## CD

El despliegue continuo permite instalar automáticamente los cambios una vez que estos han superado todas las pruebas.

<task-list title="Práctica Git - Ejercicio 5 de 6 - CD"></task-list>

- [ ] Entra en la configuración de Github-Pages del repo (`https://github.com/{usuario}/ci-cd/settings/pages`) `➜` "Source" `➜` "GitHub Actions" `➜` "Static HTML" `➜` "Configure". Renombra el workflow a `cd.yml` y modifica las siguientes propiedades de su contenido:
  - `name: CD`
  - `path: './src'`

- [ ] Guarda los cambios en el repo dando a "Start commit" `➜` "Commit new file" y comprueba el resultado de la ejecución en las Actions del repo (`https://github.com/{usuario}/ci-cd/actions`).

- [ ] Comprueba que la página web se puede ver desde `https://{usuario}.github.io/ci-cd/`.

- [ ] ¿Por qué se ha disparado la ejecución de la CI y del CD?

- [ ] ¿Qué problema ves en que se haya ejecutado correctamente el CD cuando ha fallado la CI?
