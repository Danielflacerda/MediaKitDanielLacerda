// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Animação das barras de performance quando entram na viewport
const observerOptions = {
  threshold: 0.5,
  rootMargin: "0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute("style").match(/width:\s*([^;]+)/)[1]
    }
  })
}, observerOptions)

document.querySelectorAll(".performance-fill").forEach((bar) => {
  const width = bar.style.width
  bar.style.width = "0%"
  observer.observe(bar)
  setTimeout(() => {
    bar.style.width = width
  }, 100)
})

// Adiciona classe de animação aos cards quando entram na viewport
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.querySelectorAll(".stat-card, .audience-card, .partner-card").forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(20px)"
  card.style.transition = "all 0.6s ease"
  cardObserver.observe(card)
})
