function EmployeeList() {
  this.arr = [];

  this.addEmpl = function(empl) {
    /**
     * Hàm push Thêm 1 phần tử vào mảng
     */
    this.arr.push(empl);
  };

  this.findIndexEmpl = function(id) {
    var index = -1;

    /**
     * Hàm forEach nhận tham số là 1 callback function (P/s: tham số của hàm lại là 1 hàm khác)
     * Trong callback function có 2 tham số
     *    - tham số thứ 1: đại diện cho từng phần tử khi duyệt qua mảng
     *    - tham số thứ 2: đại diện cho số chỉ mục của từng phần tử trong mảng
     * => Khi dùng forEach: không cần phải quan tạm mảng có độ dài bao nhiêu,
     *    duyệt đến khi nào hết mảng thì dừng
     */
    //Cach 1:
    // this.arr.forEach(function(item, i) {
    //   if (parseInt(item.id) === id) {
    //     index = i;
    //   }
    // });

    index = this.arr.findIndex(function(item) {
      return parseInt(item.id) === parseInt(id);
    });

    return index;
  };

  this.deleteEmpl = function(id) {
    var index = this.findIndexEmpl(id);
    if (index !== -1) {
      /**
       * Hàm splice giúp xóa đi phần tử trong mảng muốn xóa
       * Hàm splice có 2 tham số truyền vào
       *    - Tham số thứ 1: phải xác định dc vị trí phần tử muốn xóa
       *    - Tham số thứ 2: là số lượng phần từ muốn xóa.
       */
      this.arr.splice(index, 1);
    }
  };

  this.getEmplById = function(id) {
    var empl;
    //Cach 1:
    // this.arr.forEach(function(item) {
    //   if (parseInt(item.id) === id) {
    //     empl = item;
    //   }
    // });

    empl = this.arr.find(function(item) {
      return parseInt(item.id) === parseInt(id);
    });

    return empl;
  };
}

EmployeeList.prototype.updateEmpl = function(empl) {
  var index = this.findIndexEmpl(empl.id);
  if (index !== -1) {
    this.arr[index] = empl;
  }
};

EmployeeList.prototype.search = function(keyword) {
  /**
   * 1. tao ra 1 mangTimKiem = [];
   * 2. duyệt mảng arr
   * 3. Nếu nhu item.lastName === keyword
   * 4. mangTimKiem.push(item);
   * 5. return mangTimKiem
   */
  var mangTimKiem = [];
  //Cach 1:
  // this.arr.forEach(function(item) {
  //   if (item.lastName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
  //     mangTimKiem.push(item);
  //   }
  // });

  mangTimKiem = this.arr.filter(function(item) {
    return item.lastName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
  });

  return mangTimKiem;
};
