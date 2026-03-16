# WTWR (What to Wear)

WTWR (What to Wear) is a React application that allows users to manage clothing items based on weather conditions.  
Users can navigate between pages, add new garments, and delete existing ones using a mock API server.

---

## Functionality

- Displays clothing items
- Uses React Router with two routes:
  - `/` (Home)
  - `/profile`
- Loads clothing items from a JSON server on initial render
- Add new clothing items using a modal form
- Delete clothing items with a confirmation modal
- Updates UI after POST and DELETE requests
- Responsive layout for desktop and mobile

---

## Technologies & Techniques

- React
- React Router
- Vite
- JSON Server (mock backend)
- API calls (GET, POST, DELETE)
- Custom `useForm` hook
- JSX components
- CSS (BEM methodology)
- Controlled form inputs
- State management with `useState`
- Side effects with `useEffect`

---

## API

Base URL:

http://localhost:3000

### Endpoints

- GET `/items`
- POST `/items`
- DELETE `/items/:id`

Clothing items are stored in a `db.json` file in the root of the project.

---

## Installation & Running the Project

### 1. Install dependencies

```bash
npm install
```

### 2. Start JSON Server

```bash
npm run server
```

### 3. Start development server

```bash
npm run dev
```

---

## Project Structure Highlights

- `App.jsx` handles routing and state management
- `Profile` contains `SideBar` and `ClothesSection`
- `AddItemModal` uses reusable `ModalWithForm`
- `useForm` custom hook manages form state
- `api.js` contains all server requests

---

## Project Pitch Video

Loom Video Link:  
https://www.loom.com/share/89fb1e1694e74b52bf0fabb633b08158

---

## Backend Repository

https://github.com/emilianabalaj-design/se_project_express

---

## Author

Emiliana Balaj  
TripleTen Software Engineering Student
