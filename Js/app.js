$(".headertxt").fadeIn(3000);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show-items", entry.isIntersecting);
    });
  });
  
  document.querySelectorAll(".scroll-scale, .scroll-buttom").forEach((el) => observer.observe(el));

//   SAME BY JQUERY 
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       $(entry.target).toggleClass("show-items", entry.isIntersecting);
//     });
//   });
  
//   $(".scroll-scale, .scroll-buttom").each((_, el) => observer.observe(el));
  
  