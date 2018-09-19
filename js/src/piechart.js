
		var pie_id;
    var pie_color_arr=[];

		$('#pieColorPicker').on('show.bs.modal', function (event) {
		    pie_id= event.relatedTarget.id;

				if(pie_color_arr['color-'+pie_id]){
					if(pie_color_arr['color-'+pie_id] !== selectedColor()){
							selectedColor= ko.observable(pie_color_arr['color-'+pie_id]);
				 }
				}

		});



// Fixed Modal Scrollbar issue

		$("#pieColorPicker").on('hidden.bs.modal', function (event) {
		  if ($('.modal:visible').length) //check if any modal is open
		  {
		    $('body').addClass('modal-open');//add class to body
		  }

			$('#bar-modal-body').show();
			$('#line-modal-body').show();

		});


		// Main Portion


		function changePieColor(index, color) {
		 piechart.chartData[index].color=color;
		  piechart.validateNow();
		}

		console.log(pie_color_arr);



		/**
		 * The Pie chart
		 */

		 function myPieClick(e) {

            /**
		          $('.sp-replacer').css('display','inline-block');
               setTimeout("$('.sp-replacer').css('display','none')", 2000);
						**/

		    var dIndex = e.dataItem.index;
		        $(document).ready(function(){
		            $(".custom").spectrum({
		            "color": "#67b7dc",
                "flat": true,
		            "change": function(color) {
		              changePieColor(dIndex, color.toHexString());

		            }
		          });
		      });

		}

		var piechart = AmCharts.makeChart("piediv", {
		  "type": "pie",
		  "hideCredits":true,
		  "theme": "light",
		   //"radius":150,
			 "autoMargins":false,
			 "marginTop ":0,
			 "marginBottom":0,
			 "marginLeft":0,
			 "marginRight":0,
			 "pullOutRadius":0,
		  "dataProvider": [{
		    "country": "Lithuania",
		    "litres": 501.9,
				"color": "#FDD835"
		  }, {
		    "country": "Czech Republic",
		    "litres": 301.9,
		    "color": "#81D4FA"
		  }, {
		    "country": "Ireland",
		    "litres": 201.1,
				"color": "#ff0000"
		  }, {
		    "country": "Germany",
		    "litres": 165.8,
		    "color": "#00ff00"
		  }],
		  "valueField": "litres",
		  "titleField": "country",
		  "colorField": "color",
		  "balloon": {
		    "fixedPosition": true
		  },
		  "listeners": [{
		        "event": "clickSlice",
		        "method": myPieClick
		    }],
				"responsive": {
						"enabled": true
				}
		});

// Control function start


var pieArrLen = piechart.dataProvider.length;

function addPieEle(){

	var addField=0;
	if(document.getElementById('pie-real').length > piechart.dataProvider.length*2){
		 addField += (document.getElementById('pie-real').length - piechart.dataProvider.length*2)/2;
	}

	var pieTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hidePieEle-'+(addField+piechart.dataProvider.length)+'"><input type="text" class="form-control" id="title-'+(addField+piechart.dataProvider.length)+'" value="" placeholder="Slice #'+(addField+piechart.dataProvider.length+1)+' title"></div>';
	var pieValue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hidePieEle-'+(addField+piechart.dataProvider.length)+'"><input type="text" class="form-control" id="value-'+(addField+piechart.dataProvider.length)+'"value="" placeholder="Slice #'+(addField+piechart.dataProvider.length+1)+' value"></div>';
	var pieCross= '<div class="form-group md-form col-xs-2 col-sm-2 col-md-2 col-lg-2 hidePieEle-'+(addField+piechart.dataProvider.length)+'"><i class="fas fa-minus-circle" onclick="removePieEle('+(addField+piechart.dataProvider.length)+');"></i><i class="fas fa-palette" id="'+(addField+piechart.dataProvider.length)+'" data-toggle="modal" data-target="#pieColorPicker"></i></div>';
	var pieFix='<div class="clearfix"></div>';

  $('#pie-form').append(pieTitle,pieValue,pieCross,pieFix);

}

function removePieEle(count){

	if(piechart.dataProvider[count]){
		 piechart.dataProvider.splice(count,1);
	}

	var addRfield=0;
	var addField=0;
	if(document.getElementById('pie-real').length > piechart.dataProvider.length*2){
		 addField += (document.getElementById('pie-real').length - piechart.dataProvider.length*2)/2;
	}

	 $('.hidePieEle-'+count).remove();

	 var remainingEle= (piechart.dataProvider.length+addField)-(count+1);

    var lengthDOC= document.getElementById('pie-real').length/2;


	 for(var i=count+1; i<(piechart.dataProvider.length+addField);i++){
			 $('.hidePieEle-'+i).remove();
	 }

	 if(document.getElementById('pie-real').length > piechart.dataProvider.length*2){
			addRfield += (document.getElementById('pie-real').length - piechart.dataProvider.length*2)/2;
	 }

	 for(var i=count;i< (piechart.dataProvider.length+addRfield+remainingEle);i++){
     if(i<lengthDOC){
				 if(i< piechart.dataProvider.length){
					var pieTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hidePieEle-'+i+'"><input type="text" class="form-control" id="title-'+i+'" value="'+piechart.dataProvider[i].country+'" placeholder="Slice #'+(i+1)+' title"></div>';
				 var pieValue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hidePieEle-'+i+'"><input type="text" class="form-control" id="value-'+i+'"value="'+piechart.dataProvider[i].litres+'" placeholder="Slice #'+(i+1)+' value"></div>';
				 var pieCross= '<div class="form-group md-form col-xs-2 col-sm-2 col-md-2 col-lg-2 hidePieEle-'+i+'"><i class="fas fa-minus-circle" onclick="removePieEle('+i+');"></i><i class="fas fa-palette" id="'+i+'" data-toggle="modal" data-target="#pieColorPicker"></i></div>';
				 var pieFix='<div class="clearfix"></div>';

					 $('#pie-form').append(pieTitle,pieValue,pieCross,pieFix);
				}else{
						var pieTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hidePieEle-'+i+'"><input type="text" class="form-control" id="title-'+i+'" value="" placeholder="Slice #'+(i+1)+' title"></div>';
					 var pieValue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hidePieEle-'+i+'"><input type="text" class="form-control" id="value-'+i+'"value="" placeholder="Slice #'+(i+1)+' value"></div>';
					 var pieCross= '<div class="form-group md-form col-xs-2 col-sm-2 col-md-2 col-lg-2 hidePieEle-'+i+'"><i class="fas fa-minus-circle" onclick="removePieEle('+i+');"></i><i class="fas fa-palette" id="'+i+'" data-toggle="modal" data-target="#pieColorPicker"></i></div>';
					 var pieFix='<div class="clearfix"></div>';

					 $('#pie-form').append(pieTitle,pieValue,pieCross,pieFix);
				}
		 }
	}
}


 function updatePieChart() {

//update color
			for(i in pie_color_arr){
				if(i !==null){
					if(i<piechart.dataProvider.length){
						piechart.dataProvider[i].color= pie_color_arr[i];
					}else{
						piechart.dataProvider.push({
							'color':pie_color_arr[i]
						});
					}

				}
			}

			pie_color_arr=[];


  // Update value field

	 var addField=0;
	 if(document.getElementById('pie-real').length > pieArrLen*2){
		 addField += (document.getElementById('pie-real').length - pieArrLen*2)/2;
	}
	 var incField = (document.getElementById('pie-real').length)/2 - piechart.dataProvider.length;

 	  for (var i = 0; i < (piechart.dataProvider.length+incField); i++) {
        if(i>=piechart.dataProvider.length){

					 if(document.getElementById('title-' + i).value=='' && document.getElementById('value-' + i).value==''){
								console.log('Unchanged');
					 }
					else if(document.getElementById('title-' + i).value=='' && Number(document.getElementById('value-' + i).value)){
	            piechart.dataProvider.push({
								 'country':'',
								  'litres': Number(document.getElementById('Barvalue-' + i).value)
							 });
							 		piechart.validateData();
									  $('.btn-success').attr('data-dismiss','modal');

					}else if (document.getElementById('value-' + i).value=='') {

							document.getElementById('value-' + i).value= 0;

						piechart.dataProvider.push({
							'country':document.getElementById('title-' + i).value,
							 'litres': document.getElementById('value-' + i).value
						});
								piechart.validateData();
								  $('.btn-success').attr('data-dismiss','modal');
						}else{
							piechart.dataProvider.push({
								'country':document.getElementById('title-' + i).value,
								 'litres': Number(document.getElementById('value-' + i).value)
							});
								piechart.validateData();
								  $('.btn-success').attr('data-dismiss','modal');
						}

			 }
		 else{
			 if(document.getElementById('title-' + i).value=='' && document.getElementById('value-' + i).value==''){
            if(i==0){
                 console.log('Unchanged');
						}else{
							piechart.dataProvider[i].country = document.getElementById('title-' + i).value;
							piechart.dataProvider[i].litres = Number(document.getElementById('value-' + i).value);
							piechart.validateData();
						}
				}
			 else if(document.getElementById('title-' + i).value=='' && Number(document.getElementById('value-' + i).value)){
					 piechart.dataProvider[i].litres = Number(document.getElementById('value-' + i).value);
					 piechart.validateData();


				 }else if (document.getElementById('value-' + i).value=='') {
							 piechart.dataProvider[i].country = document.getElementById('title-' + i).value;
							 piechart.validateData();

					 }else{
						 piechart.dataProvider[i].country = document.getElementById('title-' + i).value;
							 piechart.dataProvider[i].litres = Number(document.getElementById('value-' + i).value);
							 piechart.validateData();
            }

					 }
         }

		$('.btn-success').attr('data-dismiss','modal');

}


	for(var i=0; i< piechart.dataProvider.length;i++){

	  if(i==0){
			var pieTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hidePieEle-'+i+'"><input type="text" class="form-control" id="title-'+i+'" value="'+piechart.dataProvider[i].country+'" placeholder="Slice #'+(i+1)+' title"></div>';
			var pieValue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hidePieEle-'+i+'"><input type="text" class="form-control" id="value-'+i+'"value="'+piechart.dataProvider[i].litres+'" placeholder="Slice #'+(i+1)+' value"></div>';
			 //var pieCross= '<div class="form-group col-xs-1 col-sm-1 col-md-1 col-lg-1 hidePieEle-'+i+'"><img onclick="removePieEle('+i+');" src="minus-4-16.png"  /></div>';
			var pieFix='<div class="clearfix"></div>';

			$('#pie-form').append(pieTitle,pieValue,pieFix);
		}else{
			var pieTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hidePieEle-'+i+'"><input type="text" class="form-control" id="title-'+i+'" value="'+piechart.dataProvider[i].country+'" placeholder="Slice #'+(i+1)+' title"></div>';
			var pieValue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hidePieEle-'+i+'"><input type="text" class="form-control" id="value-'+i+'"value="'+piechart.dataProvider[i].litres+'" placeholder="Slice #'+(i+1)+' value"></div>';
			 var pieCross= '<div class="form-group md-form col-xs-2 col-sm-2 col-md-2 col-lg-2 hidePieEle-'+i+'"><i class="fas fa-minus-circle" onclick="removePieEle('+i+');"></i><i class="fas fa-palette" id="'+i+'" data-toggle="modal" data-target="#pieColorPicker"></i></div>';
			var pieFix='<div class="clearfix"></div>';

			$('#pie-form').append(pieTitle,pieValue,pieCross,pieFix);
		}


	}
