if (details = document.getElementsByTagName('summary')) {
  for (let detail of details) {
    detail.addEventListener('click', function(e) {
      if (siblings = e.target.parentNode.parentNode.getElementsByTagName('details')) {
        for (let sibling of siblings) {
          if (e.target.parentNode != sibling) {
            sibling.removeAttribute('open');
          }
        }
      }
    });
  }
}