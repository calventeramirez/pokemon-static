import type { FavoritePokemons } from "@interfaces/favorite-pokemons";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemons[] => {
  const pokes = JSON.parse(localStorage.getItem("favorites") ?? "[]");

  return pokes;
};

export const FavoritePokemon = () => {
  const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons());

  return (
    <div class="grid grid-cols-2 sm:grid-cols-4">
      <For each={pokemons()}>
        {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
      </For>
    </div>
  );
};
