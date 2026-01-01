const images = document.querySelectorAll(".gallery img");
      const popup = document.getElementById("popup");
      const popupImg = document.querySelector("#popup img");
      const closeBtn = document.getElementById("closeBtn");

      images.forEach((img) => {
        img.addEventListener("click", () => {
          popup.style.display = "flex";
          popupImg.src = img.src;
          document.body.style.overflow = "hidden";
        });
      });

      const closePopup = () => {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
      };

      closeBtn.addEventListener("click", closePopup);

      popup.addEventListener("click", (e) => {
        if (e.target === popup) closePopup();
      });

      const modeBtn = document.getElementById("modeBtn");
      modeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        modeBtn.innerHTML = isDark ? "☀️ Mode Terang" : "🌙 Mode Gelap";
        
        modeBtn.style.backgroundColor = isDark ? "#ffd54f" : "#1976d2";
        modeBtn.style.color = isDark ? "#333" : "#fff";
      });