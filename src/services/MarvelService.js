import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=977ed0f61ce8e5f2e47b738aa2a457af";
  const _baseOffset = 210;

  // getResourse = async (url) => {
  //   let res = await fetch(url);
  //   if (!res.ok) {
  //     throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  //   }
  //   return await res.json();
  // };

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };

  const getCharacterByName = async (charName) => {
    const res = await request(
      `${_apiBase}characters?name=${charName}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };


  const getAllComics = async (offset = 0) => {
    const res = await request(
      `${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformComic);
  };

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComic(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : "There is no description for this character",
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  const _transformComic = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || "There is no description",
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : "No information about the number of pages",
      price: comics.prices[0].price
        ? comics.prices[0].price + "$"
        : "not available",
      thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
      language: comics.textObjects[0]?.language || "en-us",
    };
  };

  //https://gateway.marvel.com:443/v1/public/comics/1308?apikey=

  return {
    loading,
    error,
    getAllCharacters,
    getCharacter,
    clearError,
    getAllComics,
    getComic,
    getCharacterByName
  };
}

export default useMarvelService;