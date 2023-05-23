function startTimer() {
    timer = setInterval(() => {
      count++;
      counterElement.textContent = count;
    }, 1000);
  }

  decrementButton.addEventListener('click', () => {
    count--;
    counterElement.textContent = count;
  });

  // Event listener for increment button
  incrementButton.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
  });

  counterElement.addEventListener('click', () => {
    const like = document.createElement('li');
    like.textContent = `Liked ${count}`;
    likesList.appendChild(like);
  });

  // Event listener for pause button
  pauseButton.addEventListener('click', () => {
    clearInterval(timer);
    decrementButton.disabled = true;
    incrementButton.disabled = true;
    pauseButton.textContent = 'Resume';
  });

  // Event listener for restart button
  restartButton.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;
    decrementButton.disabled = false;
    incrementButton.disabled = false;
    pauseButton.textContent = 'Pause';
    startTimer();
  });

  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const comment = document.createElement('li');
    comment.textContent = commentInput.value;
    commentsList.appendChild(comment);
    commentInput.value = '';
  });