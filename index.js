ArrayComponent = function (array) {
  var arrayElement = document.createElement("ol");
  arrayElement.classList.add("array");
  array.forEach(function (item) {
    var itemElement = document.createElement("li");
    itemElement.innerText = item;
    arrayElement.appendChild(itemElement);
  });
  return arrayElement;
};
