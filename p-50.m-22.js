/* fixed : per item wood requirements
chair -> 3cft;
table ->10cft;
bed -> 50cft;

vary:quantity */

// -----------------------------------------------------------------------

function woodCalculator(chairQty, tableQty, bedQty){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWood = chairQty * perChairWood;
    const tableWood = tableQty * perTableWood;
    const bedWood = bedQty * perBedWood;
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}

const totalWood = woodCalculator(1,1,1);
console.log('total wood required' , totalWood);

// output : total wood required 63