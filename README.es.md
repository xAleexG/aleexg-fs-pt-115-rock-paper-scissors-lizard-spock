# Piedra, Papel, Tijera, Lagarto, Spock (versión consola)

## 🎯 Descripción del ejercicio

El objetivo de este proyecto es crear un programa en JavaScript que simule el clásico juego de **Piedra, Papel, Tijera, Lagarto, Spock**. El juego se ejecuta en la consola y no requiere manipulación del DOM.

El programa debe:
- Permitir que el usuario elija una opción: `rock`, `paper`, `scissors`, `lizard` o `spock`.
- Generar una opción aleatoria para la computadora.
- Comparar ambas opciones según las reglas del juego.
- Mostrar el resultado en la consola usando `console.log`.

---

## 📌 Reglas del juego

- **Rock** aplasta a **Scissors** y a **Lizard**.  
- **Paper** cubre a **Rock** y desautoriza a **Spock**.  
- **Scissors** cortan a **Paper** y decapitan a **Lizard**.  
- **Lizard** devora a **Paper** y envenena a **Spock**.  
- **Spock** rompe a **Scissors** y vaporiza a **Rock**.  

Si ambas opciones son iguales, es un empate.

---

## Ejemplos de Salida
- User chose: rock
- Computer chose: lizard
- You win! 🎉


- User chose: paper
- Computer chose: scissors
- You lose 😢

- User chose: spock
- Computer chose: spock
- It's a draw!

## 🛠 Cómo ejecutar el programa

El proyecto ya está configurado para funcionar en Codespaces.  
Para ejecutar el código y ver los mensajes en consola:

```bash
node src/app.js

```
O puedes hacer npm install y despues npm run start para verlo en el browser