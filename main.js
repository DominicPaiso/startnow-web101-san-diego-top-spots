$(document).ready(function () {
  $.getJSON('data.json', function (data) {
    var table = [];
    $.each(data, function (index, item) {
      table.push('<tr><td>' + item.name + '</td><td>' + item.description + '</td><td>' + item.location + '</td></tr>')
      
    });
    console.log(table);
    $('#userdata').append(table);


  });
});
