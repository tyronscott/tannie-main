const birthday = new Date((new Date()).getFullYear(), '02', '07');
const isBirthday = Date.now() >= birthday.getTime();

function handleTickInit(tick) {
  var currentYear = (new Date()).getFullYear();
  Tick.count.down(currentYear + '-02-07').onupdate = function(value) {
    tick.value = value;
  };

  const credits = document.querySelector('a.tick-credits');
  // remove credits
  credits.parentNode.removeChild(credits);
}

const title = document.querySelector('.title p');
const description = document.querySelector('.description p');
if (isBirthday) {
  
} else {
  title.innerHTML = "It's not your birthday yet :("
  description.innerHTML = "<br>excited masyado eh wahahaha <br> meanwhile, enjoy the polyrythms below my adhd girl ";
}