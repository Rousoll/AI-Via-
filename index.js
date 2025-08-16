    // Mobile drawer
    const menuBtn = document.getElementById('menuBtn');
    const drawer = document.getElementById('drawer');
    menuBtn?.addEventListener('click', () => {
      const isHidden = drawer.hasAttribute('hidden');
      drawer.toggleAttribute('hidden');
      menuBtn.setAttribute('aria-expanded', String(isHidden));
    });

    // Animate on scroll
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: .18 });
    document.querySelectorAll('[data-animate]').forEach(el => io.observe(el));

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

  /*
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());

  const response = await fetch("https://tally.so/forms/3y8JdX/submissions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    note.textContent = "Thank you! We'll get back to you within 1 business day.";
    form.reset();
  } else {
    note.textContent = "Oops! Something went wrong, please try again.";
  }
});
*/
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // prevent default form submission

  const formData = new FormData(form);

  try {
    const response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });

    const text = await response.text();

    if (text.trim() === 'success') {
      note.textContent = "Thank you! We'll get back to you within 1 business day.";
      form.reset();
    } else {
      note.textContent = "Oops! Something went wrong, please try again.";
    }
  } catch (err) {
    console.error(err);
    note.textContent = "Error sending the form. Try again later.";
  }
});
