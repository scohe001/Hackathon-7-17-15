// This refers to database.json
// RFCards refers to a dictionary whose keys are RFIDs and values are names.
// PowerConsumption refers to a dictionary whose keys are machines and values are wattage
// NumberOfPeople refers to the number of people in the FabLab.

function parseJSON(jdata) {
    var testdata = JSON.parse(jdata);
 //   alert(testdata.name);  
    var test_div = document.getElementById("mytest");
    test_div.innerHTML = "Number of People at FabLab Today: " + testdata.NumPeopleToday;
    console.log(jdata);
}

function test() {
    console.log("Hello World!");
    
    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            console.log("Call me!");
            parseJSON(xmlhttp.responseText);
        }
    } 
    xmlhttp.open("GET","database.json",true);
    xmlhttp.send();

}