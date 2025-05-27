# 🗂️ Diccionario Completo de Comandos Git

## 📌 1. Configuración Inicial
| Comando | Descripción |
|--------|-------------|
| `git config --global user.name "TuNombre"` | Configura tu nombre en Git |
| `git config --global user.email "tucorreo@example.com"` | Configura tu correo en Git |
| `git config --global init.defaultBranch main` | Establece 'main' como rama por defecto |
| `git config --global core.editor "code --wait"` | Configura VS Code como editor predeterminado |
| `git config --global color.ui auto` | Habilita colores en la salida de Git |
| `git config --list` | Muestra la configuración actual |
| `git config --global --list` | Muestra la configuración global |
| `git config user.name` | Muestra el nombre configurado |
| `git config user.email` | Muestra el email configurado |
| `git --version` | Muestra la versión de Git instalada |
| `git help <comando>` | Muestra ayuda para un comando específico |

---

## 📌 2. Inicializar o Clonar Repositorios
| Comando | Descripción |
|--------|-------------|
| `git init` | Crea un nuevo repositorio local |
| `git init nombre_proyecto` | Crea un nuevo repositorio en una carpeta específica |
| `git clone <url>` | Clona un repositorio remoto |
| `git clone <url> nombre_carpeta` | Clona un repositorio en una carpeta específica |
| `git clone --depth 1 <url>` | Clona solo el último commit (clonado superficial) |
| `git clone -b nombre_rama <url>` | Clona una rama específica |

---

## 📌 3. Añadir y Guardar Cambios
| Comando | Descripción |
|--------|-------------|
| `git status` | Muestra el estado de los archivos |
| `git status -s` | Muestra el estado de forma corta |
| `git add .` | Agrega todos los archivos al área de staging |
| `git add nombre_archivo` | Agrega un archivo específico |
| `git add *.html` | Agrega todos los archivos HTML |
| `git add -A` | Agrega todos los archivos modificados, nuevos y eliminados |
| `git add -u` | Agrega solo archivos modificados y eliminados (no nuevos) |
| `git add -p` | Agrega archivos de forma interactiva (por partes) |
| `git commit -m "mensaje"` | Guarda los cambios con un mensaje |
| `git commit -am "mensaje"` | Agrega y commitea archivos modificados en un comando |
| `git commit --amend` | Modifica el último commit |
| `git commit --amend -m "nuevo mensaje"` | Modifica el mensaje del último commit |
| `git commit --amend --no-edit` | Agrega cambios al último commit sin cambiar el mensaje |

## 📌 4. Ver Historial y Cambios
| Comando | Descripción |
|--------|-------------|
| `git log` | Muestra el historial de commits |
| `git log --oneline` | Muestra el historial en una línea por commit |
| `git log --graph` | Muestra el historial con un gráfico de ramas |
| `git log --all --graph --oneline` | Historial completo con gráfico en una línea |
| `git log -p` | Muestra los cambios en cada commit |
| `git log --author="nombre"` | Muestra commits de un autor específico |
| `git log --since="2024-01-01"` | Muestra commits desde una fecha |
| `git log --until="2024-12-31"` | Muestra commits hasta una fecha |
| `git log --grep="palabra"` | Busca commits que contengan una palabra |
| `git log nombre_archivo` | Muestra el historial de un archivo específico |
| `git show <id_commit>` | Muestra los detalles de un commit específico |
| `git show HEAD` | Muestra el último commit |
| `git diff` | Muestra diferencias entre archivos no staging |
| `git diff --staged` | Muestra diferencias de archivos en staging |
| `git diff HEAD` | Muestra diferencias con el último commit |
| `git diff <id_commit>` | Muestra diferencias con un commit específico |
| `git diff rama1..rama2` | Muestra diferencias entre dos ramas |

---

## 📌 5. Conectar y Subir al Repositorio Remoto
## 📌 5. Conectar y Subir al Repositorio Remoto
| Comando | Descripción |
|--------|-------------|
| `git remote -v` | Muestra los repositorios remotos configurados |
| `git remote add origin <url>` | Enlaza el repositorio local con GitHub |
| `git remote set-url origin <nueva_url>` | Cambia la URL del repositorio remoto |
| `git remote remove origin` | Elimina la conexión remota |
| `git push -u origin main` | Sube la rama `main` y la deja como predeterminada |
| `git push` | Sube cambios al repositorio remoto |
| `git push origin nombre_rama` | Sube una rama específica |
| `git push --all` | Sube todas las ramas |
| `git push --tags` | Sube todas las etiquetas |
| `git push --force` | Fuerza la subida (⚠️ usar con cuidado) |
| `git pull` | Descarga y mezcla los últimos cambios del remoto |
| `git pull origin main` | Descarga y mezcla desde una rama específica |
| `git fetch` | Descarga los últimos cambios del remoto sin mezclarlos |
| `git fetch --all` | Descarga cambios de todos los remotos |
| `git fetch --prune` | Elimina referencias a ramas remotas eliminadas |

---

## 📌 6. Trabajar con Ramas
| Comando | Descripción |
|--------|-------------|
| `git branch` | Lista todas las ramas locales |
| `git branch -a` | Lista todas las ramas (locales y remotas) |
| `git branch -r` | Lista solo las ramas remotas |
| `git branch nombre_rama` | Crea una nueva rama sin cambiarte a ella |
| `git branch -d nombre_rama` | Elimina una rama (si está fusionada) |
| `git branch -D nombre_rama` | Fuerza la eliminación de una rama |
| `git branch -m nuevo_nombre` | Renombra la rama actual |
| `git branch -m nombre_viejo nombre_nuevo` | Renombra una rama específica |
| `git switch nombre_rama` | Cambia a una rama existente |
| `git switch -c nombre_rama` | Crea y cambia a una nueva rama |
| `git switch -` | Cambia a la rama anterior |
| `git checkout nombre_rama` | Cambia a una rama (comando clásico) |
| `git checkout -b nombre_rama` | Crea y cambia a una nueva rama (comando clásico) |
| `git merge nombre_rama` | Une la rama especificada con la actual |
| `git merge --no-ff nombre_rama` | Une ramas conservando el historial de fusión |
| `git merge --squash nombre_rama` | Une ramas comprimiendo commits en uno solo |


---

## 📌 7. Deshacer Cambios
| Comando | Descripción |
|--------|-------------|
| `git restore nombre_archivo` | Restaura un archivo a su estado del último commit |
| `git restore --staged nombre_archivo` | Saca un archivo del área de staging |
| `git restore .` | Restaura todos los archivos modificados |
| `git reset nombre_archivo` | Saca un archivo del área de staging (comando clásico) |
| `git reset` | Saca todos los archivos del área de staging |
| `git reset --soft HEAD~1` | Deshace el último commit manteniendo cambios en staging |
| `git reset --mixed HEAD~1` | Deshace el último commit manteniendo cambios sin staging |
| `git reset --hard HEAD~1` | Deshace el último commit eliminando todos los cambios (⚠️ peligroso) |
| `git reset --hard <id_commit>` | Vuelve a un commit específico eliminando cambios posteriores |
| `git revert <id_commit>` | Crea un nuevo commit que revierte un cambio anterior |
| `git revert HEAD` | Revierte el último commit |
| `git clean -f` | Elimina archivos no rastreados |
| `git clean -fd` | Elimina archivos y directorios no rastreados |
| `git clean -n` | Muestra qué archivos se eliminarían (simulación) |

## 📌 8. Stash (Guardado Temporal)
| Comando | Descripción |
|--------|-------------|
| `git stash` | Guarda temporalmente los cambios no committeados |
| `git stash save "mensaje"` | Guarda cambios con un mensaje descriptivo |
| `git stash list` | Lista todos los stashes guardados |
| `git stash apply` | Restaura el stash más reciente |
| `git stash apply stash@{0}` | Restaura un stash específico |
| `git stash pop` | Restaura y elimina el stash más reciente |
| `git stash drop stash@{0}` | Elimina un stash específico |
| `git stash clear` | Elimina todos los stashes |
| `git stash show` | Muestra los cambios en el stash más reciente |
| `git stash show -p` | Muestra los cambios detallados del stash |

---

## 📌 9. Etiquetas (Tags)
| Comando | Descripción |
|--------|-------------|
| `git tag` | Lista todas las etiquetas |
| `git tag v1.0` | Crea una etiqueta ligera |
| `git tag -a v1.0 -m "versión 1.0"` | Crea una etiqueta anotada |
| `git tag -a v1.0 <id_commit> -m "mensaje"` | Crea una etiqueta en un commit específico |
| `git show v1.0` | Muestra información de una etiqueta |
| `git tag -d v1.0` | Elimina una etiqueta local |
| `git push origin v1.0` | Sube una etiqueta específica |
| `git push origin --tags` | Sube todas las etiquetas |
| `git push origin :refs/tags/v1.0` | Elimina una etiqueta del repositorio remoto |

---

## 📌 10. Archivo .gitignore
| Comando | Descripción |
|--------|-------------|
| `echo "archivo.txt" >> .gitignore` | Agrega un archivo al .gitignore |
| `echo "*.log" >> .gitignore` | Ignora todos los archivos .log |
| `echo "node_modules/" >> .gitignore` | Ignora una carpeta completa |
| `git rm --cached archivo.txt` | Elimina un archivo del seguimiento (mantiene archivo local) |
| `git rm -r --cached .` | Elimina todos los archivos del seguimiento |
| `git check-ignore archivo.txt` | Verifica si un archivo está siendo ignorado |

---

## 📌 11. Colaboración y Resolución de Conflictos
| Comando | Descripción |
|--------|-------------|
| `git pull --rebase` | Descarga cambios y los aplica antes de los locales |
| `git rebase main` | Reaplica commits de la rama actual sobre main |
| `git rebase --continue` | Continúa el rebase después de resolver conflictos |
| `git rebase --abort` | Cancela el rebase y vuelve al estado anterior |
| `git cherry-pick <id_commit>` | Aplica un commit específico a la rama actual |
| `git blame archivo.txt` | Muestra quién modificó cada línea de un archivo |
| `git shortlog` | Resumen de commits por autor |
| `git shortlog -sn` | Resumen numérico de commits por autor |

---

## 📌 12. Comandos Avanzados
| Comando | Descripción |
|--------|-------------|
| `git reflog` | Muestra el historial de todas las acciones en Git |
| `git fsck` | Verifica la integridad del repositorio |
| `git gc` | Limpia y optimiza el repositorio |
| `git archive --format=zip HEAD > proyecto.zip` | Crea un archivo ZIP del proyecto |
| `git grep "texto"` | Busca texto en todos los archivos del repositorio |
| `git bisect start` | Inicia búsqueda binaria para encontrar bugs |
| `git worktree add ../nueva-carpeta rama` | Crea un directorio de trabajo adicional |
| `git submodule add <url>` | Agrega un submódulo |
| `git update-index --skip-worktree archivo.txt` | Ignora cambios locales en un archivo rastreado |

---

## 📌 13. Atajos y Alias Útiles
| Comando | Descripción |
|--------|-------------|
| `git config --global alias.st status` | Crear alias `git st` para `git status` |
| `git config --global alias.co checkout` | Crear alias `git co` para `git checkout` |
| `git config --global alias.br branch` | Crear alias `git br` para `git branch` |
| `git config --global alias.ci commit` | Crear alias `git ci` para `git commit` |
| `git config --global alias.unstage 'reset HEAD --'` | Alias para sacar archivos del staging |
| `git config --global alias.last 'log -1 HEAD'` | Alias para ver el último commit |
| `git config --global alias.visual '!gitk'` | Alias para abrir interfaz gráfica |

---

## 📌 14. Gestión de Archivos y Directorios
| Comando | Descripción |
|--------|-------------|
| `git rm nombre_archivo` | Elimina un archivo del repositorio y del directorio |
| `git rm --cached nombre_archivo` | Elimina archivo del seguimiento pero lo mantiene localmente |
| `git rm -r carpeta/` | Elimina una carpeta y su contenido del repositorio |
| `git mv archivo_viejo archivo_nuevo` | Renombra o mueve un archivo |
| `git mv carpeta_vieja/ carpeta_nueva/` | Renombra o mueve una carpeta |
| `git ls-files` | Lista todos los archivos rastreados por Git |
| `git ls-files --others` | Lista archivos no rastreados |
| `git ls-files --ignored` | Lista archivos ignorados |
| `git ls-tree HEAD` | Muestra el contenido del último commit |
| `git ls-tree -r HEAD` | Muestra recursivamente todos los archivos del último commit |

---

## 📌 15. Inspección y Debugging
| Comando | Descripción |
|--------|-------------|
| `git describe` | Describe la posición actual usando etiquetas |
| `git describe --tags` | Describe usando todas las etiquetas disponibles |
| `git describe --always` | Siempre muestra una descripción, incluso sin etiquetas |
| `git rev-parse HEAD` | Muestra el hash completo del commit actual |
| `git rev-parse --short HEAD` | Muestra el hash corto del commit actual |
| `git name-rev <hash>` | Muestra el nombre legible de un commit |
| `git whatchanged` | Muestra commits con archivos modificados |
| `git show-branch` | Muestra las ramas y sus commits |
| `git show-branch --all` | Muestra todas las ramas locales y remotas |
| `git verify-commit <hash>` | Verifica la firma de un commit |
| `git cat-file -p <hash>` | Muestra el contenido raw de un objeto Git |
| `git count-objects` | Cuenta y muestra estadísticas de objetos |

---

## 📌 16. Herramientas de Resolución de Conflictos
| Comando | Descripción |
|--------|-------------|
| `git status` | Muestra archivos con conflictos durante un merge |
| `git diff --name-only --diff-filter=U` | Lista solo archivos con conflictos |
| `git checkout --ours archivo.txt` | Mantiene la versión de la rama actual |
| `git checkout --theirs archivo.txt` | Mantiene la versión de la rama entrante |
| `git add archivo.txt` | Marca un conflicto como resuelto |
| `git merge --abort` | Cancela el merge y vuelve al estado anterior |
| `git reset --merge` | Cancela merge manteniendo cambios locales |
| `git rerere` | Reutiliza resoluciones de conflictos grabadas |
| `git config rerere.enabled true` | Habilita rerere automáticamente |
| `git mergetool` | Abre herramienta gráfica para resolver conflictos |
| `git mergetool --tool=vimdiff` | Usa una herramienta específica para conflictos |

---

## 📌 17. Configuración Avanzada
| Comando | Descripción |
|--------|-------------|
| `git config --global core.autocrlf true` | Manejo automático de finales de línea (Windows) |
| `git config --global core.autocrlf input` | Manejo automático de finales de línea (Mac/Linux) |
| `git config --global core.safecrlf warn` | Advertir sobre conversiones de líneas peligrosas |
| `git config --global push.default simple` | Configurar estrategia de push |
| `git config --global pull.rebase true` | Hacer que pull use rebase por defecto |
| `git config --global merge.tool vscode` | Configurar VS Code como herramienta de merge |
| `git config --global diff.tool vscode` | Configurar VS Code como herramienta de diff |
| `git config --global fetch.prune true` | Eliminar automáticamente ramas remotas eliminadas |
| `git config --global branch.autosetupmerge always` | Configurar tracking automático de ramas |
| `git config --global core.precomposeunicode true` | Manejo Unicode (Mac) |
| `git config --global core.trustctime false` | No confiar en timestamps de archivos |
| `git config --global help.autocorrect 1` | Corrección automática de comandos mal escritos |

---

## 📌 18. Hooks y Automatización
| Comando | Descripción |
|--------|-------------|
| `ls .git/hooks/` | Lista los hooks disponibles |
| `git config --global init.templatedir ~/.git-templates` | Configurar plantilla de hooks |
| `git config core.hooksPath .githooks` | Cambiar directorio de hooks |
| `git update-index --skip-worktree .git/hooks/pre-commit` | Ignorar cambios en hooks |
| `chmod +x .git/hooks/pre-commit` | Hacer ejecutable un hook |
| `git config --global alias.hooks 'config core.hooksPath'` | Alias para gestionar hooks |

---

## 📌 19. Git Flow y Workflows
| Comando | Descripción |
|--------|-------------|
| `git flow init` | Inicializar Git Flow |
| `git flow feature start nueva-funcionalidad` | Crear una nueva rama de feature |
| `git flow feature finish nueva-funcionalidad` | Finalizar una rama de feature |
| `git flow release start 1.0.0` | Crear una nueva rama de release |
| `git flow release finish 1.0.0` | Finalizar una rama de release |
| `git flow hotfix start arreglo-critico` | Crear una rama de hotfix |
| `git flow hotfix finish arreglo-critico` | Finalizar una rama de hotfix |
| `git config gitflow.branch.master main` | Configurar rama principal para Git Flow |
| `git config gitflow.prefix.feature feature/` | Configurar prefijo para features |

---

## 📌 20. Performance y Mantenimiento
| Comando | Descripción |
|--------|-------------|
| `git gc --aggressive` | Garbage collection agresivo |
| `git prune` | Elimina objetos inalcanzables |
| `git prune --dry-run` | Simula la eliminación de objetos |
| `git pack-refs --all` | Empaqueta todas las referencias |
| `git repack -ad` | Reempaqueta todos los objetos |
| `git count-objects -v` | Estadísticas detalladas del repositorio |
| `git verify-pack -v .git/objects/pack/*.idx` | Verifica integridad de paquetes |
| `git fsck --full` | Verificación completa de integridad |
| `git clean -dfx` | Limpieza completa de archivos no rastreados |
| `du -sh .git` | Tamaño del directorio .git |
| `git bundle create repo.bundle --all` | Crear bundle del repositorio completo |
| `git bundle verify repo.bundle` | Verificar integridad de un bundle |

---

## 📌 21. Submódulos
| Comando | Descripción |
|--------|-------------|
| `git submodule add <url> <path>` | Agregar un submódulo |
| `git submodule init` | Inicializar submódulos |
| `git submodule update` | Actualizar submódulos |
| `git submodule update --init --recursive` | Inicializar y actualizar recursivamente |
| `git submodule foreach git pull origin main` | Ejecutar comando en todos los submódulos |
| `git submodule status` | Estado de todos los submódulos |
| `git submodule sync` | Sincronizar URLs de submódulos |
| `git submodule deinit <path>` | Desinicializar un submódulo |
| `git rm <path-to-submodule>` | Eliminar un submódulo completamente |
| `git clone --recurse-submodules <url>` | Clonar con submódulos |

---

## 📌 22. Git Worktree
| Comando | Descripción |
|--------|-------------|
| `git worktree add <path> <branch>` | Crear nuevo árbol de trabajo |
| `git worktree add -b nueva-rama <path>` | Crear árbol con nueva rama |
| `git worktree list` | Listar todos los árboles de trabajo |
| `git worktree remove <path>` | Eliminar árbol de trabajo |
| `git worktree prune` | Limpiar árboles eliminados manualmente |
| `git worktree lock <path>` | Bloquear árbol de trabajo |
| `git worktree unlock <path>` | Desbloquear árbol de trabajo |

---

## 📌 23. Búsqueda y Filtrado Avanzado
| Comando | Descripción |
|--------|-------------|
| `git grep -n "texto"` | Buscar texto mostrando números de línea |
| `git grep -i "texto"` | Búsqueda insensible a mayúsculas |
| `git grep -w "palabra"` | Buscar palabra completa |
| `git grep -v "texto"` | Buscar líneas que NO contengan el texto |
| `git log --grep="fix"` | Buscar commits con mensaje que contenga "fix" |
| `git log -S"función"` | Buscar commits que añadan/eliminen una función |
| `git log -G"regex"` | Buscar usando expresiones regulares |
| `git log --all --grep="bug" --oneline` | Buscar en todas las ramas |
| `git log --author="nombre" --after="2024-01-01"` | Filtrar por autor y fecha |
| `git log --no-merges` | Excluir commits de merge |
| `git log --merges` | Mostrar solo commits de merge |
| `git log --first-parent` | Seguir solo la primera rama padre |

---

## 📌 24. Comandos de Emergencia y Recuperación
| Comando | Descripción |
|--------|-------------|
| `git reflog expire --expire=now --all` | Limpiar reflog inmediatamente |
| `git fsck --lost-found` | Buscar objetos perdidos |
| `git hash-object -w archivo.txt` | Crear objeto Git de un archivo |
| `git update-ref refs/heads/main <hash>` | Actualizar referencia manualmente |
| `git symbolic-ref HEAD refs/heads/main` | Cambiar rama HEAD manualmente |
| `git filter-branch --tree-filter 'rm -f contraseñas.txt' HEAD` | Eliminar archivo del historial |
| `git filter-branch --msg-filter 'sed "s/malo/bueno/g"'` | Cambiar mensajes de commit |
| `git replace <hash-malo> <hash-bueno>` | Reemplazar commit |
| `git reset --hard HEAD@{1}` | Volver al estado anterior usando reflog |
| `git checkout <hash> -- archivo.txt` | Recuperar archivo de commit específico |

---

## 📌 25. Estadísticas y Reportes
| Comando | Descripción |
|--------|-------------|
| `git shortlog -sn` | Número de commits por autor |
| `git shortlog -sn --all` | Commits por autor en todas las ramas |
| `git log --stat` | Estadísticas de archivos modificados |
| `git log --numstat` | Estadísticas numéricas de cambios |
| `git log --pretty=format:"%h %an %ar %s"` | Formato personalizado de log |
| `git log --since="1 week ago" --oneline` | Commits de la última semana |
| `git log --before="2024-01-01" --after="2023-01-01"` | Commits en rango de fechas |
| `git log --graph --pretty=format:'%C(yellow)%h%Creset -%C(red)%d%Creset %s %C(green)(%cr) %C(blue)<%an>%Creset'` | Log con colores personalizado |
| `git diff --stat` | Estadísticas de diferencias |
| `git diff --dirstat` | Estadísticas por directorio |
| `git log --follow archivo.txt` | Seguir historial de archivo renombrado |

---

## 📌 26. Comandos para CI/CD y Automatización
| Comando | Descripción |
|--------|-------------|
| `git rev-parse --verify HEAD` | Verificar que HEAD existe |
| `git rev-parse --abbrev-ref HEAD` | Obtener nombre de rama actual |
| `git describe --dirty` | Describir incluyendo archivos modificados |
| `git status --porcelain` | Estado en formato para scripts |
| `git log --format="%H" -1` | Obtener hash del último commit |
| `git diff --exit-code` | Verificar si hay diferencias (útil en scripts) |
| `git diff --name-only HEAD~1 HEAD` | Archivos cambiados en último commit |
| `git show --name-only --pretty=format: <hash>` | Solo nombres de archivos de un commit |
| `git archive --format=tar.gz --prefix=proyecto/ HEAD` | Crear tarball del proyecto |
| `git for-each-ref --format='%(refname:short)' refs/heads/` | Listar ramas para scripts |

---

## 📌 27. Trucos y Tips Avanzados
| Comando | Descripción |
|--------|-------------|
| `git log --oneline --decorate --all --graph` | Vista completa del repositorio |
| `git commit --fixup <hash>` | Crear commit de arreglo para rebase interactivo |
| `git commit --squash <hash>` | Crear commit para squash en rebase |
| `git rebase --autosquash -i HEAD~5` | Rebase interactivo con auto-squash |
| `git bisect run comando` | Automatizar git bisect |
| `git notes add -m "nota" <hash>` | Agregar nota a un commit |
| `git notes show <hash>` | Mostrar nota de un commit |
| `git update-index --assume-unchanged archivo.txt` | Ignorar cambios locales temporalmente |
| `git update-index --no-assume-unchanged archivo.txt` | Volver a rastrear archivo |
| `git ls-files -v | grep "^[[:lower:]]"` | Ver archivos con assume-unchanged |
| `git commit --allow-empty -m "commit vacío"` | Crear commit sin cambios |
| `git log --cherry-pick --oneline main...feature` | Mostrar commits únicos entre ramas |

---

## 📌 ⚡ Comandos de Una Línea Útiles
```bash
# Ver tamaño de cada rama
git for-each-ref --format='%(refname:short) %(objectsize)' refs/heads/

# Eliminar todas las ramas mergeadas
git branch --merged | grep -v "\*\|main\|master" | xargs -n 1 git branch -d

# Ver archivos más modificados
git log --pretty=format: --name-only | sort | uniq -c | sort -rg | head -10

# Buscar archivo eliminado
git log --all --full-history -- "**/archivo_perdido.txt"

# Ver diferencias ignorando espacios en blanco
git diff -w

# Crear alias para comandos complejos
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

# Encontrar commit que introdujo un bug
git bisect start HEAD v1.0 -- # Entre HEAD y tag v1.0

# Backup completo de un repositorio
git bundle create backup.bundle --all

# Ver quien modificó más código
git log --shortstat --pretty="%cE" | sed 's/\(.*\)@.*/\1/' | grep -v "^$" | awk 'BEGIN { line=""; } !/^ / { if (line=="" || !match(line, $0)) {line = $0; } else { print line; line=""; } } /^ / { print line " " $0; line=""; }' | sort | sed -E 's/^([^ ]+) (.*)$/\2 \1/' | awk '{sum1[$NF] += $1; sum2[$NF] += $2} END {for (name in sum1) print sum1[name] " " sum2[name] " " name}' | sort -rn

# Clonar solo una rama específica
git clone --single-branch --branch rama-especifica <url>
```

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles
- [Git Documentation](https://git-scm.com/docs)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)
- [GitHub Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Interactive Git Cheatsheet](https://ndpsoftware.com/git-cheatsheet.html)

### 📖 Conceptos Importantes
- **HEAD**: Puntero al último commit de la rama actual
- **Index/Staging**: Área intermedia antes del commit
- **Working Directory**: Directorio de trabajo con archivos modificados
- **Origin**: Nombre por defecto del repositorio remoto
- **Fast-forward**: Merge sin crear commit adicional
- **Three-way merge**: Merge que crea commit de fusión
- **Rebase**: Reaplicar commits sobre otra rama
- **Cherry-pick**: Aplicar commit específico a otra rama

### 💡 Mejores Prácticas
1. **Commits frecuentes y pequeños** con mensajes descriptivos
2. **Usar ramas** para nuevas funcionalidades o experimentos
3. **Revisar cambios** antes de hacer commit con `git diff`
4. **Mantener historial limpio** con rebase en lugar de merge cuando sea apropiado
5. **Usar .gitignore** para excluir archivos innecesarios
6. **Hacer backup** con `git push` regularmente
7. **Usar tags** para marcar versiones importantes
8. **Revisar logs** regularmente para entender la evolución del proyecto

---

## 🎯 Comandos Esenciales para Principiantes
```bash
git status          # ¿Qué ha cambiado?
git add .           # Preparar cambios
git commit -m "..."  # Guardar cambios
git push            # Subir al remoto
git pull            # Bajar del remoto
git log --oneline   # Ver historial
```

---

## 🚀 Comandos Avanzados para Expertos
```bash
git rebase -i HEAD~3       # Rebase interactivo
git cherry-pick abc123     # Aplicar commit específico
git bisect start           # Búsqueda binaria de bugs
git worktree add ../hotfix # Múltiples directorios de trabajo
git filter-branch         # Reescribir historial
git bundle create         # Backup portable
```

---

**📝 Nota**: Este documento contiene más de 300 comandos Git organizados por categorías. Guárdalo como referencia y practica regularmente para dominar Git.

**⚠️ Advertencia**: Los comandos marcados con "peligroso" pueden causar pérdida de datos. Úsalos con precaución y siempre haz backup.
