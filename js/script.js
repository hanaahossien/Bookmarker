var sitename = document.getElementById("SiteName");
var siteURL = document.getElementById("SiteURL");

var all_url = [];

if (localStorage.getItem("all_url") != null) {
  all_url = JSON.parse(localStorage.getItem("all_url"))
  display_url()
}


function add_url() {
  if(vaild_Url() == true)
{
  var newurl = {
    name: sitename.value,
    URL: siteURL.value,
  }
  var ckeck_name;
  for (let index = 0; index < all_url.length; index++) {

    if (all_url[index].name == sitename.value) {
      ckeck_name = true;
    }
  }

  if (ckeck_name) {
    display_url()
    document.getElementById("msg").innerHTML = "this bookmark exsit";

  } 
  else {
    all_url.push(newurl)
    localStorage.setItem("all_url", JSON.stringify(all_url))
    display_url()
    document.getElementById("msg").innerHTML = "";
    clrform()
  }
    
}

else
{
  document.getElementById("msg").innerHTML = "add valide link";

}
  }






function display_url() {
  var cartonaa = "";

  for (let index = 0; index < all_url.length; index++) {

    cartonaa = cartonaa + `<tr>
      <th scope="row"> ${index} </th>
      <td>${all_url[index].name}</td>

      <td><a href="${all_url[index].URL}" target="new" class="btn btn-outline-info btn-sm">Visit </a>
      </td>
      <td><button class="btn btn-outline-danger btn-sm " onclick =" delete_url( ${index} )" >Delete</button></td>

      </tr>`;

  }

  document.getElementById("tb").innerHTML = cartonaa;

}




function delete_url(id) {
  all_url.splice(id, 1); // 2nd parameter means remove one item only
  localStorage.setItem("all_url", JSON.stringify(all_url))

  display_url()

}



function vaild_Url() {

  var re = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;

  return re.test(siteURL.value)
}

function clrform()
{
  sitename.value="";
  siteURL.value="";

}