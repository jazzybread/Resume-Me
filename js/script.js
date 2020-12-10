function myFunction () {
    //Contact Info Input
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var cityTown = document.getElementById("city-town").value;
    var statePrefecture = document.getElementById("state-prefecture").value;
    var country = document.getElementById("country").value;
    var zipCode = document.getElementById("zipcode").value;
    var telephone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;
    //Contact Info Output
    document.getElementById("first-and-last-name").innerHTML = firstName + " " + lastName;
    document.getElementById("address-city-state-country-zipcode").innerHTML = address + ", " + cityTown + ", " + statePrefecture + ", " + country + ", " + zipCode;
    document.getElementById("telephone-and-email").innerHTML = telephone + "・" + email;
     //Work Experience Input
    var startDate = document.getElementById("start-date").value;
    var endDate =document.getElementById("end-date").value;
    var title =document.getElementById("title").value;
    var companyName =document.getElementById("company-name").value;
    var task1 =document.getElementById("task1").value;
    var task2 =document.getElementById("task2").value;
    var task3 =document.getElementById("task3").value;
    // Work Experience Output
    document.getElementById("start-and-end-dates").innerHTML = startDate + " ~ " + endDate;
    document.getElementById("re-title").innerHTML = title + ", ";
    document.getElementById("re-company-name").innerHTML = companyName;
    document.getElementById("re-task1").innerHTML = "・" + task1;
    document.getElementById("re-task2").innerHTML = "・" + task2;
    document.getElementById("re-task3").innerHTML = "・" + task3;
    //Education Input
    var university =document.getElementById("university").value;
    var degree =document.getElementById("degree").value;
    var graduationDate =document.getElementById("graduation-date").value;
    var honors =document.getElementById("honors").value;
    //Education Output
    document.getElementById("re-graduation-date").innerHTML = graduationDate;
    document.getElementById("re-degree").innerHTM = degree +", ";
    document.getElementById("re-university").innerHTML = university;
    document.getElementById("re-honors").innerHTML = honors;
    //Skills Input
    var languages =document.getElementById("languages").value;
    var certificates =document.getElementById("certificates").value;
    //Skills Output
    document.getElementById("re-languages").innerHTML = languages;
    document.getElementById("re-certificates").innerHTML = certificates;

}
