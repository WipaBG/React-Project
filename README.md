# React-Project

SoftUni React Project

## An Example Website for a Villa in Sozopol

This project was built with the idea of future development. The project aims to showcase a summer villa (hotel) and allows users to reserve directly and share their opinions about the place.

## Architecture

This section outlines the structure of the project's source (`src`) folder, which contains all the main components and utilities used in the application.

| Folder/File               | Description                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------- |
| [api](#APIs)              | Contains modules for making API requests, including authentication.                     |
| [components](#Components) | Houses the React components used across the application.                                |
| [contexts](#Context)      | Contains React context providers and consumers for global state management.             |
| [HOC](#HOC)               | Higher-Order Components that wrap other components to provide additional functionality. |
| [hooks](#Hooks)           | Custom React hooks for reusable logic across components.                                |
| [utils](#Utils)           | Utility functions and helpers used throughout the application.                          |


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

## Components
| Folder/File                               | Description                                                                                                                                                                                                                                                 |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [About](#About)                           | The `About` component displays information about "Villa Alexa" and includes a carousel for showcasing images. It uses the `react-slick` library for the carousel functionality.                                                                             |
| [Catalog](#Catalog)                       | The `Catalog` component displays a list of rooms using data retrieved from a custom hook. Each room is represented by a `CatalogCard` component                                                                                                             |
| [CatalogCard](#CatalogCard)               | The CatalogCard component represents an individual room card that includes an image and room type. It links to a detailed view of the room                                                                                                                  |
| [CatalogDetails](#CatalogDetails)       | The `CatalogDetails` component displays detailed information about a specific room, including its details and comments. It also allows authenticated users to add new comments.                                                                             |
| [PrivateGuard](#PrivateGuard)  | The `PrivateGuard` component is used to protect routes by ensuring that only authenticated users can access them. It uses React Router's `Outlet` to render child routes if the user is authenticated, or redirects to the login page if not.               |
| [CreateReservation](#Create-reservation)  | The `CreateReservation` component allows users to create a reservation by selecting room types, providing personal information, and specifying check-in and check-out dates. It validates the reservation against existing bookings to ensure availability. |
| [ReservationDetails](#ReservationDetails) | The `ReservationDetails` component displays detailed information about a specific reservation and provides options to modify or cancel the reservation. It ensures that only the owner of the reservation can cancel it.                                    |
| [Navigation](#Navigation)                 | The `Navigation` component provides a navigation menu for the website, with links that adapt based on the user's authentication status. It is wrapped with a higher-order component (`withAuth`) to inject authentication props.                            |
| [Home](#Home)                             | The `Home` component serves as the landing page for the application. It displays a welcome message and a section for the latest reservations. It fetches the latest reservations from the API and displays them using the `LatestReservation` component.    |
| [Login](#Login)                           | The `Login` component provides a user interface for users to log into the application. It manages user authentication by handling login form submission and displaying any authentication errors.                                                           |
| [Login](#App)                             | The Login component provides a user interface for logging into the application. It includes a form where users can enter their email and password. Upon submission, it attempts to authenticate the user and navigate to the homepage if successfu          |
| [Reservation](#App)                       | The Reservations component displays a list of all reservations made by the user. If there are no reservations, it shows a message indicating that no reservations have been made yet.                                                                       |
| [ReservationItem](#App)                   | The ReservationItem component displays detailed information for a single reservation. It is only rendered if the reservation belongs to the currently authenticated user. The component provides a link to view more details about the reservation.         |

## Contexts

### AuthContext
The AuthContext provides authentication state management and context to the entire application. It includes user information, authentication status, and methods to modify or clear authentication data.

Components
1. AuthContext
A React context object used to share authentication data across the application.

Default Values:

userId: ''
email: ''
accessToken: ''
isAuthenticated: false
changeAuthState: (authState = {}) => null
logout: () => null
2. AuthContextProvider

A React component that provides authentication context to its children. It manages authentication state using a custom hook and offers functions to change the authentication state or log out.
Functions:
changeAuthState(state): Updates the authentication state.
logout(): Clears the authentication state.

3. useAuthContext

A custom hook to access authentication context data. It simplifies the process of retrieving and using authentication information within functional components.

## HOC
### withAuth
withAuth is a Higher-Order Component (HOC) designed to inject authentication context into a wrapped component. It provides the wrapped component with authentication-related props, enabling it to access and utilize authentication data and functions.
How It Works
+ useAuthContext Hook: The HOC uses the useAuthContext hook to access authentication data from the AuthContext.
+ Prop Injection: The HOC injects the authentication context into the wrapped component as the auth prop.
+ Component Enhancement: The wrapped component gains access to authentication details and functions without directly consuming the context.

## Hooks
| Folder/File         | Description                                                                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [useAuth](#useAuth) | These custom hooks provide a way to handle user authentication (login, register, and logout) by interacting with authentication API endpoints and managing authentication state through the AuthContext. |
### useAuth
* useLogin is a custom hook for handling user login. It interacts with the authentication API to perform login and updates the authentication state in the AuthContext.
* useRegister is a custom hook for handling user registration. It interacts with the authentication API to perform registration and updates the authentication state in the AuthContext.
* useLogout is a custom hook for handling user logout. It interacts with the authentication API to perform logout, updates the authentication state, and navigates the user to the login page.

| Folder/File                             | Description                                                                                                                                                                                                                                   |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [useCatalog](#useCatalog)| 
* getAllRooms is a custom hook for fetching and managing a list of all rooms. It retrieves room data from the rooms-api and provides it to the component.  
* useGetOneRoom is a custom hook for fetching and managing data for a single room identified by roomId. It retrieves room data from the rooms-api based on the provided room ID.                                                

| Folder/File                             | Description                                                                                                                                                                                                                                   |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [useComments](#useComments)             | 
* useCreateComment is a custom hook that provides a handler function for creating comments. It interacts with the comments-api to add a new comment for a specific room.   
* useGetAllComments is a custom hook that fetches and manages all comments for a specific room. It uses useReducer to handle state updates and useEffect to perform the data fetching.                                                              |




| Folder/File                             | Description                                                                                                                                                                                                                                   |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [useForm](#useForm) | useForm is a custom hook that simplifies form handling in React components. It manages form state and provides handlers for form changes and submission.    |



| Folder/File                             | Description                                                                                                                                                                                                                                   |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [usePersistedState](#usePersistedState) | is a custom React hook that manages state with persistence in localStorage. It initializes state from localStorage if available and provides a function to update the state, which also persists the new state in localStorage|



| Folder/File                             | Description                                                                                                                                                                                                                                   |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [useReservations](#useReservations)     | 
* useGetOneReservations is a custom hook that fetches a single reservation by its ID and manages the state of that reservation.
* useCreateReservation is a custom hook that provides a function to create a new reservation through the API.|


## utils
| Folder/File                             | Description                                                                                                                                                                                                                                   |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [authUtils](#useReservations)   |utility function that retrieves the access token from the local storage. The token is used for authentication and authorization in API requests.|





