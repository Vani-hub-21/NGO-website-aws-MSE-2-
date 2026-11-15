// ---------- Counters (home page) ----------
var counters = document.querySelectorAll(".counter");
for (var i = 0; i < counters.length; i++) {
  animateCounter(counters[i]);
}
function animateCounter(el) {
  var target = Number(el.getAttribute("data-target"));
  var count = 0;
  var step = target / 100;
  var timer = setInterval(function () {
    count = count + step;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    el.innerText = Math.floor(count);
  }, 20);
}

// ---------- Progress bar ----------
var goal = 500000;
var raised = 250000;
function updateProgress() {
  var bar = document.getElementById("progressfill");
  if (bar == null) return;
  var percent = (raised / goal) * 100;
  if (percent > 100) percent = 100;
  bar.style.width = percent + "%";
  document.getElementById("raised").innerText = raised;
}
updateProgress();

// ---------- Donate page ----------
function setAmount(a) {
  document.getElementById("amount").value = a;
}
function donate() {
  var amount = Number(document.getElementById("amount").value);
  var name = document.getElementById("dname").value;
  var email = document.getElementById("demail").value;
  if (isNaN(amount) || amount < 100) {
    alert("Please enter amount of at least Rs 100");
    return false;
  }
  if (name == "") {
    alert("Please enter your name");
    return false;
  }
  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    alert("Please enter a valid email");
    return false;
  }
  raised = raised + amount;
  updateProgress();
  alert("Thank you " + name + " for donating Rs " + amount);
  return false;
}

// ---------- Volunteer form validation ----------
function checkVolunteer() {
  var name = document.getElementById("vname").value;
  var email = document.getElementById("vemail").value;
  var phone = document.getElementById("vphone").value;
  var age = Number(document.getElementById("vage").value);
  var area = document.getElementById("varea").value;

  if (name == "") {
    alert("Name cannot be empty");
    return false;
  }
  if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    alert("Enter a valid email");
    return false;
  }
  if (phone.length != 10 || isNaN(phone)) {
    alert("Phone number must be 10 digits");
    return false;
  }
  if (isNaN(age) || age < 16 || age > 70) {
    alert("Age must be between 16 and 70");
    return false;
  }
  if (area == "") {
    alert("Please select an area of interest");
    return false;
  }
  alert("Thank you " + name + "! You are registered as a volunteer.");
  return true;
}

// ---------- Contact form ----------
function checkContact() {
  var name = document.getElementById("cname").value;
  var email = document.getElementById("cemail").value;
  var msg = document.getElementById("cmsg").value;
  if (name == "" || msg == "") {
    alert("Please fill name and message");
    return false;
  }
  if (email.indexOf("@") == -1) {
    alert("Enter a valid email");
    return false;
  }
  alert("Message sent. Thank you!");
  return true;
}

// ---------- Gallery lightbox ----------
function openPhoto(name, color) {
  var big = document.getElementById("bigphoto");
  big.innerText = name;
  big.style.backgroundColor = color;
  document.getElementById("lightbox").style.display = "block";
}
function closePhoto() {
  document.getElementById("lightbox").style.display = "none";
}
