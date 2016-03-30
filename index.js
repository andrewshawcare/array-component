ArrayComponent = function (array, valueComponent) {
  var valueComponent = valueComponent || function (value) {
    var valueElement = document.createElement("span");
    valueElement.innerText = value;
    return valueElement;
  };
  var arrayElement = document.createElement("ol");
  arrayElement.classList.add("array");
  array.forEach(function (value) {
    var itemElement = document.createElement("li");
    itemElement.classList.add("item");
    itemElement.appendChild(valueComponent(value));
    arrayElement.appendChild(itemElement);
  });
  return arrayElement;
};
