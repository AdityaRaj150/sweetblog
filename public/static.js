$("form").submit(function(event) {
    // Your transition or animation code here
    event.preventDefault(); 
    $(".add").addClass("rotate");
    $("add").css("border-radius", "50%");
    $(".add").css("padding", "8px");
    $("add").css("scale", "1.2");
    setTimeout(function() {
      // Submit the form after the delay
      event.currentTarget.submit();
      $("img").removeClass("rotate");
      $("img").css("border-radius", "8px");
      $("img").css("padding", "4px 18px 4px 18px");
      $("img").css("scale", "1");
    }, 500); // Adjust the delay time as needed
  });



  $(document).ready(function() {
    $("img").click(function() {
      $(this).css("transform", "rotate(360deg)");
    });
  });
  