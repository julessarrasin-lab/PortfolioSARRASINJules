(function(){
  var links=document.querySelectorAll('.side li');
  if(!links.length||!('IntersectionObserver' in window))return;
  var map={};links.forEach(function(li){var a=li.querySelector('a');map[a.getAttribute('href').slice(1)]=li;});
  var io=new IntersectionObserver(function(es){es.forEach(function(en){
    if(en.isIntersecting){links.forEach(function(l){l.classList.remove('on')});var li=map[en.target.id];if(li)li.classList.add('on');}
  });},{rootMargin:'-20% 0px -65% 0px'});
  document.querySelectorAll('.step').forEach(function(s){io.observe(s)});
  links[0].classList.add('on');
})();
