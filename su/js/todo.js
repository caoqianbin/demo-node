$(function(){
    var $todo  = $('#todo'),
        $btnOk = $('#okButton'),
        $out   = $('#output');
  
    var items = [];
  
    getItems();
  
    $btnOk.click(function(){
      if($todo.val() === '') return;
      console.log('$todo.val=', $todo.val());
      fetch('http://192.168.133.144:3000/todo/', {
        method: 'POST', 
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: 'item=' + $todo.val()});
      items.push($todo.val());
  
      showData();
    });
