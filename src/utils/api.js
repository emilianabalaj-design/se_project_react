const baseUrl = "https://api.emi28-app.com";

function handleResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

const getItems = (token) => {
  return fetch(`${baseUrl}/items`, {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then(handleResponse);
};

function addItems({ name, imageUrl, weather }, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(handleResponse);
}

function deleteItems(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

function updateUserInfo({ name, avatar }, token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
}

function addCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
}

function removeCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
}

export {
  getItems,
  addItems,
  deleteItems,
  updateUserInfo,
  removeCardLike,
  addCardLike,
};
