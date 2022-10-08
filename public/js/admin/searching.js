//currency
var currency=$('#system_currency').val();
var patient_code=$('#patient_code').val();
var contract_id=$('#contract_id').val();

//branch
var branch_id=$('#branch_id').val();

//patient_id
var visit_patient_id=$('#visit_patient_id').val();

(function($){

   "use strict";
    
   //active
   $('#searching').addClass('active');

   //admin groups datatable
   var table=$('#groups_table').DataTable( {
      dom: "<'row'<'col-sm-4'l><'col-sm-4'B><'col-sm-4'f>>" +
      "<'row'<'col-sm-12'tr>>" +
      "<'row'<'col-sm-4'i><'col-sm-8'p>>",
      buttons: [
         
      ],
      "processing": true,
      "serverSide": true,
      "bSort" : false,
      "ajax": {
        url: db_url+"get_search",
        data:function(data)
        {
           data.filter_status=$('#filter_status').val();
           data.filter_type=$('#filter_type').val();
           data.filter_barcode=$('#filter_barcode').val();
           data.filter_date=$('#filter_date').val();
           data.filter_lab_id=$('#lab_id').val();
           data.filter_lab_center_id=$('#lab_center_id').val();
           data.filter_lab_party_id=$('#party_id').val();
           data.filter_amount_range=$('#amount_range').val();
           data.filter_inv_no=$('#inv_no').val();
        }
      },
      // orderCellsTop: true,
      fixedHeader: true,
      "columns": [
         {data:"id"},
         {data:"inv_type"},
         {data:"inv_no"},
         {data:"barcode"},
         {data:"patient.code"},
         {data:"patient.fname"},
         {data:"subtotal"},
         {data:"total"},
         {data:"paid"},
         {data:"created_at"},
         {data:"done",searchable:false,orderable:false,sortable:false},//done
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

   $('#filter_status').on('change',function(){
      table.draw();
   });

   $('#filter_type').on('change',function(){
      table.draw();
   });

   $('.lab_id').on('change',function(){
      table.draw();
   });

   $('#center_id').on('change',function(){
      table.draw();
   });
   
   $('#amount_range').on('change',function(){
      table.draw();
   });
   
   $('#party_id').on('change',function(){
      table.draw();
   });

   $('#filter_barcode').on('input',function(){
      table.draw();
   });

   $('#inv_no').on('input',function(){
      table.draw();
   });

   // filter date
   $('#filter_date').on( 'cancel.daterangepicker', function(){
      $(this).val('');
      table.draw();
   });
 
   $('#filter_date').on('apply.daterangepicker',function(){
      table.draw();
   });

   $('.datepickerrange').val('');

   $('footer').addClass('no-print');


   $(document).on('change','#lab_id', function (e) {
      var lab_id = $(this).val();
      $.ajax({
		  dataType: 'JSON',
		  type: "POST",
          url: get_lab_centers,
		  data: { "lab_id":lab_id },
          beforeSend:function(){
            $('.preloader').show();
            $('.loader').show();
          },
          success:function(response)
          {
			  if(response.html == ''){
				  
				  $("#center_id").html('');
				  swal.fire({
				  buttons: false,
				  title:'Error',
				  icon:'error',
				  text: 'No centers found',
				  timer: 3000,
				  closeOnConfirm: false
				});	
				
			  }
			  else{
				 $("#center_id").html(response.html);
			  }
          },
          complete:function()
          {
            $('.preloader').hide();
            $('.loader').hide();
          }
      });
   });



   //datatables
   $('.datatables').dataTable();

   

   //print barcode
   $(document).on('click','.print_barcode',function(){
      var group_id=$(this).attr('group_id');
      $('#print_barcode_form').attr('action',url(db_url+'groups/print_barcode/'+group_id));
   });

   $(document).on('submit','#print_barcode_form',function(){
      $('#print_barcode_modal').modal('toggle');
   });
   
})(jQuery);



 $(document).on('change','#patient_type',function(){
	 if($(this).val() == 'Local Patient'){
		 $('.showTravDiv').fadeOut();
	 }
	 else{
		 $('.showTravDiv').fadeIn();
	 }
 });
