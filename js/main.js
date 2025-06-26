document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
  const books = [
    {
      title: "Война и мир",
      author: "Лев Толстой",
      img: "images/books_titles/voina_i_mir.jpg",
      rating: "⭐⭐⭐⭐",
      link: "pages/books/book_voina_i_mir.html",
    },
    {
      title: "Преступление и наказание",
      author: "Федор Достаевский",
      img: "images/books_titles/prestuplenii_i_nakazanie.png",
      rating: "⭐⭐⭐⭐",
      link: "pages/books/book_prestuplenie_i_nakazanie.html",
    },
    {
      title: "Мастер и Маргарита",
      author: "Михаил Булгаков",
      img: "images/books_titles/master_i_margarita.jpg",
      rating: "⭐⭐⭐⭐⭐",
      link: "pages/books/book_master_i_margarita.html",
    },
    {
      title: "Анна Каренина",
      author: "Лев Толстой",
      img: "images/books_titles/anna_karenina.jpg",
      rating: "⭐⭐⭐⭐",
      link: "pages/books/book_anna_karenina.html",
    },
    {
      title: "Хребты безумия",
      author: "Говард Филипс Лавкрафт",
      img: "images/books_titles/hrebti_bevumiya.jpg",
      rating: "⭐⭐⭐⭐⭐",
      link: "pages/books/book_hrebti_bezumiya.html",
    },
    {
      title: "Божественная комедия",
      author: "Данте Алигьери",
      img: "images/books_titles/bozhestvennaya_komediya.jpg",
      rating: "⭐⭐⭐⭐",
      link: "pages/books/book_bozhestvenaya_komediya.html",
    },
  ];

  const visibleCount = 3;
  let startIndex = 0;

  const track = document.getElementById("slider-track");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  function renderSlider() {
    track.innerHTML = "";
    for (let i = 0; i < visibleCount; i++) {
      const book = books[(startIndex + i) % books.length];

      const card = document.createElement("div");
      card.className = "book-card";
      card.innerHTML = `
            <a href="${book.link || "#"}">
              <div class="book-cover">
                <img src="${book.img}" alt="${book.title}">
              </div>
              <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
                <div class="book-rating">${book.rating}</div>
              </div>
            </a>
          `;
      track.appendChild(card);
    }
  }

  nextBtn.addEventListener("click", () => {
    startIndex = (startIndex + 1) % books.length;
    renderSlider();
  });

  prevBtn.addEventListener("click", () => {
    startIndex = (startIndex - 1 + books.length) % books.length;
    renderSlider();
  });

  renderSlider(); // начальная отрисовка
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
