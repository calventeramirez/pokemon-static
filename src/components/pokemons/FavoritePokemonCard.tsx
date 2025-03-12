import type { FavoritePokemons } from "@interfaces/favorite-pokemons";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemons;
}

export const FavoritePokemonCard: Component<Props> = (props) => {
  const { pokemon } = props;
  const [isVisible, setIsVisible] = createSignal(true);
  const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") ?? "[]"
    ) as FavoritePokemons[];
    const newFavorites = favorites.filter((pkmn) => pkmn.id !== pokemon.id);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imgURL}
            alt={pokemon.name}
            class="w-[96] h-[96]"
            style={`view-transition-name: ${pokemon.name}-image`}
          />
          <p class="capitalize">
            #{pokemon.id} - {pokemon.name}
          </p>
        </a>
        <button class="text-red-400" onClick={deleteFavorite}>
          Borrar
        </button>
      </div>
    </Show>
  );
};
