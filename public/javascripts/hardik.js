
function hardikmove() {
    var v = document.getElementById("t");
    v.style.backgroundColor = "#20d027"
    v.style.color = "white";
}
function hardikback() {
    var v = document.getElementById("t");
    v.style.backgroundColor = "red";
    v.style.color = "white";
}


function hardik() {
    var resualt = true;
    var h = document.getElementsByTagName("input");
    if (h[0].value.length == 0) {
        alert("Please Enter The Firest Name ");

        return (false);
    }
    var resualt = true;
    var a = document.getElementsByTagName("input");
    if (h[1].value.length == 0) {

        alert("Please Enter The Laset Name ");
        return (false);
    }
    var resualt = true;

    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    var resualt = true;
    var h = document.getElementsByTagName("input");
    if (h[3].value.length == 0) {

        alert("Please Enter The User-Name ");
        return (false);
    }
    var resualt = true;
    var h = document.getElementsByTagName("input");
    if (h[4].value.length == 0) {

       alert("Please Enter The password ");
        return (false);
    }
    resualt = true;
    if (h[4].value.length < 1)
        
    {
        alert("Please Enter Feed Back");
        return (false);
    }

    


    var h = document.getElementById("Name").value;
    var r = document.getElementById("name").value;
    var p = document.getElementById("email").value;
    var Branch = document.getElementById("Branch").value;
    var Sem = document.getElementById("Sem").value;
    var U = document.getElementById("User-Name").value;
    var s = document.getElementById("password").value;
    var c = document.getElementById("Confirm Password").value;
    if (s == c) {
        resualt = true;
    }
    else {
        alert("Please Enter The Sem  Password ")
        return false;
    }

    var x = confirm("firest name=" + h + "\n" + "laset name=" + r + "\n" + "Branch=" + Branch + "\n" + "Sem=" + Sem + "\n" + "email=" + p+"\n"+"Usre-Name="+U);//+"\n"+"password="+s);
   if (x) {

        return true;
    }
    else {
        return false;
    }


}
function read() {
    //var color = document.getElementById("Branch").value;
    //if(Branch==comaputer)
    //{
    //    document.getElementsByTagName("body")[0].style.backgroundColor = "red";
    //}
    //else {
    //    return false;
    //}
    document.write("firest name=" + h);
    document.write("laset name=" + r);
    document.write("Branch=" + Branch);
    document.write("Sem=" + Sem);
    document.write("email=" + p);
}
function hardik2()
{
    var resualt = true;
    var h = document.getElementsByTagName("input");
    if (h[1].value.length == 0) {

        alert("Please Enter The password ");
        return (false);
    }
    resualt = true;
    if (h[1].value.length < 8) {
        alert("Please Enter The 8 charecter Password");
        return (false);
    }
}

//function tushar()

//{
//var name=document.getElementById("firest name").value;
//var Name=document.getElementById("laset name").value;
//var email=document.getElementById("email").value;
//alert(firest name);
//alert(laset name);
//alert(email);
//return false;
//}
// if(name=="")
// {
	// alert("Enter The firest Name");
	// return false;
	// }
// else if(Name=="")
// {
	// alert("Enter The laset Name");
	// return false;
	// }
// else if(email=="")
// {
	// alert("Enter The Email Address");
	// return false;
	// }
// else
// {
	// return true;
// }
// }
//function hardik() {
//    var resualt = true;
//    var h = document.getElementsByTagName("input");
//    if (h[0].value.length == 0) {
//        alert("Enter The Firset Name ");
//        return (false);
//    }
//    var resualt = true;
//    var h = document.getElementsByTagName("input");
//    if (h[1].value.length == 0) {

//        alert("Enter The Laset Name ");
//        return (false);
//    }
//    var resualt = true;
//    var h = document.getElementsByTagName("input");
//    if (h[2].value.length == 0) {

//        alert("Enter The Email Address ");
//        return (false);
//    }

//}

//function loop()
//{
//    for (i = 1; i <= 5;i++)
//    {
        
//       var h= document.write("HARDIK PRAJAPATI");
//       return h;
//    }
//}
