function playSound(src) {
	const audio = new Audio(src);
	audio.play()
		.catch((err) => {
			alert("an error occured:", err);
			return;
		});
	return;
}

document.querySelectorAll(".tab-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".category").forEach(cat => cat.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

const buttons = document.getElementsByClassName("sound-button");

for (let button of buttons) {
  button.addEventListener("click", () => {
    const audioValue = button.getAttribute("audio");
    playSound(`/sounds/${audioValue}.wav`);
  });
}
