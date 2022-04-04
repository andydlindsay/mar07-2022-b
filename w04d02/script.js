// new syntax
$(() => {

// });

// $(document).ready(() => {

  console.log('hello from the script file');

  console.log(`you are logged in as ${username}`);

  jQuery === $

  //
  // Creating a new DOM node
  //

  // const node = document.createElement("li");
  // const textnode = document.createTextNode("Water");
  // node.appendChild(textnode);
  // document.getElementById("myList").appendChild(node);

  // $('li');
  const $lineItem = $('<li>');
  // console.log($lineItem);

  // $('<li>water</li>')
  $lineItem.text('7');

  const $mainList = $('#main-list');

  // $mainList.append($lineItem);
  $mainList.prepend($lineItem);
  // $lineItem.appendTo($mainList);

  //
  // Handling user input
  //

  // grab the input field
  const $inputField = $('#new-number');

  // grab the button
  const $inputButton = $('#new-number-button');

  // listen for the click event to occur
  $inputButton.on('click', () => {
    console.log('the button was clicked');

    // grab the value from the input field
    const inputValue = $inputField.val();

    // console.log(inputValue);

    // create a new li with the provided text
    const $newLi = $('<li>').text(inputValue);

    // append the new li to the DOM
    $mainList.prepend($newLi);

    // clear out the input value
    $inputField.val('');

    // set focus on the input field
    $inputField.focus();
  });

});
