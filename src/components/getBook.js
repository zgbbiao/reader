//定义本地书架名称;
const BOOK="myBook";

//获取本地local所有内容;
function getStorage(){
  //获取本地所有内容;
  var objStr= localStorage.getItem( BOOK );
  return objStr ? JSON.parse( objStr ) : {};
}

//设置本地所有内容; (注意,  会覆盖以前的内容;)
function setStorage( obj ){
  var objStr= JSON.stringify( obj );
  localStorage.setItem( BOOK, objStr );
}

//存储数据对象
var data = getStorage();

//添加内容;
export function setVal( key , val ){
  //先保存在data;
  data[key] = val;
  // 将data存入本地;
  setStorage( data );
}

//获取内容;
export function getVal( key ){
  return data[key];
}

//获取本地所有内容;
export function getAll(){
  return data;
}

export function getAllBookNum(){
  var sum = 0 ;
  Object.values( data ). forEach( val =>{
    sum+=val;
  } )
  return sum;
}
