var male = [108, 120, 131, 120, 100]
var female = [108, 122, 136, 125, 104]
var fname = getParameterByName('Name');
var add1 = getParameterByName('Address1');
var add2 = getParameterByName('Address2');
var add3 = getParameterByName('city');
var n = getParameterByName('Peoples');
var ages = [];
var gender = [];

function getParameterByName(name, url) {
    if ( url = window.location.href)
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function calculate_req() {
    var sum = 0;
    for (var i = 0; i < n; i++) {
        if (ages[i] < 5 && ages[i] > 0) {
            if (gender[i] == "male") sum += male[0];
            else sum += female[0];
        }
        if (ages[i] < 12 && ages[i] >= 5) {
            if (gender[i] == "male") sum += male[1];
            else sum += female[2];
        }
        if (ages[i] < 18 && ages[i] >= 12) {
            if (gender[i] == "male") sum += male[2];
            else sum += female[2];
        }
        if (ages[i] < 45 && ages[i] >= 18) {
            if (gender[i] == "male") sum += male[3];
            else sum += female[3];
        }
        if (ages[i] >= 45) {
            if (gender[i] == "male") sum += male[4];
            else sum += female[4];
        }
    }
    // console.log(sum);
    return sum;
}

for (var i = 0; i < n; i++) {
    var t1 = getParameterByName('Person' + i);
    var t2 = getParameterByName('Gender' + i);
    ages.push(t1);
    gender.push(t2);
}
var requirement = calculate_req(ages, gender, n);
console.log("requirement = " + requirement);
// console.log(gender);
$("#heading").append("<h3>Water Consumption Details for " + fname + "'s Family</h3>");
$("#requirement").append("<h5>"+requirement+"</h5>");
var fixed_charge=100;
var charge_perl=0.004;
var total_expense=fixed_charge+charge_perl*requirement;
$("#expense").append("<h5>"+total_expense+"</h5>");
// console.log(total_expense);

//console.log(t_expense);



