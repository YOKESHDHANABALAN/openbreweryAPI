var div = document.createElement('div')
div.innerHTML = `<br/>
                 <div id = "active"></div>
                 <div id = "active1"></div>
                 <div id = "active2"></div>
                 <div id = "active3"></div>
                 <div id = "active4"></div>`
div.style.textAlign = "center";
document.body.append(div);
async function foo() {
    let breweryName = document.getElementById("txt").value
    let res = await fetch(`https://api.openbrewerydb.org/breweries/search?query=${breweryName}`)
    let res1 = await res.json()
    console.log(res1)
    //alert("Please Enter correct Brewery Name")

    document.getElementById("active").innerHTML = `<u>Name</u> : <b>${res1[0].name}</b><br/><br/>`
    document.getElementById("active1").innerHTML = `<u>Brewery-type</u> : <b>${res1[0].brewery_type}</b><br/><br/>`
    document.getElementById("active2").innerHTML = `<u>Address</u> : <b>${res1[0].street},${res1[0].city},${res1[0].state},${res1[0].country},${res1[0].postal_code}</b><br/><br/>`
    document.getElementById("active3").innerHTML = `<u>phone-No</u> : <b>${res1[0].phone}</b><br/><br/>`
    document.getElementById("active4").innerHTML = `<u><b><a href = "${res1[0].website_url}">For Website</a></b> <br/><br/><br/><br/><br/>`

}