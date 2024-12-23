let currentDot = 0;
const dots = document.querySelectorAll('.dot');
const links = [
  '../index.html', // Replace with your desired page URL
  '/techy-jaunt-ass/Link-1/link1.html',
  '/techy-jaunt-ass/Link-2/link2.html',
  '/techy-jaunt-ass/Link-3/custom.html',
  '/techy-jaunt-ass/Link-4/main.html'
];

function activateDot(index) {
  dots.forEach((dot, i) => {
    // dot.classList.toggle('active', i === index);

    // Add click event to each dot
    dot.onclick = () => {
      window.location.href = links[i]; // Redirect to the corresponding page
    };
  });
}

// Automatically switch active dot every 3 seconds
setInterval(() => {
  currentDot = (currentDot + 1) % dots.length;
  activateDot(currentDot);
}, 3000);

// Initialize the first dot with the link functionality
activateDot(currentDot);
