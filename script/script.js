const faqBoxes = document.querySelectorAll('.accordian');

faqBoxes.forEach(faqBox => {
  const icon = faqBox.querySelector('img');
  const answer = faqBox.querySelector('.faq-answer-box');

  faqBox.addEventListener('click', () => {
    // icon.classList.toggle('faq-icon-active');
    // answer.classList.toggle('active');
    if (icon.classList.contains('faq-icon-active')) {
      icon.classList.remove('faq-icon-active');
      answer.style.maxHeight = '0';
      answer.style.padding = '0';
    } else {
      icon.classList.add('faq-icon-active');
      answer.style.maxHeight = (answer.scrollHeight + 10) + 'rem';
      answer.style.padding = '1rem 1.4rem';
    }
  });
});


// faqBoxes.forEach(faqBox => {
//   faqBox.addEventListener('click', () => {
//     const changeFaqIcon = document.querySelectorAll('.faq-box img');
//     if (changeFaqIcon.classList.contains('faq-icon')) {
//       changeFaqIcon.classList.remove('faq-icon')
//     } else {
//       changeFaqIcon.classList.add('faq-icon')
//     }
//   });
// });