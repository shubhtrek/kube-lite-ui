# Kubernetes Dashboard Lite (Frontend Only)

This project is a lightweight frontend simulation of a Kubernetes dashboard.
It is built to demonstrate how cluster resources like pods can be visualized in a clean and simple UI.

The goal of this project is not to connect to a real cluster, but to replicate the structure and behavior of tools like Kubernetes Dashboard or Headlamp from a frontend perspective.

---

## Features

* Search pods by name
* Filter pods by status (Running, Pending, Failed)
* View basic pod details
* Simple dashboard layout
* Light and dark theme toggle

---

## Tech Stack

* React (Vite)
* Tailwind CSS
* React Router

---

## Project Structure

```
src/
  components/
  pages/
  layout/
  data/
```

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/shubhtrek/kube-lite-ui.git
cd kube-lite-ui
npm install
npm run dev
```

---

## Screenshots
* Dashboard
<img width="1913" height="1096" alt="image" src="https://github.com/user-attachments/assets/9f34e286-4059-4206-9124-22ecec2c5e49" />

* Pod Details
<img width="1911" height="1101" alt="image" src="https://github.com/user-attachments/assets/4275bdcd-a3f4-4c47-9b2c-724cd0b2fd2c" />

## Purpose

This project was built to practice frontend development and understand how Kubernetes dashboards present data visually. It focuses on UI structure, state management, and user interaction.

---

## Future Improvements

* Integrate with a real Kubernetes API
* Add more resource types (Deployments, Services)
* Improve UI polish and responsiveness

---

## Author

Shubh Pingale
