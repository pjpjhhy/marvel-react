const API_KEY = import.meta.env.VITE_API_KEY;
console.log(API_KEY)

const BASE_URL = "https://gateway.marvel.com:443/v1/public"

// GET COMICS LIST
export async function apiGetComics(){
    return await fetch(
        `${BASE_URL}/comics?apikey=${API_KEY}`,
        {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => res.json());
      }

      // event list
      export async function apiGetEvents(){
        return await fetch(
            `${BASE_URL}/events?limit=10&apikey=${API_KEY}`,
            {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            ).then((res) => res.json());
          }

      //series list
      export async function apiGetSeries(){
        return await fetch(
            `${BASE_URL}/series?limit=6&apikey=${API_KEY}`,
            {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            ).then((res) => res.json());
          }

      // [GET] Characters 리스트
      export async function apiGetCharacters({queryKey}) {
       const limit = queryKey[1].limit
        try {
          return await fetch(`${BASE_URL}/characters?limit=${limit}&apikey=${API_KEY}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => res.json());
        } catch (error) {
          console.log(error);
        }
      }
