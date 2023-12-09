# PlainJS-todolist-mvc
A very simple todo app written in vanillaJS that implements the MVC pattern with two views.

## Table of contents
1. What is the MVC-pattern?
2. What up- and downsides does the MVC-pattern have?
3. How I implemented the viewchange in JS?

## 1.What is the MVC-pattern?
The Model-View-Controller (MVC) pattern is a software design approach widely used in building user interfaces. In MVC, the application is divided into three interconnected components:

### Model (Data Layer)
Represents the application's data and business logic. It manages the data, responds to queries, and updates the View when the data changes. The Model is independent of both the View and Controller.

### View (Presentation Layer)
Displays the data to the user and handles user input. It receives data from the Model and presents it to the user. The View is aware of the Model but has no knowledge of how the data is processed.

### Controller (Application Logic)
Acts as an interface between the Model and View. It receives user input from the View, processes it (usually involving updates to the Model), and updates the View accordingly. The Controller is responsible for handling user interactions and updating the Model and View as needed.

The MVC pattern promotes the separation of concerns, making the codebase more or less modular and easier to maintain. It enhances code reusability and allows for the independent development and testing of each component.

## What up- and downsides does the MVC-pattern have?
The MVC pattern offers modularity and reusability, enhancing maintainability and scalability while improving testability. However, it may introduce complexity in smaller applications and require managing tight coupling, potentially leading to a learning curve and unnecessary overhead.

## How I implemented the viewchange in JS?

The code in main.js that changes the view
```Javascript
function showView(view) {

  // Get both divs with the views
  const tableView = document.getElementById("tableViewContainer");
  const tileView = document.getElementById("tileViewContainer");

  if(view === "tableView") {

    // Set the view in the controller
    c.setView(todoTableView);

    // Display the tableview and hide the tileview
    tableView.style.display = "block";
    tileView.style.display = "none";

  } else if (view === "tileView") {

    // Set the view in the controller
    c.setView(todoTileView);

    // Display the tileview and hide the tableview
    tableView.style.display = "none";
    tileView.style.display = "block";

  } else {
    console.error("Unknown view");
  }
}
```