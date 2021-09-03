const filterBox = document.querySelectorAll('.box');

document.querySelector('nav').addEventListener('click', event => {

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        }
    });
});

$( function() {
  $( "#datepicker" ).datepicker();
} );

$( function() {
  var dateFormat = "mm/dd/yy",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 1
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
} );



/*          Light-Dark themes              */


var myImage = document.querySelector('img');
var logo = document.querySelector('.logo');
let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/1.jpg') {
      myImage.setAttribute ('src','img/2.jpg');
      logo.setAttribute ('src', 'img/tt.jpg');
    } else {
      myImage.setAttribute ('src','img/1.jpg');
      logo.setAttribute ('src', 'img/t.jpg');
    }
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
};



