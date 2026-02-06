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
      { label: "Yes ❤️", next: "yes" },
      { label: "Of course 😘", next: "yes" }
    ]
  },
  yes: {
    text: "You just made my day 💖\nCan’t wait to see you 😍",
    options: []
  }
};

const qEl = document.getElementById("question");
const optEl = document.getElementById("options");

function load(key) {
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