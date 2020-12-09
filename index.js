
const contentJsonFile=
[	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},


	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},


	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}

]

var allData = JSON.parse(JSON.stringify(contentJsonFile));

function batterTypes(){
	var allBatterTypes =[];
	var batterArrays =[];
	for ( var i=0 ; i<allData.length ; i++) {
		batterArrays = allData[i].batters.batter;
		for (var batterElement of batterArrays) {
		     allBatterTypes.push(batterElement.type);
		}
	}
	return allBatterTypes;
}

function toppingTypes(){
	var allToppingTypes =[];
	var toppingArrays =[];
	for ( var i=0 ; i<allData.length ; i++) {
          	toppingArrays = allData[i].topping;
		for (var toppingElement of toppingArrays) {
		  allToppingTypes.push(toppingElement.type);
		}
	}
        return allToppingTypes;
} 

function Average(){
	var Average =0;
	for ( var element of allData) {
		Average += element.ppu;
	}
    return Average/allData.length;
}

function Sum(){
	var Sum =0;
	for ( var element of allData) {
		Sum += element.ppu;
	}
    return Sum;
}

function Ids(){
  	var Ids = [];
	for ( var i=0 ; i<allData.length ; i++) {
		batterArrays = allData[i].batters.batter;
		for (var batterElement of batterArrays) {
		     Ids.push(batterElement.id);
		}
        	toppingArrays = allData[i].topping;
         	for (var toppingElement of toppingArrays) {	  
          		Ids.push(toppingElement.id);}
		}       
	return Ids;
}
console.log("topping types: "+toppingTypes());
console.log("batter types: "+batterTypes());
console.log("ppu avg: "+Average());
console.log("ppu sum: "+Sum());
console.log("IDs:"+Ids());
