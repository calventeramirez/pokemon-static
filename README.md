# Proyecto Astro - Listado de Pokémon

Este es un proyecto basado en [Astro](https://astro.build/) que consume la [PokéAPI](https://pokeapi.co/) para mostrar un listado básico de Pokémon.

## Características
- Uso de Astro como framework de desarrollo.
- Consumo de la PokéAPI para obtener la lista de Pokémon.
- Renderizado estático para mejorar el rendimiento.

## Instalación

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/calventeramirez/pokemon-static.git
   cd pokemon-static
   ```

2. Instalar dependencias:
   ```sh
   pnpm install
   ```

3. Ejecutar el proyecto en desarrollo:
   ```sh
   pnpm run dev
   ```

4. Construir para producción:
   ```sh
   pnpm run build
   ```

## Uso de la API
El proyecto realiza una petición a `https://pokeapi.co/api/v2/pokemon?limit=1304` para obtener todos los Pokémon disponibles en la PokéAPI y mostrarlos en una página con sus nombres e imágenes.