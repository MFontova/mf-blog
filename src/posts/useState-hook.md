---
title: useState() React Hook
date: 2024-08-22
description: En este artículo entenderemos cómo funciona el hook useState
tags: [react, typescript]
---

## ¿Cómo funciona `useState`?

El hook useState es una función que nos permite añadir una variable de estado a un componente funcional de React. Este estado se guarda entre los renderizados y nos permite actualizar la interfaz de usuario en respuesta a cambios de datos. A diferencia de las variables normales, las variables de estado se "recuerdan" entre renderizados y, cuando cambian, hacen que el componente se vuelva a renderizar con el nuevo valor.

La sintaxis básica de useState es la siguiente:

```javascript
import React, { useState } from 'react';
const [state, setState] = useState(initialState);
```

- `state`: Es la variable que contiene el valor actual del estado.
- `setState`: Es la función que usaremos para actualizar el valor de `state`.
- `initialState`: Es el valor inicial del estado.

## Ejemplo básico de uso

Imaginemos un botón que incrementa un contador cada vez que es presionado:

```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Haz clic</button>
    </div>
  );
};

export default Counter;
```

En este ejemplo:
- Se declara una variable de estado `count` con un valor inicial de `0`.
- Se usa `setCount` para actualizar el valor de `count`.
- Cada vez que se hace clic en el botón, se llama a `setCount` con el nuevo valor de `count`, lo que provoca que el componente se vuelva a renderizar y actualice el número de clics mostrado en la interfaz.

## Actualizaciones basadas en el estado previo

Al actualizar el estado en base a su valor anterior, es más seguro usar una función que tome el estado previo como argumento:

```javascript
setCount(prevCount => prevCount + 1)
```

Esto es especialmente útil cuando las actualizaciones de estado son asincónicas o cuando hay múltiples llamadas a `setState` en secuencia.

## Estado con valores complejos
`useState` no está limitado a valores primitivos; puede manejar objetos, arrays y otros tipos de datos complejos. Aquí hay un ejemplo donde manejamos un objeto como estado:

```javascript
import React, { useState } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState({
        name: 'John Doe',
        age: 30,
    });

    const updateName = () => {
        setUser(prevUser => ({
            ...prevUser,
            name: 'Jane Doe'
        }));
    };

    return (
        <div>
            <p>Nombre: {user.name}</p>
            <p>Edad: {user.age}</p>
            <button onClick={updateName}>Actualizar Nombre</button>
        </div>
    );
};

export default UserProfile;
```

En este caso:

- Utilizamos useState para inicializar un objeto de usuario con propiedades name y age.
- La función updateName utiliza setUser para actualizar sólo la propiedad name del objeto, manteniendo el valor de age sin cambios mediante el operador de propagación ....

## Consideraciones importantes

- **Re-renderizados**: Cada vez que se llama a setState, React re-renderiza el componente para reflejar el cambio de estado.
- **Inmutabilidad**: Nunca debemos modificar el estado directamente. Siempre usemos setState para asegurarnos de que React detecte el cambio de estado y re-renderice el componente.
- **Tipo de Estado Inicial**: El tipo de initialState determina el tipo de dato del estado, y es importante que useState siempre inicialice con un valor adecuado.