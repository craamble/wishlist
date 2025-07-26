const items = document.querySelectorAll('.item');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalLink = document.getElementById('modal-link');
    const closeBtn = document.getElementById('close');

    items.forEach(item => {
      item.addEventListener('click', () => {
        modalTitle.textContent = item.dataset.title;
        modalDesc.textContent = item.dataset.desc;
        modalLink.href = item.dataset.link;
        // Текст ссылки статичен «Buy now»
        modal.style.display = 'flex';
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });