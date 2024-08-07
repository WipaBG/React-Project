# React-Project

SoftUni React Project

## An Example Website for a Villa in Sozopol

This project was built with the idea of future development. The project aims to showcase a summer villa (hotel) and allows users to reserve directly and share their opinions about the place.

## Architecture

This section outlines the structure of the project's source (`src`) folder, which contains all the main components and utilities used in the application.

| Folder/File       | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| [api](#APIs)      | Contains modules for making API requests, including authentication.         |
| [components](#Components) | Houses the React components used across the application.               |
| [contexts](#Context) | Contains React context providers and consumers for global state management. |
| [HOC](#HOC)       | Higher-Order Components that wrap other components to provide additional functionality. |
| [hooks](#Hooks)   | Custom React hooks for reusable logic across components.                    |
| [utils](#Utils)   | Utility functions and helpers used throughout the application.              |
| [App.css](#UI)    | Main CSS file for styling the application.                                  |
| [App.js](#App)    | Root component of the application where the main routing and structure are defined. |

## APIs

### Auth API module

This module provides basic user authentication functionalities, including login, registration, and logout operations. It interacts with an API hosted at `http://localhost:3030/users`.

```
import requester from "./requester";

const BASE_URL = "http://localhost:3030/users";

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns
 */
export const login = (email, password) =>
  requester.post(`${BASE_URL}/login`, { email, password });

export const register =  (email, password) =>
  requester.post(`${BASE_URL}/register`, { email, password });

export const logout = ()=>{
  requester.get(`${BASE_URL}/logout`);
}

```

### Comments API module

This module handles operations related to comments within the application, allowing for the creation of new comments and retrieval of comments for a specific room. It interacts with an API hosted at `http://localhost:3030/data/comments`.

```
import requester from "./requester";

const BASE_URL = "http://localhost:3030/data/comments";

const create =  (roomId, text, date) =>
  requester.post(BASE_URL, { roomId, text, date });

const getAll = (roomId) => {
  const params = new URLSearchParams({
    where: `roomId="${roomId}"`,
    load: `author=_ownerId:users`
  });

  return requester.get(`${BASE_URL}?${params.toString()}`);
};

export default {
  create,
  getAll,
};
```

### Requester Module
This module provides a utility for making HTTP requests with support for different HTTP methods (`GET`, `POST`, `PUT`, `DELETE`). It includes automatic handling of JSON data and authorization tokens.
```
import { getAccesToken } from "../utils/authUtils";

async function requester(method, url, data) {
  const options = {};

  const accessToken = getAccesToken();

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.headers = {
      // ...options.headers,
      "Content-Type": "application/json",
    };

    options.body = JSON.stringify(data);
  }

  if (accessToken) {
    options.headers = {
      ...options.headers,
      "X-Authorization": accessToken,
    };
  }

  const response = await fetch(url, options);
  
  if(response.status === 204){
      return;
  }

  const result = await response.json();

  if (!response.ok) {
    throw result;
  }

  return result;
}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");

export default {
  get,
  post,
  put,
  del,
};

```
### Reservations API module
This module provides functions to manage reservations, including fetching, creating, updating, and deleting reservations. It interacts with an API hosted at `http://localhost:3030/data/reservations`.
```
import * as request from "./requester";

const BASE_URL = "http://localhost:3030/data/reservations";

const getAll = async () => {
  const result = await request.get(BASE_URL);

  const reservations = Object.values(result);

  return reservations;
};

const getLatest = async () => {
  const urlSearchParams = new URLSearchParams({
    sortBy: "_createdOn desc",
    pageSize: 3, 
  });
  const result = await request.get(`${BASE_URL}?${URLSearchParams.toString()}`);
  const latesrReservations = Object.values(result);
  return latesrReservations;
};

const getOne = (reservationId) => request.get(`${BASE_URL}/${reservationId}`);

const create = (reservationData) =>
  request.post(`${BASE_URL}`, reservationData);

const remove = (reservationId) => request.del(`${BASE_URL}/${reservationId}`);

const update = (reservationId, reservationData) =>
  request.put(`${BASE_URL}/${reservationId}`, reservationData);

const reservationsAPI = {
  getAll,
  getOne,
  create,
  remove,
  update,
  getLatest
};

export default reservationsAPI;

```

### Rooms API Module

This module provides functions to interact with room data, allowing you to fetch all rooms or a specific room by its ID. The API interacts with the backend hosted at `http://localhost:3030/jsonstore/rooms`.
```
import * as request from "./requester";
const BASE_URL = "http://localhost:3030/jsonstore/rooms";

export const getAll = async () => {
  const result = await request.get(BASE_URL);

  const rooms = Object.values(result);

  return rooms;
};

export const getOne =  (roomId) => request.get(`${BASE_URL}/${roomId}`);



const roomsApi = {
  getAll,
  getOne,
};

export default roomsApi;
```



