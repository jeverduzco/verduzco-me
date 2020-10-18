---
title: Qué es, qué no es y por qué es necesaria la telemetría en aplicaciones para el proceso DevOps
description: La telemetría en aplicaciones es fundamental en el proceso de DevOps. El problema está en que se confunde con analítica comercial. ¿Quieres saber qué es, qué no es y por qué es importante?
img: https://storage.verduzco.dev/dotme/blog/telemetria.png
opimg: https://storage.verduzco.dev/dotme/blog/telemetria-op.png
createdAt: 2020-10-12 10:00
updatedAt: 2020-10-12 10:00
related: what-is-telemetry
---

Seguramente has escuchado que Windows 10 tiene mucha telemetría que envía en tiempo real a Microsoft y que Android envía telemetría en tiempo real a Google. Seguramente también pensaste que te está espiando el sistema operativo con dicha telemetría. Pero la telemetría **no tiene nada que ver con espiarte**, tiene que ver con la operación misma de cada sistema o aplicación y es parte del ciclo DevOps. 

## ¿Qué es la telemetría? 

Según la Wikipedia es lo siguiente: 

>La telemetría es una tecnología que permite la medición remota de magnitudes físicas y el posterior envío de la información hacia el operador del sistema.

Pero en palabras más simples y aterrizadas al desarrollo de software se puede decir que la telemetría: **es la medición y análisis del sistema por parte del equipo de desarrollo.** 

Imagina que tú administras una aplicación web. Querrás saber cuántas veces falla una petición a la API, el tiempo que tarda en resolverse esa petición, etc. 

Con la telemetría **lo puedes hacer**. Puedes medir eso y mucho más para posteriormente tomar decisiones en base a dichos datos. Se podría decir que la telemetría es el análisis del rendimiento y funcionamiento del sistema, pero no del usuario. 

## ¿Qué no es la telemetría? 

En el proceso DevOps se considera telemetría a la recolección y análisis de datos necesarios para mantener el sistema operando. Pero **NO la recolección de datos con otros fines.** Por ejemplo, **Google Analytics no se considera un servicio de telemetría** porque está pensado para la segmentación publicitaria de Google, para rastrear al usuario y no para que el equipo de desarrollo monitoree el funcionamiento del sistema. 

Entonces... la telemetría no es una funcionalidad que te espié porque **NO es algo que se use para monitorearte a ti.** 

## ¿Por qué es importante en el proceso DevOps? 

La respuesta a esto es muy simple: es importante porque **lo que no se mide no se mejora.**  

Con la telemetría puedes **detectar fallos** en la API antes de que los usuarios lo noten, puedes detectar si el servidor está tardando demasiado tiempo en responder, puedes detectar si en determinados dispositivos o navegadores la aplicación tiene un rendimiento pobre o detectar la hora del día en la que debes programar el escalado automático porque es cuando más se usa. 

En pocas palabras la telemetría es importante debido a que es la única forma en la que **el equipo de desarrollo puede ser proactivo** y corregir lo que esté mal con su plataforma antes de que el cliente lo reporte. 

Ahora que ya sabes qué es, qué no es y para qué sirve la telemetría en el mundo de desarrollo de software. No te espantes si Windows 10, Android o iOS la incorporan. Es absolutamente **necesaria** para que el equipo **detecte fallos** y pueda trabajar para que tú disfrutes ese sistema o una determinada aplicación. 

Lo que sí debería de preocuparte son los servicios que **recolectan información destinada a monitorearte a ti** y no al propio servicio, de esos sistemas **corre** como si te persiguiera una horda de zombis. Pero **eso no es telemetría**, eso es directamente análisis sobre ti, no del sistema que usas.