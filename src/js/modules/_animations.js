import willChange from "./_willChange";

export default function animation() {
    let options = {
        root: null, // относительно viewport
        rootMargin: '0px',
        threshold: 0.50 // 75% элемента должно быть видно
      };
      
      let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // console.log('Элемент видим на', entry.intersectionRatio * 100, '%');
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 300);
          } 
          else {
            entry.target.classList.remove('visible');
          }
        });
      }, options);

      document.querySelectorAll('.fadeInLeft').forEach(el => {
        willChange(el, 'add', ['transform','opacity']);
        observer.observe(el);
        el.addEventListener("animationEnd", willChange(el, 'remove', ['transform','opacity']));
      });
      
      document.querySelectorAll('.fadeInRight').forEach(el => {
        willChange(el, 'add', ['transform','opacity']);
        observer.observe(el);
        el.addEventListener("animationEnd", willChange(el, 'remove', ['transform','opacity']));
      });

      document.querySelectorAll('.fadeInUp').forEach(el => {
        willChange(el, 'add', ['transform','opacity']);
        observer.observe(el);
        el.addEventListener("animationEnd", willChange(el, 'remove', ['transform','opacity']));
      });

      document.querySelectorAll('.fadeInBottom').forEach(el => {
        willChange(el, 'add', ['transform','opacity']);
        observer.observe(el);
        el.addEventListener("animationEnd", willChange(el, 'remove', ['transform','opacity']));
      });
      

      document.querySelectorAll('.fade').forEach(el => {
        willChange(el, 'add', ['opacity']);
        observer.observe(el);
        el.addEventListener("animationEnd", willChange(el, 'remove', ['opacity']));
      });
}