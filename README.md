# Inventory Management System

## 1. Introduction

This web application is full-stack inventory management solution built with FastAPI and React. This project was developed as a learning exercise.   

### Description

#### About the Project

The object of this project was to understand the end-to-end flow of full-stack developing. Therefore, the code follows the tutorial closely to ensure a solid function.  

Based on the knowledge gained here, I have also developped a separate Poker Bankroll Management project.  

#### About the Application

The following are key features and concepts of the application:

- **Database relationship using foreign keys:** Each product was linked with each supplier using supplier_id.
- **CRUD operations:** The Product Database can be created, read, updated, and deleted from the frontend
- **Component-based UI:** The UI was built using React functional components, making the codebase easier to maintain and scale.
- **Asynchronous Data Handling:** FastAPI's async capabilties are used to handle database operations (especially queries) without blocking the server.  

###　Screenshot
| Home Screen（Product Data） | Product Add Page |
| :---: | :---: |
| ![Home Screen](./screenshots/home_screen.png) | ![Product Add Page](./screenshots/product_add_page.png) |  

## 2. Setup & Usage

### Tech Stack

#### Backend

- **Framework**: FastAPI
- **ORM**: Tortoise-ORM
- **Database**: SQLite
- **Security**: python-dotenv, CORS Middleware  

#### Frontend

- **Framework**: React (Vite)
- **Styling**: Bootstrap 4.6, React-Bootstrap
- **Routing**: React Router Dom  

### Environment & Compatibility

Latest versions of each library were used. This differs from the educational material.

* **Development OS**: Windows 11 (via WSL2 / Ubuntu 24.04)
* **Python**: 3.12.3
* **Key Dependencies**:
    * `fastapi==0.128.0`
    * `pydantic==2.12.12`
    * `uvicorn==0.40.0`
* *Refer to `requirements.txt` for the full list of dependencies.*  

### Step-by-step Guide

#### 1. Backend

1. Open terminal and navigate to the backend directory
2. Create and activate virtual environment
3. Install dependencies
4. Start server  

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app:app --reload
```  

#### 2. Frontend

1. Open terminal and navigate to the frontend directory
2. Install npm packages
3. Start server  

```bash
cd front_end
npm install
npm run dev
```  

### Project Structure

```text
inventory-app
├── README.md
├── backend/
│   ├── .env.example            # Sample environment
variables
│   ├── app.py
│   ├── models.py               # Database models
│   ├── requirements.txt
├── dev_log.md                  # Development diary
└── front_end/
    ├── index.html
    ├── package.json
    ├── src/                    # React component
    └── vite.config.js          # VIte configuration
```  

## 3. Project Management Information

### License

This project is licensed under the MIT License - see the LICENSE file for details.  

### Acknowledgments

This project was built for educational purposes following a YouTube tutorial.
- **Tutorial Video**: FastAPI and React - Code With Prince (https://youtube.com/playlist?list=PLU7aW4OZeUzwYXbC_mbQJdAU7JUu81RZo&si=e5AzozGGDrv-GDW8)
- **Original Source Code**: InventoryManagementSeries - Princekrampah (https://github.com/Princekrampah/InventoryManagementSeries)  

### Contact

TeruyaY - https://github.com/TeruyaY