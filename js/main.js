var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var tbody = document.getElementById("tbody");

if(localStorage.getItem('DataList') == null){
  var dataList = [];
}
else{
  var dataListString = localStorage.getItem('DataList');

   dataList = JSON.parse(dataListString);

}

showData();

function SubmitData() {
  var data = {
    name: siteName.value,
    url: siteURL.value
  };

  dataList.push(data);

  var x =JSON.stringify(dataList);
    console.log(x);
    console.log(x.length);
    localStorage.setItem('DataList', x);
  
  clearData();
  // كان ناقصك دي 
  showData()  
}

function clearData() {
  siteName.value = "";
  siteURL.value = "";
}

function showData(){
  var trs = "";

  for (i = 0; i < dataList.length; i++) {
  
    trs += `<tr>
    <td class="pt-3">${dataList[i].name}</td>
    <td class="pt-3"><a>${dataList[i].url}</a></td>
    <td>
      
      <a href= "http://${dataList[i].url}" target="_blank">
      <button class="btn btn-outline-info">
        <i class="fa-solid fa-wand-magic-sparkles"></i>
        </button>
        </a>
    </td>        
      <td>
        <button class="btn btn-outline-danger" onclick="deleteData(${i})">
        <i class="fa-solid fa-trash"></i>
      </button>
      </td>
  </tr>`;
  }
  console.log(trs)
  tbody.innerHTML = trs;
}

function deleteData(index) {
  dataList.splice(index, 1);
  localStorage.setItem('DataList', JSON.stringify(dataList))
  showData();
  console.log(dataList);
}


