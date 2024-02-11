const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
const images = document.querySelector('.slider').children;
const totalImages = images.length;

let index = 0;

prev.addEventListener('click', () => {
  nextImage('prev-btn');
})

next.addEventListener('click', () => {
  nextImage('next-btn');
})

function nextImage(direction) {
  if(direction == 'next-btn') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  images[index].classList.add('active');
}

// Image Text
let textArray = ['New York City', 'Countryside', 'Beach', 'Technology', 'Ocean Sunset', 'Mountain Sunrise'];
let text = 0;

function nextText() {
    text = text + 1; 
    text = text % textArray.length;
    return textArray[text]; 
}

function prevText() {
    if (text === 0) { 
        text = textArray.length; 
    }
    text = text - 1; 
    return textArray[text]; 
}

window.addEventListener('load', function () {
    document.querySelector('.caption-container').textContent = textArray[0]; 
    document.querySelector('.prev-btn').addEventListener(
        'click', 
        function (e) { 
            document.querySelector('.caption-container').textContent = prevText();
        }
    );
     
    document.querySelector('.next-btn').addEventListener(
        'click', 
        function (e) { 
            document.querySelector('.caption-container').textContent = nextText();
        }
    );
});
