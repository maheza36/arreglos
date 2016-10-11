var pageloaded = function(){
  console.log("pagina cargada");
  var list_li = document.querySelectorAll(".list_item");
  list_li = Array.from(list_li);
  list_li.forEach(function(element_li,index,array){
    element_li.addEventListener("click",function(){
      console.log(element_li);
    });
  });
};
//document.addEventListener("DOMContentLoaded",pageloaded);
document.addEventListener("DOMContentLoaded",function(){
  /*var hash={
    key1:"value1",
    key2:"value2",
    key3:"value3",
    key4:"value4",
    key5:"value5",
    key6:"value6",
    key7:"value7",
    key8:"value8",
    key9:"value9",
    key10:"value10",
  };
  console.log(hash);
  var arr = [];
  for(var pos in hash){
    arr.push(pos);
    arr.push(hash[pos]);
  }
  console.log(arr);*/
  var array = [1,2,3,4,5,16,7,8,9,0];
  var index_some = -1;
  var res = array.some(function(number,index){
    index_some = index;
    return number < 10;
  });
  console.log(res, index_some);
  var index_every = -1;
  var res_every = array.every(function(number,index){
    index_every = index;
    return number < 10;
  });
  console.log(res_every, index_every);
});
