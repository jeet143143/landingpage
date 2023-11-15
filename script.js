let tl = gsap.timeline({
  repeat: -1,
});

const slides = gsap.utils.toArray('.imgContainer');
const lines = gsap.utils.toArray('.line');

tl
.to(slides,{
  ease: Expo.easeInOut,
  width: "100%",
  duration: 2,
  stagger: 2,
},"flag")
.to(".heading h1",{
  ease: Expo.easeInOut,
  stagger: 2,
  duration: 2,
  top: 0
},"flag")
.to(".text",{
  ease: Expo.easeInOut,
  stagger: 2,
  duration: 2,
  top: "0%"
},"flag")
.to(".text",{
  delay: 2,
  ease: Expo.easeInOut,
  stagger: 2,
  duration: 1,
  opacity: 0
},"flag")
.to(".heading h1",{
  delay: 2,
  ease: Expo.easeInOut,
  stagger: 2,
  duration: 2,
  top: "-200%"
},"flag")



tl.eventCallback("onUpdate", () => {
  const progress = tl.progress();
  lines.forEach((dot, index) => {
      dot.classList.toggle('active', index * 0.25 <= progress && progress < (index + 1) * 0.25);
  });
});





setTimeout(() => {
	const loader = document.querySelector(".loader");
	loader.style.opacity = "0";
	loader.style.backgroundColor = "transparent";
	setTimeout(() => {
		loader.style.display = "none";
		document.body.style.overflow = "visible";
	}, 1000);
}, 3000)