Barba.Pjax.start();
Barba.Dispatcher.on('linkClicked', (HTMLElement, MouseEvent) => {
  document.body.classList.add('is-transition-start');
});
Barba.Dispatcher.on('transitionCompleted', function(HTMLElement, MouseEvent) {
  document.body.classList.remove('is-transition-start');
});
