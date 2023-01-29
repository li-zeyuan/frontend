var link = document.querySelector('a');
link.text = 'Mozilla Developer Network';

var para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';

para.style.color = 'white';
para.style.background = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

var section = document.querySelector('section');
section.appendChild(para);

var text = document.createTextNode(' — the premier source for web development knowledge.');
var linkPara = document.querySelector('p');
linkPara.appendChild(text)