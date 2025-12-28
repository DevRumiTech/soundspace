const items = [
    {
      id: 1,
      title: "Late Night Coding",
      type: "playlist",
      description: "A focused playlist designed for late-night coding sessions.",
      img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
    },
    {
      id: 2,
      title: "Chill Beats",
      type: "album",
      description: "Relaxing beats and ambient sounds for deep concentration.",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
    },
    {
      id: 3,
      title: "Design & Sound",
      type: "podcast",
      description: "A podcast exploring the relationship between creativity and sound.",
      img: "https://images.unsplash.com/photo-1589903308904-1010c2294adc"
    },
    {
      id: 4,
      title: "Focus Flow",
      type: "playlist",
      description: "Minimalist tracks to help you stay in the flow.",
      img: "https://images.unsplash.com/photo-1506157786151-b8491531f063"
    },
    {
      id: 5,
      title: "Electronic Dreams",
      type: "album",
      description: "Electronic music inspired by modern digital culture.",
      img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae"
    },
    {
      id: 6,
      title: "Creative Minds",
      type: "podcast",
      description: "Conversations with creatives about their process and inspiration.",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2"
    },
    {
      id: 7,
      title: "Morning Energy",
      type: "playlist",
      description: "Upbeat tracks to start your day with energy.",
      img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
    },
    {
      id: 8,
      title: "Indie Vibes",
      type: "album",
      description: "A collection of indie tracks with a relaxed atmosphere.",
      img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b"
    }
  ];
  
  const grid = document.getElementById("grid");
  
  function render(list) {
    grid.innerHTML = "";
    list.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div class="card-body">
          <h3>${item.title}</h3>
          <span>${item.type}</span>
        </div>
      `;
  
      card.onclick = () => {
        localStorage.setItem("soundspaceItem", JSON.stringify(item));
        window.location.href = "detail.html";
      };
  
      grid.appendChild(card);
    });
  }
  
  function filterItems(type, btn) {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  
    if (type === "all") render(items);
    else render(items.filter(i => i.type === type));
  }
  
  render(items);
  