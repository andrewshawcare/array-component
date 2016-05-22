/*global define */
define([], function () { "use strict";
  return function (data) {
    var data = data || {};
    var array = data.array || [];
    var ValueComponent = data.ValueComponent || function (data) {
      var value = data.value || "";
      var valueElement = document.createElement("span");
      valueElement.textContent = value;
      return valueElement;
    };

    var arrayElement = document.createElement("ol");
    arrayElement.classList.add("array");
    array.forEach(function (value) {
      var itemElement = document.createElement("li");
      itemElement.classList.add("value");
      itemElement.appendChild(ValueComponent({value: value}));
      arrayElement.appendChild(itemElement);
    });

    return arrayElement;
  };
});
