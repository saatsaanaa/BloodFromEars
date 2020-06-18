var mainAnimation = anime.timeline({
  easing: 'linear',
  duration: 300,
  direction: 'alternate',
  loop: true
});

mainAnimation
.add({
  targets: '.singer',
  left: '-30vw'
})
.add({
  targets: '.singer path',
  d: 'M20.8157 491L157.454 439C179.318 429.35 226.074 370.242 195.41 338.768C189.525 332.728 180.828 330.294 170.264 330.568M20.8157 491C83.7457 477.396 114.612 541.415 157.454 543.908C184.569 545.486 180.783 578.921 179.651 591.504C173.798 597.611 157.405 622.242 138.656 622.059M20.8157 491C40.9913 553.308 119.908 621.876 138.656 622.059M20.8157 491C50.9286 428.692 125.772 331.719 170.264 330.568M138.656 622.059C133.328 624.255 125.404 626.154 136.336 646.093C150.001 671.016 226.073 805.6 0 815M170.264 330.568C161.31 323.297 141.989 332.68 136.335 308.754C129.269 278.846 231.983 300.339 255.584 260.462C279.185 220.585 24.8432 78.5231 5.21406e-07 5'
},'-=400')
.add({
  targets: '.singer path',
  d: 'M20.8157 491L157.454 439C179.318 429.35 226.074 370.242 195.41 338.768C189.525 332.728 180.828 330.294 170.264 330.568M20.8157 491C83.7457 477.396 114.612 541.415 157.454 543.908C184.569 545.486 180.783 578.921 179.651 591.504C173.798 597.611 157.405 622.242 138.656 622.059M20.8157 491C40.9913 553.308 119.908 621.876 138.656 622.059M20.8157 491C50.9286 428.692 125.772 331.719 170.264 330.568M138.656 622.059C133.328 624.255 125.404 626.154 136.336 646.093C150.001 671.016 226.073 805.6 0 815M170.264 330.568C161.31 323.297 141.989 332.68 136.335 308.754C129.269 278.846 231.983 300.339 255.584 260.462C279.185 220.585 24.8432 78.5231 5.21406e-07 5'
},'-=600')
.add({
  targets: '.voice path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  delay: function(el, i) { return i * 250 },
},'-=20')
.add({
  targets: '.voice path',
  d: 'M4 234C71.3333 208 165 149.2 193 234C228 340 479 336 361 284C243 232 342 262 349 199C356 136 355 -59.0013 252 35.9987C149 130.999 266 206 335 199C390.2 193.4 479.333 140 527 138'
},'-=30')
.add({
  targets: '.ear',
  right: '-17vw'
},'-=600');

document.querySelector('.pause').onclick = mainAnimation.play;
