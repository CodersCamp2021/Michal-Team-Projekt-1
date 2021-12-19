const base_url = process.env.SW_JSON_SERVER_URL;

export const getOneById = (mode, id) => {
  return fetch(`${base_url}/${mode}/${id}`)
    .then((response) => {
      if (!response.ok) throw new Error(response.statusText);
      return response.json();
    })
    .catch((error) => console.error(error));
};
