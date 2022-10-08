(function($){
   "use strict";
   //patients datatable
   var table=$('#table').DataTable( {
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-4'i><'col-sm-8'p>>",
        buttons: [
			/*
            {
                extend:    'copyHtml5',
                text:      '<i class="fas fa-copy"></i> '+trans("Copy"),
                titleAttr: 'Copy'
            },
            {
                extend:    'excelHtml5',
                text:      '<i class="fas fa-file-excel"></i> '+trans("Excel"),
                titleAttr: 'Excel'
            },
            {
                extend:    'csvHtml5',
                text:      '<i class="fas fa-file-csv"></i> '+trans("CVS"),
                titleAttr: 'CSV'
            },
            {
                extend:    'pdfHtml5',
                text:      '<i class="fas fa-file-pdf"></i> '+trans("PDF"),
                titleAttr: 'PDF'
            },
			
            {
              extend:    'colvis',
              text:      '<i class="fas fa-eye"></i> Manage Columns',
              titleAttr: 'PDF'
            }
			*/
			
        ],
        "processing": true,
        "serverSide": true,
        "bSort" : false,
        fixedHeader: true,
        "ajax": {
            url: db_url+"get_test_registration"
        },
        // orderCellsTop: true,
        fixedHeader: true,
        "columns": [
            {data:"id"},
            {data:"org_name_eng"},
            {data:"name_eng"},
            {data:"name_dept"},
            {data:"sample_name_eng"},
            {data:"perform_by_name"},
            {data:"price"},
            {data:"pattern_name"},
            {data:"urgent_price"},
            {data:"status_label"},
			{data:"action",searchable:false,orderable:false,sortable:false}//action
        ],
        "language": {
            "sEmptyTable":     trans("No data available in table"),
            "sInfo":           trans("Showing")+" _START_ "+trans("to")+" _END_ "+trans("of")+" _TOTAL_ "+trans("records"),
            "sInfoEmpty":      trans("Showing")+" 0 "+trans("to")+" 0 "+trans("of")+" 0 "+trans("records"),
            "sInfoFiltered":   "("+trans("filtered")+" "+trans("from")+" _MAX_ "+trans("total")+" "+trans("records")+")",
            "sInfoPostFix":    "",
            "sInfoThousands":  ",",
            "sLengthMenu":     trans("Show")+" _MENU_ "+trans("records"),
            "sLoadingRecords": trans("Loading..."),
            "sProcessing":     trans("Processing..."),
            "sSearch":         trans("Search")+":",
            "sZeroRecords":    trans("No matching records found"),
            "oPaginate": {
                "sFirst":    trans("First"),
                "sLast":     trans("Last"),
                "sNext":     trans("Next"),
                "sPrevious": trans("Previous")
            },
        }
    });
   
   //active
   $('#test_registration').addClass('active');


   $('#form').validate({
       rules:{
           name_eng:{
               required:true
           },
           ph1:{
               required:true
           },
           address1:{
               required:true
           },
           lab_id:{
               required:true
           }

       },
       errorElement: 'span',
            errorPlacement: function (error, element) {
            error.addClass('invalid-feedback');
            element.closest('.form-group').append(error);
            },
            highlight: function (element, errorClass, validClass) {
            $(element).addClass('is-invalid');
            },
            unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
        }
   });

   //delete patient
    $(document).on('click','.delete_patient',function(e){
        e.preventDefault();
        var el=$(this);
        swal({
            title: trans("Are you sure to delete patient ?"),
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: trans("Delete"),
            cancelButtonText: trans("Cancel"),
            closeOnConfirm: false
        },
        function(){
            $(el).parent().submit();
        });
    });

})(jQuery);


$( "#country_id" ).change(function() {
 $('.preloader').show();
 $('.loader').show();
 
 var id = $(this).val();
	$.ajax({
		url: db_url+"get_country_details",
		type: "POST",
		data: { country_id : id},
		dataType: 'JSON',
		success: function(response) {
			$('.preloader').hide();
			$('.loader').hide();
			if(response.status == 0){
				swal({
				  buttons: false,
				  title:'Error',
				  text: 'No data found',
				  timer: 3000,
				  closeOnConfirm: false
				});
			}
			else{
				$('#prov_id').html(response.province_html);
				$('#city').html(response.city_html);
			}
		}            
	});
});
$( "#prov_id" ).change(function() {
 $('.preloader').show();
 $('.loader').show();
 
 var id = $(this).val();
	$.ajax({
		url: db_url+"get_country_details",
		type: "POST",
		data: { province_id : id},
		dataType: 'JSON',
		success: function(response) {
			$('.preloader').hide();
			$('.loader').hide();
			if(response.status == 0){
				swal({
				  buttons: false,
				  title:'Error',
				  text: 'No data found',
				  timer: 3000,
				  closeOnConfirm: false
				});
			}
			else{
				$('#city_id').html(response.city_html);
			}
		}            
	});
});


var count=$('#count_labs').val();
//add option
    $('.add_lab').on('click',function(){
       count++;
       $('tbody').append(`
        <tr>
            <td>
                <input type="text" name="option[`+count+`][value]" id="option_`+count+`" placeholder="`+trans("Option name")+`"  class="form-control" required>
            </td>
            <td>
                <button type="button" class="btn btn-danger btn-sm delete_row">
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        </tr>
       `);

    });

//delete culture option
$(document).on('click','.delete_culture_option',function(e){
	e.preventDefault();
	var el=$(this);
	swal({
	  title: trans("Are you sure to delete culture option ?"),
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: trans("Delete"),
	  cancelButtonText: trans("Cancel"),
	  closeOnConfirm: false
	}).then((willDelete) => {
		if (willDelete) {
		$(el).parent().submit();
	   }
   })
});

//delete lab
$(document).on('click','.delete_row_file',function(e){
	
	var id = $(this).attr('data_id');
	swal({
	  title: trans("Are you sure to delete doc ?"),
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: trans("Delete"),
	  cancelButtonText: trans("Cancel"),
	  closeOnConfirm: false
	}).then(function (result) {
		$.ajax({
			url: doc_delete,
			type: "POST",
			data: { "id": id },
			dataType: 'JSON',
			success: function(response) {
				
				swal.fire({
				  buttons: false,
				  title:'Success',
				  icon:'success',
				  text: response.message,
				  timer: 2000,
				  closeOnConfirm: false
				});
				
				setTimeout(function() { 
					window.location.reload();
				}, 2000);
				
			}            
		});
	});
});

//delete lab
$(document).on('click','.delete_row_center',function(e){
	
	var id = $(this).attr('data_id');
	swal({
	  title: trans("Are you sure to delete center ?"),
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: trans("Delete"),
	  cancelButtonText: trans("Cancel"),
	  closeOnConfirm: false
	}).then(function (result) {
		$.ajax({
			url: vendor_center_delete,
			type: "POST",
			data: { "id": id , "_method":"delete"},
			dataType: 'JSON',
			success: function(response) {
				
				swal.fire({
				  buttons: false,
				  title:'Success',
				  icon:'success',
				  text: response.message,
				  timer: 2000,
				  closeOnConfirm: false
				});
				
				setTimeout(function() { 
					window.location.reload();
				}, 2000);
				
			}            
		});
	});
});

//delete lab
$(document).on('click','.delete_row',function(e){
	
	var id = $(this).attr('data_id');
	swal({
	  title: trans("Are you sure to delete lab option ?"),
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: trans("Delete"),
	  cancelButtonText: trans("Cancel"),
	  closeOnConfirm: false
	}).then(function (result) {
		$.ajax({
			url: vendor_lab_delete,
			type: "POST",
			data: { "id": id , "_method":"delete"},
			dataType: 'JSON',
			success: function(response) {
				
				swal.fire({
				  buttons: false,
				  title:'Success',
				  icon:'success',
				  text: response.message,
				  timer: 2000,
				  closeOnConfirm: false
				});
				
				setTimeout(function() { 
					window.location.reload();
				}, 2000);
				
			}            
		});
	});
});


$(document).on('click','.add_labs',function (e){
	
	swal({
	title: 'Add Lab',
	html:'<div class="col-md-12"> <select class="form-control select2" name="lab_id" placeholder="{{__("Select Lab")}}" id="lab_id" required><option value="">Select Lab</option>'+all_labs+'</select></div> <div class="col-md-12" style="margin-top: 20px;"><select class="form-control" name="status" placeholder="{{__("Select Status")}}" id="status" required><option value="0">Active</option><option value="1">In-Active</option></select></div>',
	confirmButtonText: "Save",
	preConfirm: function () {
		return new Promise(function (resolve) {
			// Validate input
			if ($('#lab_id').val() == '') {
				swal.showValidationMessage("Please select Lab"); // Show error when validation fails.
				swal.enableConfirmButton(); // Enable the confirm button again.
			}
			else {
				swal.resetValidationMessage(); // Reset the validation message.
				resolve([
					$('#lab_id').val(),
					$('#status').val()
				]);
			}
		})
	},
	onOpen: function () {
		$(".select2").select2();
		$('#lab_id').focus();
	}
}).then(function (result) {
	// If validation fails, the value is undefined. Break out here.
	
	if (typeof(result.value) == 'undefined') {
		return false;
	}
	
	$.ajax({
		url: vendor_lab,
		type: "POST",
		data: { "lab_id": $('#lab_id').val() , "status": $('#status').val() , "cust_id": cust_id },
		dataType: 'JSON',
		success: function(response) {
			
			if(response.status == 0){
				swal.fire({
				  buttons: false,
				  title:'Error',
				  icon:'error',
				  text: response.message,
				  timer: 3000,
				  closeOnConfirm: false
				});	
			}
			else{
				
				swal.fire({
				  buttons: false,
				  title:'Success',
				  icon:'success',
				  text: response.message,
				  timer: 2000,
				  closeOnConfirm: false
				});
				
				setTimeout(function() { 
					window.location.reload();
				}, 2000);
				
			}
			
			
		}            
	});
	//alert(array);
	//swal(JSON.stringify(result))
}).catch(swal.noop)
});


$(document).on('click','.add_doc',function (e){
	
	var id = $(this).attr('data-id');
	swal({
	title: 'Add Document',
	html:'<form action="'+doc_upload+'" id="doc_form" method="POST" enctype="multipart/form-data"><div class="col-md-12"><input type="hidden" name="customer_registration_id" value="'+id+'"><textarea class="form-control" name="doc_details" id="doc_details"></textarea></div><div class="col-md-12" style="margin-top: 20px;"><input type="file" class="form-control" name="doc_file" id="doc_file"></div></form>',
	confirmButtonText: "Save",
	preConfirm: function () {
		return new Promise(function (resolve) {
			// Validate input
			if ($('#doc_details').val() == '') {
				swal.showValidationMessage("Please fill all fields"); // Show error when validation fails.
				swal.enableConfirmButton(); // Enable the confirm button again.
			}
			else {
				swal.resetValidationMessage(); // Reset the validation message.
				resolve([
					$('#doc_details').val()
				]);
			}
		})
	},
	onOpen: function () {
		$('#doc_details').focus();
	}
}).then(function (result) {
	$('#doc_form').submit();
}).catch(swal.noop)
});


$(document).on('click','.add_centers',function (e){
	
	swal({
	title: 'Add Center',
	html:'<div class="col-md-12"> <select class="form-control select2" name="lab_id" placeholder="{{__("Select Center")}}" id="center_id" required><option value="">Select Center</option>'+all_centers+'</select></div> <div class="col-md-12" style="margin-top: 20px;"><input type="text" class="form-control"  name="center_name_eng" id="center_name_eng"  Placeholder="Name(English)*"> </div> <div class="col-md-12" style="margin-top: 20px;"><input type="text" class="form-control" Placeholder="Name(Local)" name="center_name_local" id="center_name_local"> </div>  <div class="col-md-12" style="margin-top: 20px;"><select class="form-control" name="status" placeholder="{{__("Select Status")}}" id="status" required><option value="0">Active</option><option value="1">In-Active</option></select></div>',
	confirmButtonText: "Save",
	preConfirm: function () {
		return new Promise(function (resolve) {
			// Validate input
			if ($('#center_id').val() == '') {
				swal.showValidationMessage("Please select center"); // Show error when validation fails.
				swal.enableConfirmButton(); // Enable the confirm button again.
			}
			else if ($('#center_name_eng').val() == '') {
				swal.showValidationMessage("Please enter English Name"); // Show error when validation fails.
				swal.enableConfirmButton(); // Enable the confirm button again.
			}
			else {
				swal.resetValidationMessage(); // Reset the validation message.
				resolve([
					$('#center_id').val(),
					$('#status').val()
				]);
			}
		})
	},
	onOpen: function () {
		$(".select2").select2();
		$('#center_id').focus();
	}
}).then(function (result) {
	// If validation fails, the value is undefined. Break out here.
	
	if (typeof(result.value) == 'undefined') {
		return false;
	}
	
	$.ajax({
		url: vendor_center,
		type: "POST",
		data: { "center_id": $('#center_id').val() , "status": $('#status').val() , "cust_id": cust_id  , "center_name_eng": $('#center_name_eng').val()  , "center_name_local": $('#center_name_local').val() },
		dataType: 'JSON',
		success: function(response) {
			
			if(response.status == 0){
				swal.fire({
				  buttons: false,
				  title:'Error',
				  icon:'error',
				  text: response.message,
				  timer: 3000,
				  closeOnConfirm: false
				});	
			}
			else{
				
				swal.fire({
				  buttons: false,
				  title:'Success',
				  icon:'success',
				  text: response.message,
				  timer: 2000,
				  closeOnConfirm: false
				});
				
				setTimeout(function() { 
					window.location.reload();
				}, 2000);
				
			}
			
			
		}            
	});
	//alert(array);
	//swal(JSON.stringify(result))
}).catch(swal.noop)
});

$(document).on('click','.edit_vendor_lab',function (e){
	
	var id = $(this).attr('data-id');
	var lab_id = $(this).attr('data-lab-id');
	var lab_status = $(this).attr('data-status');
	
	swal({
	title: 'Update Lab',
	html:'<input type="hidden" name="vendor_reg_lab_id" value="'+id+'"><div class="col-md-12"> <select class="form-control select2 editSelect" name="lab_id" placeholder="{{__("Select Lab")}}" id="lab_id_edit" required><option value="">Select Lab</option>'+all_labs+'</select></div> <div class="col-md-12" style="margin-top: 20px;"><select class="form-control editStatus" name="status" placeholder="{{__("Select Status")}}" id="status_edit" required><option value="0">Active</option><option value="1">In-Active</option></select></div>',
	confirmButtonText: "Update",
	preConfirm: function () {
		return new Promise(function (resolve) {
			// Validate input
			if ($('#lab_id').val() == '') {
				swal.showValidationMessage("Please Select Lab"); // Show error when validation fails.
				swal.enableConfirmButton(); // Enable the confirm button again.
			}
			else {
				swal.resetValidationMessage(); // Reset the validation message.
				resolve([
					$('#lab_id').val(),
					$('#status').val()
				]);
			}
		})
	},
	onOpen: function () {
		$(".select2").select2();
		$(".editSelect").val(lab_id).trigger('change');
		$(".editStatus").val(lab_status);
		$('#lab_id').focus();
	}
}).then(function (result) {
	// If validation fails, the value is undefined. Break out here.
	
	if (typeof(result.value) == 'undefined') {
		return false;
	}
	
	$.ajax({
		url: vendor_lab,
		type: "POST",
		data: { "lab_id": $('#lab_id_edit').val() , "status": $('#status_edit').val() , "id": id },
		dataType: 'JSON',
		success: function(response) {
			
			if(response.status == 0){
				swal.fire({
				  buttons: false,
				  title:'Error',
				  icon:'error',
				  text: response.message,
				  timer: 3000,
				  closeOnConfirm: false
				});	
			}
			else{
				
				swal.fire({
				  buttons: false,
				  title:'Success',
				  icon:'success',
				  text: response.message,
				  timer: 2000,
				  closeOnConfirm: false
				});
				
				setTimeout(function() { 
					window.location.reload();
				}, 2000);
				
			}
			
			
		}            
	});
	//alert(array);
	//swal(JSON.stringify(result))
}).catch(swal.noop)
});
$(document).on('click','.edit_vendor_center',function (e){
	
	var id = $(this).attr('data-id');
	var center_id = $(this).attr('data-center-id');
	var center_status = $(this).attr('data-status');
	var eng_name = $(this).attr('data-eng-name');
	var local_name = $(this).attr('data-local-name');
	
	swal({
	title: 'Update Center',
	html:'<input type="hidden" name="vendor_reg_center_id" value="'+id+'"><div class="col-md-12"> <select class="form-control select2 editSelectCenter" name="center_id" placeholder="{{__("Select Center")}}" id="center_id_edit" required><option value="">Select Center</option>'+all_centers+'</select></div> <div class="col-md-12" style="margin-top: 20px;"><input type="text" class="form-control"  name="center_name_eng" value="'+eng_name+'" id="center_name_eng_edit"  Placeholder="Name(English)*"> </div> <div class="col-md-12" style="margin-top: 20px;"><input type="text" class="form-control" Placeholder="Name(Local)" name="center_name_local" id="center_name_local_edit" value="'+local_name+'"> </div>  <div class="col-md-12" style="margin-top: 20px;"><select class="form-control editStatusCenter" name="status" placeholder="{{__("Select Status")}}" id="status_edit_center" required><option value="0">Active</option><option value="1">In-Active</option></select></div>',
	confirmButtonText: "Update",
	preConfirm: function () {
		return new Promise(function (resolve) {
			// Validate input
			if ($('#center_id').val() == '') {
				swal.showValidationMessage("Please Select Lab"); // Show error when validation fails.
				swal.enableConfirmButton(); // Enable the confirm button again.
			}
			else if ($('#center_name_eng_edit').val() == '') {
				swal.showValidationMessage("Please enter English Name"); // Show error when validation fails.
				swal.enableConfirmButton(); // Enable the confirm button again.
			}
			else {
				swal.resetValidationMessage(); // Reset the validation message.
				resolve([
					$('#center_id').val(),
					$('#status').val()
				]);
			}
		})
	},
	onOpen: function () {
		$(".select2").select2();
		$(".editSelectCenter").val(center_id).trigger('change');
		$(".editStatus").val(lab_status);
		$('#center_id').focus();
	}
}).then(function (result) {
	// If validation fails, the value is undefined. Break out here.
	
	if (typeof(result.value) == 'undefined') {
		return false;
	}
	
	$.ajax({
		url: vendor_center,
		type: "POST",
		data: { "center_id": $('#center_id_edit').val() , "status": $('#status_edit_center').val() , "id": id   , "center_name_eng": $('#center_name_eng_edit').val()  , "center_name_local": $('#center_name_local_edit').val() },
		dataType: 'JSON',
		success: function(response) {
			
			if(response.status == 0){
				swal.fire({
				  buttons: false,
				  title:'Error',
				  icon:'error',
				  text: response.message,
				  timer: 3000,
				  closeOnConfirm: false
				});	
			}
			else{
				
				swal.fire({
				  buttons: false,
				  title:'Success',
				  icon:'success',
				  text: response.message,
				  timer: 2000,
				  closeOnConfirm: false
				});
				
				setTimeout(function() { 
					window.location.reload();
				}, 2000);
				
			}
			
			
		}            
	});
	//alert(array);
	//swal(JSON.stringify(result))
}).catch(swal.noop)
});

 