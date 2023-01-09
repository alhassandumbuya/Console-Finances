var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

console.log('Financial Analysis');

// Total amount of months
console.log('Total Months ' + ': ' + finances.length);

// The net total amount of Profit/Losses over the entire period.
let netTotal= 0
for (let i = 0; i < finances.length; i++) {
    netTotal += finances[i][1];
}
console.log( 'Total:' + ' $'+ netTotal );

// The average of the **changes** in Profit/Losses over the entire period. 
    let aveChangeArr = [];
    let aveChange = 0;
    let difference = 0;
    let greatestProfit = 0;
    let greatestLoss = 0;
    let greatestProfitDate = '';
    let greatestLossDate = '';

    for (let i = 1; i < finances.length; i++) {
        difference = finances[i][1] - finances[i-1][1]
        aveChangeArr.push(difference)
        
        if (difference > greatestProfit) { 
            greatestProfit = difference
            greatestProfitDate = finances[i][0]  
        } else if (difference < greatestLoss){
            greatestLoss = difference
            greatestLossDate = finances[i][0]
        }
    }
    
    for (let j = 0; j < aveChangeArr.length; j++) {
        aveChange += aveChangeArr[j];
        }
    console.log('Total Months:' + (aveChange / (finances.length - 1) ).toFixed(2));
    console.log( 'Greatest Increase in Profits:' + greatestProfit, greatestProfitDate);
    console.log('Greatest Decrease in Profits:' + greatestLoss, greatestLossDate);
    


//The greatest increase in profits (date and amount) over the entire period.





//2010 profit and loss total
/*
let finances2010 = [867884, 984655, 322013, -69417, 310503, 522857, 1033096, 604885, -216386, 477532, 893810, -80353];

    let sum2010 = 0;

    for (let i = 0; i < finances2010.length; i++) {
        sum2010 = sum2010 + finances2010[i];
    
}
console.log(sum2010);


//2011 profit and loss total

let finances2011 = [779806, -335203, 697845, 793163, 485070, 584122, 62729, 668179, 899906, 834719, 132003, 309978]

    let sum2011 = 0;

    for (let i = 0; i < finances2011.length; i++) {
        sum2011 = sum2011 + finances2011[i];
    
}
console.log(sum2011);


//2012 profit and loss total

let finances2012 = [-755566, 1170593, 252788, 1151518, 817256, 570757, 506702, -1022534, 475062, 779976, 144175, 542494];

    let sum2012 = 0;
    for (let i = 0; i < finances2012.length; i++) {
        sum2012 = sum2012 + finances2012[i];
    
}
console.log(sum2012);

//2013 profit and loss total

let finances2013 = [359333, 321469, 67780, 471435, 565603, 872480,789480, 999942, -1196225, 268997, -687986, 1150461];
    let sum2013 = 0;
    for (let i = 0; i < finances2013.length; i++) {
        sum2013 = sum2013 + finances2013[i];
    
}
console.log(sum2013);

//2014 profit and loss total

let finances2014 = [682458, 617856, 824098, 581943, 132864, 448062, 689161, 800701, 1166643, 947333, 578668, 988505];
    let sum2014 = 0;
    for (let i = 0; i < finances2014.length; i++) {
        sum2014 = sum2014 + finances2014[i];
    
}
console.log(sum2014);

//2015 profit and loss total

let finances2015 = [1139715, 1029471, 687533, -524626, 158620, 87795, 423389, 840723, 568529, 332067, 989499, 778237];
    let sum2015 = 0;
    for (let i = 0; i < finances2015.length; i++) {
        sum2015 = sum2015 + finances2015[i];
    
}
console.log(sum2015);

//2016 profit and loss total

let finances2016 = [650000, -1100387, -174946, 757143, 445709, 712961, -1163797, 569899, 768450, 102685, 795914, 60988];
    let sum2016 = 0;
    for (let i = 0; i < finances2016.length; i++) {
        sum2016 = sum2016 + finances2015[i];
    
}
console.log(sum2016);


//2017 profit and loss total

let finances2017 = [138230, 671099];
    let sum2017 = 0;
    for (let i = 0; i < finances2017.length; i++) {
        sum2017 = sum2017 + finances2017[i];
    
}
console.log(sum2017);


//The net total profit and loss

let netProfitAndLoss = sum2010 + sum2011 + sum2012 + sum2013 + sum2014 + sum2015 + sum2016 + sum2017
    console.log(netProfitAndLoss);
    */