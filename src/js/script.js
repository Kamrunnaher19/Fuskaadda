function showTime() {
    const date = new Date();
    const convertedTime = date.toLocaleString("en-GB");
    const display = document.getElementById("displayTime");
    display.innerText = convertedTime;
  }
  
  setInterval(showTime, 1000);
  

  //FAQ//
  const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));




  