
var line_id;
var line_color_arr=[];

$('#lineColorPicker').on('show.bs.modal', function (event) {
		line_id= event.relatedTarget.id;
});


// Fixed Modal Scrollbar issue

		$("#lineColorPicker").on('hidden.bs.modal', function (event) {
		  if ($('.modal:visible').length) //check if any modal is open
		  {
		    $('body').addClass('modal-open');//add class to body
		  }
		});


		// Main Portion


		var lineChart = new Chart(document.getElementById("ctx"), {
		  type: 'line',
		  data: {
		    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
		    datasets: [{
		        data: [86,114,106,106,107,111,133,221,783,2478],
		        label: "Indonesia",
		        borderColor: "#3e95cd",
		        fill: false
		      }, {
		        data: [282,350,411,502,635,809,947,1402,3700,5267],
		        label: "America",
		        borderColor: "#8e5ea2",
		        fill: false
		      }, {
		        data: [168,170,178,190,203,276,408,547,675,734],
		        label: "Japan",
		        borderColor: "#3cba9f",
		        fill: false
		      }, {
		        data: [40,20,10,16,24,38,74,167,508,784],
		        label: "Germany",
		        borderColor: "#e8c3b9",
		        fill: false
		      }
				]
		  },
		  options: {
		    maintainAspectRatio: false
		  }
		});



// Control functions


var lineArrLen = lineChart.data.datasets.length;




function addLineEle(){
	var addField=0;

	if(document.getElementById('line-real').length > lineChart.data.datasets.length*2){
		 addField += (document.getElementById('line-real').length - lineChart.data.datasets.length*2)/2;
	}
	var lineTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideLineEle-'+(addField+lineChart.data.datasets.length)+'"><input type="text" class="form-control" id="Linetitle-'+(addField+lineChart.data.datasets.length)+'" value="" placeholder="Data #'+(addField+lineChart.data.datasets.length+1)+' title"></div>';
	var lineValue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideLineEle-'+(addField+lineChart.data.datasets.length)+'"><input type="text" class="form-control" id="Linevalue-'+(addField+lineChart.data.datasets.length)+'" value="" placeholder="Data #'+(addField+lineChart.data.datasets.length+1)+' value"></div>';

  var lineCross= '<div class="form-group md-form col-xs-2 col-sm-2 col-md-2 col-lg-2 hideLineEle-'+(addField+lineChart.data.datasets.length)+'"><i class="fas fa-minus-circle" onclick="removeLineEle('+(addField+lineChart.data.datasets.length)+');"></i><i class="fas fa-palette" id="'+(addField+lineChart.data.datasets.length)+'" data-toggle="modal" data-target="#lineColorPicker"></i></div>';
	var lineFix='<div class="clearfix"></div>';

	 $('#line-form').append(lineTitle,lineValue,lineCross,lineFix);

}


function removeLineEle(count){


	if(lineChart.data.datasets[count]){
		 lineChart.data.datasets.splice(count,1);
	}

	var addField=0;
	var addRfield=0;

	if(document.getElementById('line-real').length > lineChart.data.datasets.length*2){
		 addField += (document.getElementById('line-real').length - lineChart.data.datasets.length*2)/2;
	}

	 $('.hideLineEle-'+count).remove();

	 var remainingEle= (lineChart.data.datasets.length+addField)-(count+1);

	 var lengthDOC= document.getElementById('line-real').length/2;

	 if(lineChart.data.datasets.length==1){
	 	 $('.hideLineEle-0 img').hide();

	 }

	 for(var i=count+1; i<(lineChart.data.datasets.length+addField);i++){
			 $('.hideLineEle-'+i).remove();
	 }

	 if(document.getElementById('line-real').length > lineChart.data.datasets.length*2){
			addRfield += (document.getElementById('line-real').length - lineChart.data.datasets.length*2)/2;
	 }

	 for(var i=count;i<(lineChart.data.datasets.length+addRfield+remainingEle);i++){
       if(i<lengthDOC){
								 if(i<lineChart.data.datasets.length){
									 var lineTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideLineEle-'+i+'"><input type="text" class="form-control" id="Linetitle-'+i+'" value="'+lineChart.data.datasets[i].label+'" placeholder="Data #'+(i+1)+' title"></div>';
									var lineValue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideLineEle-'+i+'"><input type="text" class="form-control" id="Linevalue-'+i+'" value="'+lineChart.data.datasets[i].data+'" placeholder="Data #'+(i+1)+' value"></div>';

									 var lineCross= '<div class="form-group md-form col-xs-2 col-sm-2 col-md-2 col-lg-2 hideLineEle-'+i+'"><i class="fas fa-minus-circle" onclick="removeLineEle('+i+');"></i><i class="fas fa-palette" id="'+i+'" data-toggle="modal" data-target="#lineColorPicker"></i></div>';
									var lineFix='<div class="clearfix"></div>';

									 $('#line-form').append(lineTitle,lineValue,lineCross,lineFix);
							 }else{
								 var lineTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideLineEle-'+i+'"><input type="text" class="form-control" id="Linetitle-'+i+'" value="" placeholder="Data #'+(i+1)+' title"></div>';
								var lineValue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideLineEle-'+i+'"><input type="text" class="form-control" id="Linevalue-'+i+'" value="" placeholder="Data #'+(i+1)+' value"></div>';

								 var lineCross= '<div class="form-group md-form col-xs-2 col-sm-2 col-md-2 col-lg-2 hideLineEle-'+i+'"><i class="fas fa-minus-circle" onclick="removeLineEle('+i+');"></i><i class="fas fa-palette" id="'+i+'" data-toggle="modal" data-target="#lineColorPicker"></i></div>';
								var lineFix='<div class="clearfix"></div>';

								 $('#line-form').append(lineTitle,lineValue,lineCross,lineFix);
							 }

		}
 }

}





function updateLineChart() {

	//update color

				for(i in line_color_arr){
					if(i !==null){
						if(i<lineChart.data.datasets.length){
								lineChart.data.datasets[i].borderColor= line_color_arr[i];
						}else{
							lineChart.data.datasets.push({
								'borderColor':line_color_arr[i]
							});
						}

					}
				}

				line_color_arr=[];



					  // Update value field
					var addField=0;
					if(document.getElementById('line-real').length > lineArrLen*2){
						 addField += (document.getElementById('line-real').length - lineArrLen*2)/2;
					}
					var incLineField = (document.getElementById('line-real').length)/2 - lineChart.data.datasets.length;

					  for (var i = 0; i < (lineChart.data.datasets.length+incLineField); i++) {
				              if(i>=lineChart.data.datasets.length){

												var borderColor='#'+(Math.random()*0xFFFFFF<<0).toString(16);

													if(document.getElementById('Linetitle-' + i).value=='' && document.getElementById('Linevalue-' + i).value==''){
														          console.log("Unchanged");
													}

												else if(document.getElementById('Linetitle-' + i).value=='' && document.getElementById('Linevalue-' + i).value){
					                  lineChart.data.datasets.push({
															 'label':'',
															  'data': document.getElementById('Linevalue-' + i).value.split(','),
																'borderColor':borderColor,
																'fill':false
														 });
														 		lineChart.update();
																$('.btn-success').attr('data-dismiss','modal');

												}else if (document.getElementById('Linevalue-' + i).value=='') {
														document.getElementById('Linevalue-' + i).value= 0;
													lineChart.data.datasets.push({
														'label':document.getElementById('Linetitle-' + i).value,
														 'data': document.getElementById('Linevalue-' + i).value.split(','),
														 'borderColor': borderColor,
														 'fill': false
													});
															lineChart.update();
															  $('.btn-success').attr('data-dismiss','modal');
													}else{
														lineChart.data.datasets.push({
															'label':document.getElementById('Linetitle-' + i).value,
															 'data': document.getElementById('Linevalue-' + i).value.split(','),
															 'borderColor':borderColor,
															 'fill':false
														});
															lineChart.update();
															  $('.btn-success').attr('data-dismiss','modal');
													}


											}else{
												if(document.getElementById('Linetitle-' + i).value=='' && document.getElementById('Linevalue-' + i).value==''){
				                 if(i==0){
													  console.log("Unchanged");
												 }else {
													 	lineChart.data.datasets[i].label = document.getElementById('Linetitle-' + i).value;
													 	lineChart.data.datasets[i].data = document.getElementById('Linevalue-' + i).value.split(',');
														lineChart.update();
												 }

												}
												 else if(document.getElementById('Linetitle-' + i).value=='' && document.getElementById('Linevalue-' + i).value){
															lineChart.data.datasets[i].data = document.getElementById('Linevalue-' + i).value.split(',');
															lineChart.update();

												 }else if (document.getElementById('Linevalue-' + i).value=='') {
															lineChart.data.datasets[i].label = document.getElementById('Linetitle-' + i).value;
															lineChart.update();

													}else{
															lineChart.data.datasets[i].label = document.getElementById('Linetitle-' + i).value;
																lineChart.data.datasets[i].data = document.getElementById('Linevalue-' + i).value.split(',');
																lineChart.update();

													}
											}

					  }


		$('.btn-success').attr('data-dismiss','modal');


 }



	for (var i = 0; i < lineChart.data.datasets.length; i++){

		if(i==0){
			var lineTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideLineEle-'+i+'"><input type="text" class="form-control" id="Linetitle-'+i+'" value="'+lineChart.data.datasets[i].label+'" placeholder="Data #'+(i+1)+' title"></div>';
			var lineValue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideLineEle-'+i+'"><input type="text" class="form-control" id="Linevalue-'+i+'" value="'+lineChart.data.datasets[i].data+'" placeholder="Data #'+(i+1)+' value"></div>';
			// var lineCross= '<div class="form-group col-xs-1 col-sm-1 col-md-1 col-lg-1 hideLineEle-'+i+'"><img onclick="removeLineEle('+i+');" src="minus-4-16.png"  /></div>';
			var lineFix='<div class="clearfix"></div>';

			 $('#line-form').append(lineTitle,lineValue,lineFix);
		}else{
			var lineTitle='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideLineEle-'+i+'"><input type="text" class="form-control" id="Linetitle-'+i+'" value="'+lineChart.data.datasets[i].label+'" placeholder="Data #'+(i+1)+' title"></div>';
			var lineValue='<div class="form-group md-form col-xs-10 col-sm-5 col-md-5 col-lg-5 hideLineEle-'+i+'"><input type="text" class="form-control" id="Linevalue-'+i+'" value="'+lineChart.data.datasets[i].data+'" placeholder="Data #'+(i+1)+' value"></div>';
			 var lineCross= '<div class="form-group md-form col-xs-2 col-sm-2 col-md-2 col-lg-2 hideLineEle-'+i+'"><i class="fas fa-minus-circle" onclick="removeLineEle('+i+');"></i><i class="fas fa-palette" id="'+i+'" data-toggle="modal" data-target="#lineColorPicker"></i></div>';
			var lineFix='<div class="clearfix"></div>';

			 $('#line-form').append(lineTitle,lineValue,lineCross,lineFix);
		}


	}
