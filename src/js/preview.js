export default function () {
  document.addEventListener('DOMContentLoaded', function () {
    var videoIframe = document.querySelector('.video iframe');
    var previewImage = document.getElementById('preview-image');
    // Обробник події для відео
    videoIframe.addEventListener('click', function () {
      this.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
      previewImage.style.display = 'none';
    });
    // Обробник події для картинки
    previewImage.addEventListener('click', function () {
      videoIframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
      this.style.display = 'none';
    });
  });
}
