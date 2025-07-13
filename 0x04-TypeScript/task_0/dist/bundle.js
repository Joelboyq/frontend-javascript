/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\n// 2. Create two students\nvar student1 = {\n    firstName: 'Alice',\n    lastName: 'Johnson',\n    age: 22,\n    location: 'Kigali',\n};\nvar student2 = {\n    firstName: 'Bob',\n    lastName: 'Smith',\n    age: 25,\n    location: 'Musanze',\n};\n// 3. Store in an array\nvar studentsList = [student1, student2];\n// 4. Create a table and add rows dynamically\nvar table = document.createElement('table');\ntable.border = '1';\nstudentsList.forEach(function (student) {\n    var row = document.createElement('tr');\n    var firstNameCell = document.createElement('td');\n    firstNameCell.textContent = student.firstName;\n    var locationCell = document.createElement('td');\n    locationCell.textContent = student.location;\n    row.appendChild(firstNameCell);\n    row.appendChild(locationCell);\n    table.appendChild(row);\n});\n// 5. Append the table to the DOM\ndocument.body.appendChild(table);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;