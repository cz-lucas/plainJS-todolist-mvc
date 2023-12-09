import {Todo, TodoList} from './model.js'
import { Controller } from './controller.js'
import { TableView } from './tableView.js';
import { TileView } from './tileView.js';

var c = new Controller();
var td = new TodoList();

var todoTableView = new TableView();
var todoTileView = new TileView();

var currentView = "tableView";

function showView(view) {
  const tableView = document.getElementById("tableViewContainer");
  const tileView = document.getElementById("tileViewContainer");

  if(view === "tableView") {

    c.setView(todoTableView);

    tableView.style.display = "block";
    tileView.style.display = "none";

  } else if (view === "tileView") {

    c.setView(todoTileView);

    tableView.style.display = "none";
    tileView.style.display = "block";

  } else {
    console.error("Unknown view");
  }
}

function changeView() {
  if(currentView === "tableView") {
    showView("tileView");
    currentView = "tileView";
    changeViewButton.innerText = "Show tileview";
  } else {
    showView("tableView");
    currentView = "tableView";
    changeViewButton.innerText = "Show tableview";
  }

  c.updateView();
}

const changeViewButton = document.getElementById("changeViewButton");
changeViewButton.onclick = () => changeView();

c.setModel(td);

todoTableView.setController(c);
todoTileView.setController(c);

showView("tableView");

todoTileView.update();
