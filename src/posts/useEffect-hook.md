---
title: Entiende el hook de React useEffect()
date: 2024-08-22
description: En este artículo entenderemos cómo funciona el hook useEffect
tags: [react, typescript]
---

El hook `useEffect` es uno de los hooks fundamentales de React, junto con `useState`. Este hook nos permite ejecutar efectos secundarios en los componentes funcionales. Antes de `useEffect`, los efectos secundarios se manejaban en los métodos de ciclo de vida de los componentes de clase, como `componentDidMount`, `componentDidUpdate`, y `componentWillUnmount`. Ahora, `useEffect` nos proporciona una forma más limpia y poderosa de manejar estos casos en componentes funcionales.

## ¿Qué es un Efecto Secundario?

En React, un efecto secundario es cualquier cosa que afecte algo fuera del ámbito del componente en sí. Algunos ejemplos comunes de efectos secundarios incluyen:

- Realizar una petición de datos a una API.
- Subscribirse a un evento (como un `WebSocket`).
- Manipular directamente el DOM.
- Registrar mensajes en la consola.

---

## Sintaxis Básica de `useEffect`

La sintaxis básica de `useEffect` es la siguiente:

```javascript
useEffect(() => {
  // Código del efecto
}, [dependencias]);
```

- **Función del Efecto**: Es la función que ejecutará el efecto. Puede contener cualquier lógica, desde la llamada a una API hasta la manipulación del DOM.
- **Array de Dependencias**:  Es opcional. Contiene variables o props que, cuando cambian, desencadenan la ejecución del efecto. Si se omite, el efecto se ejecuta en cada renderizado. Si es un array vacío ([]), el efecto se ejecuta solo una vez, al montar el componente.

---

## Ejemplo básico de `useEffect`

Vamos a ver un ejemplo básico de cómo usar useEffect para registrar un mensaje en la consola cuando el componente se renderiza por primera vez:

```javascript
import React, { useEffect } from 'react';

const MessageLogger = () => {
  useEffect(() => {
    console.log('El componente se ha montado');
  }, []); // Array de dependencias vacío para que se ejecute solo una vez

  return <div>Chequea la consola para ver el mensaje de montaje.</div>;
};

export default MessageLogger;
```

En este ejemplo:

- El efecto se ejecuta solo una vez, cuando el componente se monta, gracias al array de dependencias vacío [].
- `console.log` se ejecuta solo una vez.

---

## Efectos con Dependencias

`useEffect` también puede responder a cambios en variables específicas. Por ejemplo, si queremos ejecutar un efecto solo cuando una variable de estado `count` cambia, haríamos lo siguiente:

```javascript
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`El valor de count ha cambiado: ${count}`);
  }, [count]); // Se ejecuta cada vez que `count` cambia

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default Counter;
```

Aquí:
- El efecto se ejecuta cada vez que el valor de `count` cambia.
- Esto es útil para sincronizar partes de la UI con cambios de estado.

---

## Limpiar Efectos

Algunos efectos secundarios requieren limpieza para evitar fugas de memoria o comportamientos inesperados. Por ejemplo, al subscribirse a un evento, querrás desuscribirte cuando el componente se desmonte. Puedes hacerlo devolviendo una función de limpieza desde el efecto:

```javascript
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Función de limpieza
    return () => clearInterval(interval);
  }, []); // Array vacío para ejecutar solo al montar y desmontar

  return <div>Segundos: {seconds}</div>;
};

export default Timer;
```

En este ejemplo:
- Se inicia un intervalo que incrementa el estado `seconds` cada segundo.
- La función de limpieza (`clearInterval`) asegura que el intervalo se limpie cuando el componente se desmonte, previniendo fugas de memoria.

---

## Efectos que dependen de Props o Estado

Puedes usar `useEffect` para realizar una acción cuando cambian múltiples dependencias. Aquí hay un ejemplo en el que el efecto se ejecuta cuando cambian las variables `count` o `otherValue`:

```javascript
import React, { useState, useEffect } from 'react'

const MultiDependencyEffect = () => {
  const [count, setCount] = useState(0)
  const [otherValue, setOtherValue] = useState('')

  useEffect(() => {
    console.log(`Count o otherValue han cambiado: ${count}, ${otherValue}`)
  }, [count, otherValue])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar Count</button>
      <input
        type="text"
        value={otherValue}
        onChange={e => setOtherValue(e.target.value)}
        placeholder="Escribe algo"
      />
    </div>
  )
}

export default MultiDependencyEffect
```

---

## Conclusión

El hook useEffect es una herramienta poderosa para manejar efectos secundarios en componentes funcionales de React. Ya sea para ejecutar código una sola vez cuando el componente se monta, o para responder a cambios en el estado o las props, useEffect te ofrece una forma declarativa y limpia de gestionar estas tareas.

¡Experimenta con useEffect en tus propios componentes para ver cómo puede facilitar el manejo de efectos secundarios en tus aplicaciones React!