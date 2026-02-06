const flow = {
  q1: {
    text: "Hey ❤️ I have something to ask you…",
    options: [
      { label: "Okay 😊", next: "q2" }
    ]
  },
  q2: {
    text: "Every moment with you feels special ✨",
    options: [
      { label: "Aww 🥰", next: "q3" }
    ]
  },
  q3: {
    text: "So I was wondering…",
    options: [
      { label: "Yes? 💭", next: "q4" }
    ]
  },
  q4: {
    text: "Will you be my Valentine? 💌",
    options: [
      { label: "Yes ❤️", next: "sendMessage" },
      { label: "Of course 😘", next: "sendMessage" }
    ]
  }
};

const qEl = document.getElementById("question");
const optEl = document.getElementById("options");

function load(key) {

  // When user clicks Yes → open WhatsApp
  if (key === "sendMessage") {
    window.location.href =
      "https://wa.me/919860245352?text=I%20said%20yes%20❤️";
    return;
  }

  qEl.innerText = flow[key].text;
  optEl.innerHTML = "";

  flow[key].options.forEach(o => {
    const btn = document.createElement("button");
    btn.innerText = o.label;
    btn.onclick = () => load(o.next);
    optEl.appendChild(btn);
  });
}

load("q1");