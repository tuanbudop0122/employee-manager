function Validation() {
  this.checkEmpty = function(input, mess, spanId) {
    if (input.trim() === "") {
      getEle(spanId).innerHTML = mess;
      getEle(spanId).style.display = "block";
      return false;
    } else {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
  };

  this.checkLength = function(input, mess, spanId, min, max) {
    if (input.length > min && input.length < max) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    } else {
      getEle(spanId).innerHTML = mess;
      getEle(spanId).style.display = "block";
      return false;
    }
  };

  this.checkNumber = function(input, mess, spanId) {
    var numbers = /^[0-9]+$/;

    if (input.match(numbers)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    } else {
      getEle(spanId).innerHTML = mess;
      getEle(spanId).style.display = "block";
      return false;
    }
  };

  this.checkPosition = function(id, mess, spanId) {
    if (getEle(id).selectedIndex !== 0) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    } else {
      getEle(spanId).innerHTML = mess;
      getEle(spanId).style.display = "block";
      return false;
    }
  };

  this.checkTrungMa = function(input, mess, spanId, arrEmp) {
    /**
     * 1. Duyet mang arrEmp
     * 2. Kiem tra input(id) có trùng với id tồn tại trong arrEmp
     * 3. Nếu trùng return false
     * 4. Nguoi lại return true
     */

    //Cách 1
    /*
    for (var i = 0; i < arrEmp.length; i++) {
      if (arrEmp[i].id === input) {
        getEle(spanId).innerHTML = mess;
        getEle(spanId).style.display = "block";
        return false;
      }
    }
    getEle(spanId).innerHTML = "";
    getEle(spanId).style.display = "none";
    return true;
    */

    var isValid = true;
    arrEmp.forEach(function(item, index) {
      if (item.id === input) {
        isValid = false;
      }
    });

    if (isValid) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    } else {
      getEle(spanId).innerHTML = mess;
      getEle(spanId).style.display = "block";
      return false;
    }
  };
}
