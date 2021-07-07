// DATE STATEMENT FUNCTION

// weeday names array
const weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

// month names array
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const todaysDate = function() {
  // getting current date stamp
  const today = new Date();
  // extracting date elements
  const day = today.getDay();
  const month = today.getMonth();
  let date = `${today.getDate()}`;
  const year = today.getFullYear();
  // adding date suffix
  if (date.endsWith(1)) {
    date = `${date}st`;
  } else if (date.endsWith(2)) {
    date = `${date}nd`;
  } else if (date.endsWith(3)) {
    date = `${date}rd`;
  } else {
    date = `${date}th`;
  }
  // return date statement
  return `${weekdays[day]} ${months[month]} ${date}, ${year}`;
}


// SUBMIT EVENT
const comment = document.querySelector('.postComment')

// listen for FORM submit
comment.addEventListener('submit', function(e) {

  // prevent default reset
  e.preventDefault();

  // get NAME and COMMENT from user
  const userName = document.getElementById('name').value;
  const userComment = document.getElementById('comment').value;

  // get DATE from todaysDate function above
  const postDate = todaysDate();
  
  // create element .commentBox to hold data
  const newComment = document.createElement('div');
  newComment.classList.add('commentBox');
  // create child elements
  // add data to element
    // IMG
  const userImg = document.createElement('img');
  userImg.src = './assets/safi-so-handsome.png';
  userImg['alt'] = 'default user portait';
  newComment.appendChild(userImg);
    // DIV
  const commentText = document.createElement('div');
  newComment.appendChild(commentText);
      // P.bold
  const postId = document.createElement('p');
  postId.classList.add('bold');
  postId.innerText = `${postDate} by ${userName}`;
  commentText.appendChild(postId);
      // P
  const theComment = document.createElement('p');
  theComment.innerText = userComment;
  commentText.appendChild(theComment);
  
  // add element to page
  const commentsSection = document.querySelector('.comments');
  commentsSection.appendChild(newComment);

  // clear form
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('comment').value = '';

});

