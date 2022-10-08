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
            url: db_url+"get_faranchise_price_list"
        },
        // orderCellsTop: true,
        fixedHeader: true,
        "columns": [
            {data:"id"},
            {data:"org_name_eng"},
            {data:"lab_name"},
            {data:"faranchise_name"},
            {data:"start_date"},
            {data:"end_date"},
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
   $('#faranchise_price_list').addClass('active');


   $('#form').validate({
       rules:{
           org_id:{
               required:true
           },
           lab_id:{
               required:true
           },
           franchise_id:{
               required:true
           },
           start_date:{
               required:true
           },
           end_date:{
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
            title: trans("Are you sure to delete franchise price list ?"),
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

})(jQuery);




$(document).on('click','.add_centers',function (e){
	
	swal({
	title: 'Add Discounted Test',
	html:'<div class="col-md-12"> <select class="form-control select2" name="test_id" placeholder="{{__("Select Test")}}" id="test_id" required><option value="">Select Test</option>'+all_tests+'</select></div> <div class="col-md-12" style="margin-top: 20px;"><select class="form-control" name="discount_type" placeholder="{{__("Discount Type")}}" id="discount_type" required><option value="">Select Discount Type</option><option value="1">Value</option><option value="2">Percent</option></select></div> <div class="col-md-12" style="margin-top: 20px;"><input type="text" class="form-control"  name="price" id="price"  Placeholder="Test Price*">  </div> <div class="col-md-12" style="margin-top: 20px;"><input type="text" class="form-control" Placeholder="Discount Value" name="discount_value" id="discount_value"> </div> <div class="col-md-12" style="margin-top: 20px;"><input type="text" class="form-control"  name="party_price" id="party_price"  Placeholder="Party Price*"> </div> <div class="col-md-12" style="margin-top: 20px;"><input type="text" class="form-control"  name="reporting_days" id="reporting_days"  Placeholder="Test Reporting Days"> </div> <div class="col-md-12" style="margin-top: 20px;"><select class="form-control" name="status" placeholder="{{__("Select Status")}}" id="status" required><option value="0">Offered</option><option value="1">Agreed</option><option value="2">Disputed</option></select></div>',
	confirmButtonText: "Save",
	preConfirm: function () {
		return new Promise(function (resolve) {
			// Validate input
			if ($('#test_id').val() == '') {
				swal.showValidationMessage("Please select test"); // Show error when validation fails.
				swal.enableConfirmButton(); // Enable the confirm button again.
			}
			else if ($('#price').val() == '') {
				swal.showValidationMessage("Please enter price"); // Show error when validation fails.
				swal.enableConfirmButton(); // Enable the confirm button again.
			}
			else if ($('#party_price').val() == '') {
				swal.showValidationMessage("Please enter party price"); // Show error when validation fails.
				swal.enableConfirmButton(); // Enable the confirm button again.
			}
			else {
				swal.resetValidationMessage(); // Reset the validation message.
				resolve([
					$('#test_id').val(),
					$('#status').val()
				]);
			}
		})
	},
	onOpen: function () {
		$(".select2").select2();
		$('#test_id').focus();
	}
}).then(function (result) {
	// If validation fails, the value is undefined. Break out here.
	
	$.ajax({
		url: vendor_discount_price_create,
		type: "POST",
		data: { "test_id": $('#test_id').val() , "status": $('#status').val() , "faranchise_list_id": faranchise_list_id  , "discount_type": $('#discount_type').val()  , "price": $('#price').val() , "party_price": $('#party_price').val(), "reporting_days": $('#reporting_days').val() },
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

//delete lab
$(document).on('click','.delete_row_center',function(e){
	
	var id = $(this).attr('data_id');
	swal({
	  title: trans("Are you sure to delete discount ?"),
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonClass: "btn-danger",
	  confirmButtonText: trans("Delete"),
	  cancelButtonText: trans("Cancel"),
	  closeOnConfirm: false
	}).then(function (result) {
		$.ajax({
			url: vendor_discount_price_delete,
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
