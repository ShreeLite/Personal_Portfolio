// js/analytics.js

function logPageView() {
    console.log(`${new Date().toISOString()} , view , page: ${document.title}`);
  }
  
  function getObjectType(target) {
    const tag = target.tagName;
    if (tag === 'IMG') return 'image';
    if (tag === 'A') return 'hyperlink';
    if (tag === 'P') return 'text';
    if (tag === 'LI') return 'list item';
    if (tag === 'UL') return 'list';
    if (tag === 'BUTTON') return 'button';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return 'input field';
    return `other (${tag})`;
  }
  
  window.addEventListener("load", logPageView);
  
  document.addEventListener("click", function (event) {
    const objectType = getObjectType(event.target);
    console.log(`${new Date().toISOString()} , click , ${objectType}`);
  });
  