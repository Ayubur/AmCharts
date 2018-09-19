var bar_id;
var bar_color_arr=[];

$('#barColorPicker').on('show.bs.modal', function (event) {
		bar_id= event.relatedTarget.id;
});

// Fixed Modal Scrollbar issue

		$("#barColorPicker").on('hidden.bs.modal', function (event) {
		  if ($('.modal:visible').length) //check if any modal is open
		  {
		    $('body').addClass('modal-open');//add class to body
		  }
		});


		// Main Portion


		function changeBarColor(index, color) {
		  barChart.chartData[index].dataContext['color']=color;
		  barChart.validateData();
		}

		/**
		 * The Bar chart
		 */

		 function myBarClick(e) {
		    // to see the full api, log out "e"
		    // console.log(e);
				/**
		    $('.sp-replacer').css('display','inline-block');
            setTimeout("$('.sp-replacer').css('display','none')", 2000);
				**/

		    var dIndex = e.index;

		     $(document).ready(function(){
	                $(".custom").spectrum({
	                "color": "#67b7dc",
									"flat": true,
	                "change": function(color) {
	                          changeBarColor(dIndex, color.toHexString());
	                    }
	               });
		      });
		}

var chart= null;

if(chart==null){


 var barChart = AmCharts.makeChart("bardiv", {
			  "type": "serial",
			  "hideCredits":true,
			  "theme": "light",
			  "marginRight": 70,
				"responsive": {
					"enabled": true
				},
			  "dataProvider": [{
			    "country": "China",
			    "visits": 1882,
			   "color": "#FF6600"
			  }, {
			    "country": "Japan",
			    "visits": 1809,
			    "color": "#FF9E01"
			  }, {
			    "country": "Germany",
			    "visits": 1322,
			    "color": "#FCD202"
			  }, {
			    "country": "USA",
			    "visits": 1500,
			    "color": "#FCD202"
			  }],
			  "valueAxes": [{
			    "axisAlpha": 0,
			    "position": "left"
			  }],
			  "startDuration": 1,
			  "graphs": [{
			    "balloonText": "<b>[[category]]: [[value]]</b>",
			    "fillColorsField": "color",
			    "fillAlphas": 0.9,
			    "lineAlpha": 0.2,
			    "type": "column",
				"fixedColumnWidth": 115,
			    "valueField": "visits"
			  }],
			  "chartCursor": {
			    "categoryBalloonEnabled": false,
			    "cursorAlpha": 0,
			    "zoomable": false
			  },
			  "categoryField": "country",
			  "categoryAxis": {
			    "gridPosition": "start",
			    "labelRotation": 45
			  },
			  "export": {
			    "enabled": true
			  },
			  "listeners": [{
			    "event": "clickGraphItem",
			    "method": myBarClick
			  }]

});
}


// Control Functions start


var barArrLen = barChart.dataProvider.length;



function addBarEle(){

	var addField=0;


	if(document.getElementById('bar-real').length > barChart.dataProvider.length*2){
		 addField += (document.getElementById('bar-real').length - barChart.dataProvider.length*2)/2;
	}


	var barTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideBarEle-'+( barChart.dataProvider.length+addField)+'"><input type="text" class="form-control" id="Bartitle-'+( barChart.dataProvider.length+addField)+'" value="" placeholder="Bar #'+( barChart.dataProvider.length+addField+1)+' title"></div>';
  var barvalue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideBarEle-'+( barChart.dataProvider.length+addField)+'"><input type="text" class="form-control" id="Barvalue-'+( barChart.dataProvider.length+addField)+'" value="" placeholder="Bar #'+(barChart.dataProvider.length+addField+1)+' value"></div>';

  var barCross= '<div class="form-group md-form col-xs-2 col-sm-2 col-md-2 col-lg-2 hideBarEle-'+( barChart.dataProvider.length+addField)+'"><i class="fas fa-minus-circle" onclick="removeBarEle('+(barChart.dataProvider.length+addField)+');"></i><i class="fas fa-palette" id="'+( barChart.dataProvider.length+addField)+'" data-toggle="modal" data-target="#barColorPicker"></i></div>';
	var barFix= '<div class="clearfix hideBarEle-'+( barChart.dataProvider.length+addField)+'"></div>';
	$('#bar-form').append(barTitle,barvalue,barCross,barFix);

}




function removeBarEle(count){



	if(barChart.dataProvider[count]){
		barChart.dataProvider.splice(count,1);

	}


	var addField=0;
	var addRfield=0;


	if(document.getElementById('bar-real').length > barChart.dataProvider.length*2){
		 addField += (document.getElementById('bar-real').length - barChart.dataProvider.length*2)/2;
	}

$('.hideBarEle-'+count).remove();



var remainingEle= (barChart.dataProvider.length+addField)-(count+1);

var lengthDOC= document.getElementById('bar-real').length/2;

if(barChart.dataProvider.length==1){
	 $('.hideBarEle-0 img').hide();

}

	 for(var i=count+1; i<(barChart.dataProvider.length+addField);i++){
			 $('.hideBarEle-'+i).remove();
	 }

	 if(document.getElementById('bar-real').length > barChart.dataProvider.length*2){
 		 addRfield += (document.getElementById('bar-real').length - barChart.dataProvider.length*2)/2;
 	}


  for(var i=count;i<(barChart.dataProvider.length+addRfield+remainingEle);i++){

		 if(i< lengthDOC){
			 if(i< barChart.dataProvider.length){
				 var barTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideBarEle-'+i+'"><input type="text" class="form-control" id="Bartitle-'+i+'" value="'+barChart.dataProvider[i].country+'" placeholder="Bar #'+( i+1)+' title"></div>';
					var barvalue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideBarEle-'+i+'"><input type="text" class="form-control" id="Barvalue-'+i+'" value="'+barChart.dataProvider[i].visits+'" placeholder="Bar #'+(i+1)+' value"></div>';

					var barCross= '<div class="form-group md-form col-xs-2 col-sm-2 col-md-2 col-lg-2 hideBarEle-'+i+'"><i class="fas fa-minus-circle" onclick="removeBarEle('+i+');"></i><i class="fas fa-palette" id="'+i+'" data-toggle="modal" data-target="#barColorPicker"></i></div>';
				 var barFix= '<div class="clearfix hideBarEle-'+i+'"></div>';
				 $('#bar-form').append(barTitle,barvalue,barCross,barFix);

			 }else{
				 var barTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideBarEle-'+i+'"><input type="text" class="form-control" id="Bartitle-'+i+'" value="" placeholder="Bar #'+( i+1)+' title"></div>';
					var barvalue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideBarEle-'+i+'"><input type="text" class="form-control" id="Barvalue-'+i+'" value="" placeholder="Bar #'+(i+1)+' value"></div>';

					var barCross= '<div class="form-group md-form col-xs-2 col-sm-2 col-md-2 col-lg-2 hideBarEle-'+i+'"><i class="fas fa-minus-circle" onclick="removeBarEle('+i+');"></i><i class="fas fa-palette" id="'+i+'" data-toggle="modal" data-target="#barColorPicker"></i></div>';
				 var barFix= '<div class="clearfix hideBarEle-'+i+'"></div>';
				 $('#bar-form').append(barTitle,barvalue,barCross,barFix);
			 }
		 }

	}


}




 function updateBarChart() {

	 //update color

	 			for(i in bar_color_arr){
	 				if(i !==null){
	 					if(i<barChart.dataProvider.length){
	 						barChart.dataProvider[i].color= bar_color_arr[i];
	 					}else{
	 						barChart.dataProvider.push({
	 							'color':bar_color_arr[i]
	 						});
	 					}

	 				}
	 			}

				bar_color_arr=[];

	//update value fields
     var addField=0;
     if(document.getElementById('bar-real').length > barArrLen*2){
			  addField += (document.getElementById('bar-real').length - barArrLen*2)/2;
		 }

		//incField = (document.getElementById('bar-form').length-addField)/2 - barChart.dataProvider.length;
    var incBarField= (document.getElementById('bar-real').length)/2 - barChart.dataProvider.length;

 	  for (var i = 0; i< (barChart.dataProvider.length+ incBarField); i++) {

		  if(i>= barChart.dataProvider.length){
				if(document.getElementById('Bartitle-' + i).value=='' && document.getElementById('Barvalue-' + i).value==''){
													 console.log("Unchanged");
					}

				else if(document.getElementById('Bartitle-' + i).value=='' && Number(document.getElementById('Barvalue-' + i).value)){
										barChart.dataProvider.push({
										 'country':'',
											'visits': Number(document.getElementById('Barvalue-' + i).value)
									 });
											barChart.validateData();
												$('.btn-success').attr('data-dismiss','modal');

							}else if (document.getElementById('Barvalue-' + i).value=='') {

									document.getElementById('Barvalue-' + i).value= 0;

								barChart.dataProvider.push({
									'country':document.getElementById('Bartitle-' + i).value,
									 'visits': document.getElementById('Barvalue-' + i).value
								});
										barChart.validateData();
											$('.btn-success').attr('data-dismiss','modal');
								}else{
									barChart.dataProvider.push({
										'country':document.getElementById('Bartitle-' + i).value,
										 'visits': Number(document.getElementById('Barvalue-' + i).value)
									});
										barChart.validateData();
											$('.btn-success').attr('data-dismiss','modal');
								}

				 }else{
					   if(document.getElementById('Bartitle-' + i).value=='' && document.getElementById('Barvalue-' + i).value==''){
                 if(i==0){
									 		 console.log("Unchanged");
								 }else{
									 barChart.dataProvider[i].country = document.getElementById('Bartitle-' + i).value;
									 barChart.dataProvider[i].visits = document.getElementById('Barvalue-' + i).value;

										 barChart.validateData();
								 }
		  				}
              else if(document.getElementById('Bartitle-' + i).value=='' && Number(document.getElementById('Barvalue-' + i).value)){
									barChart.dataProvider[i].visits = Number(document.getElementById('Barvalue-' + i).value);
										barChart.validateData();

							}else if (document.getElementById('Barvalue-' + i).value=='') {
									barChart.dataProvider[i].country = document.getElementById('Bartitle-' + i).value;
										barChart.validateData();

								}else{
									barChart.dataProvider[i].country = document.getElementById('Bartitle-' + i).value;
										barChart.dataProvider[i].visits = Number(document.getElementById('Barvalue-' + i).value);
											barChart.validateData();

								}
				 }

			}

    $('.btn-success').attr('data-dismiss','modal');


  }


	for (var i = 0; i <barChart.dataProvider.length; i++){

			 if(i==0){
				 var barTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideBarEle-'+i+'"><input type="text" class="form-control" id="Bartitle-'+i+'" value="'+barChart.dataProvider[i].country+'" placeholder="Bar #'+(i+1)+' title"></div>';
				 var barvalue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideBarEle-'+i+'"><input type="text" class="form-control" id="Barvalue-'+i+'" value="'+barChart.dataProvider[i].visits+'" placeholder="Bar #'+(i+1)+' value"></div>';
				 //var barCross= '<div class="form-group col-xs-1 col-sm-1 col-md-1 col-lg-1 hideBarEle-'+i+'"><img onclick="removeBarEle('+i+');" src="minus-4-16.png"  /></div>';
				 var barFix= '<div class="clearfix"></div>';

				 $('#bar-form').append(barTitle,barvalue,barFix);
			 }else{
				 var barTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideBarEle-'+i+'"><input type="text" class="form-control" id="Bartitle-'+i+'" value="'+barChart.dataProvider[i].country+'" placeholder="Bar #'+(i+1)+' title"></div>';
				 var barvalue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideBarEle-'+i+'"><input type="text" class="form-control" id="Barvalue-'+i+'" value="'+barChart.dataProvider[i].visits+'" placeholder="Bar #'+(i+1)+' value"></div>';
				 var barCross= '<div class="form-group md-form col-xs-2 col-sm-2 col-md-2 col-lg-2 hideBarEle-'+i+'"><i class="fas fa-minus-circle" onclick="removeBarEle('+i+');"></i><i class="fas fa-palette" id="'+i+'" data-toggle="modal" data-target="#barColorPicker"></i></div>';
				 var barFix= '<div class="clearfix"></div>';

				 $('#bar-form').append(barTitle,barvalue,barCross,barFix);
			 }

	}
