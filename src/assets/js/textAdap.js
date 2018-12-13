 $(document).ready(function () {
     var originalFontSize = 12;
     var sectionWidth = $('#sidebar').width();
     $('#sidebar span').each(function () {
         var spanWidth = $(this).width();
         var newFontSize = (sectionWidth / spanWidth) * originalFontSize;
         $(this).css({
             "font-size": newFontSize,
             "line-height": newFontSize / 1.2 + "px"
         });
     });
 });