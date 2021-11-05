for(var i = 100; i < 201 ; i++){
  console.log(( i % 3 ? ( i % 4 ? i : "Lighthouse") : ( i % 4 ? "Loopy" : "LoopyLighthouse" )));
}