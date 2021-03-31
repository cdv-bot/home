$(document).ready(function () {
  $('#bt_login').click(function () {
    let userName = $('#userName').val().trim();
    let password = $('#password').val().trim();
    let check = $('#dk').val().trim();
    if ($('#dk').is(":checked")) {
      if (password !== "" && userName !== "") {
        if (userName !== 'admin' && password !== 'admin') {
          alert('Mời nhập : admin/admin ');
        } else {
          window.location = "/home";
        }
      } else {
        alert('Mời điền đầy đủ: admin/admin!!!');
      }
    } else {
      alert('Vui lòng chấp nhận điều khoản !!!');
    }

  })

})