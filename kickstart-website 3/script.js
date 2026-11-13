  document.querySelectorAll('.topnav ul a, .topnav .logo').forEach(function (a) {
    a.addEventListener('click', function () {
      document.getElementById('menu-toggle').checked = false;
    });
  });
