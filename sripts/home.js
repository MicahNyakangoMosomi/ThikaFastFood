const likeElements = document.querySelectorAll('.like-unlike-image');

likeElements.forEach((element) => {
    element.addEventListener('click', () => {
        function like_unlike() {

            if (element.getAttribute("src") === 'images/likeAndUnlike/like.png') {
                element.setAttribute('src', 'images/likeAndUnlike/unlike.png');
            } else {
                element.setAttribute('src', 'images/likeAndUnlike/like.png');
            }
        }

        like_unlike();
    });
});

