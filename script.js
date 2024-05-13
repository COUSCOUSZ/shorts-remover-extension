const deleteShorts = () => {
  const shorts = document.querySelector("ytd-reel-shelf-renderer");
  if (shorts) {
    shorts.remove();
  }
};
setInterval(deleteShorts, .5);
