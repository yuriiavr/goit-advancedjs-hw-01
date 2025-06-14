document.addEventListener('DOMContentLoaded', () => {
  const mainSplitScreen = document.getElementById('main-split-screen');
  const gallerySectionLink = document.getElementById('gallery-section-link');
  const formSectionLink = document.getElementById('form-section-link');
  const galleryContent = document.getElementById('gallery-content');
  const formContent = document.getElementById('form-content');
  const backButtons = document.querySelectorAll('.back-button');

  const sections = document.querySelectorAll('.section-link');
  sections.forEach(el => {
    el.style.width = '50%';
  });

  sections.forEach(item => {
    item.addEventListener('mouseenter', event => {
      event.target.style.width = '70%';
      sections.forEach(el => {
        if (el !== event.target) {
          el.style.width = '30%';
        }
      });
    });

    item.addEventListener('mouseleave', event => {
      sections.forEach(el => {
        el.style.width = '50%';
      });
    });
  });

  function showContent(contentElement) {
    mainSplitScreen.classList.add('hidden');
    galleryContent.classList.remove('visible');
    formContent.classList.remove('visible');
    contentElement.classList.add('visible');
  }

  function showSplitScreen() {
    mainSplitScreen.classList.remove('hidden');
    galleryContent.classList.remove('visible');
    formContent.classList.remove('visible');
  }

  gallerySectionLink.addEventListener('click', () => {
    showContent(galleryContent);
  });

  formSectionLink.addEventListener('click', () => {
    showContent(formContent);
  });

  backButtons.forEach(button => {
    button.addEventListener('click', showSplitScreen);
  });
});
