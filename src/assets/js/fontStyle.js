var json = $.getJSON('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBwIX97bVWr3-6AIUvGkcNnmFgirefZ6Sw', function (data) {
  $.each(data.items, function (index, font) {
    $('.combobox').append($('<option></option>').attr('value', font.family).text(font.family));
    $('.google-fonts').append("'" + font.family + "' => array('title' => '" + font.family + "'),<br>")
  });
});
