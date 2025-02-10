document.querySelector(".valentines").addEventListener("click", function() {
  // Toggle the 'open' class to trigger CSS transitions
  document.querySelector(".envelope").classList.toggle("open");
  document.getElementById("title").innerText = "";
  document.getElementById("title").innerHTML = "<div id=\"buttons\"><button class=\"options\" id=\"yes\">Yes</button><button class=\"options\" id=\"no\">No</button></div>"
  document.getElementById("buttons").classList.add("show");
  // document.getElementById("title").innerText = "changed";
});
