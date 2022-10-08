$("form .form-control").attr("disabled", true);

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
   $('#invoice_cancel').addClass('active');

    $('#inv_no').on('input',function(e){
		
		var inv_no = $(this).val();
		var myajax = function(e) {
      //if you need to run again every 10 seconds
      //setTimeout(myajax, 10000);
		
		   $.ajax({
			  dataType: 'JSON',
			  type: "GET",
			  url: ajax_url('get_invoice_details'),
			  data: { "inv_no":inv_no },
			  beforeSend:function(){
				$('.preloader').show();
				$('.loader').show();
			  },
			  success:function(response)
			  {
				  if(response.status == 0){
					  
					  swal.fire({
					  buttons: false,
					  title:'Error',
					  icon:'error',
					  text: 'No invoice found',
					  timer: 3000,
					  closeOnConfirm: false
					});	
					
				  }
				  else{
						window.location.href = response.url;
				  }
			  },
			  complete:function()
			  {
				$('.preloader').hide();
				$('.loader').hide();
			  }
		  });
    };

    setTimeout(myajax, 1500);
 });
 
   

   //selected tests
   if(typeof test_arr !== 'undefined'&&test_arr.length>0)
   {
      test_arr.forEach(function(test_id){
         var test=$('#test_'+test_id);
         var price=$(test).attr('price');
         $('#test_'+test_id).prop('checked',true);
         $('.tests').append(`
         <div class="selected_tests" id="selected_test_`+test_id+`">
            <input type="hidden"  name="tests[]" value="`+test_id+`">
            <input type="hidden"  class="price" value="`+price+`">
         </div>`);
      });
   }


   //submit form
   $('#group_form').on('submit',function(){
      var count_tests=$('.selected_tests').length;
      if(!count_tests)
      {
         toastr.error(trans('Please select at least one test'),trans('Failed'));
         return false;
      }
   });


})(jQuery);


//calculations
function calculate_total()
{
   //calculate subtotal
   var subtotal=0;

   $('.price').each(function(){
      var price=parseFloat($(this).val());
	  //alert(price);
      subtotal+=parseFloat(price);
   });

  $('#subtotal').val(subtotal);

  //calculate discount
  var discount=0;

  var discount_percentage=$("#disc_code_id option:selected").attr('discount');
  
  if(discount_percentage)
  {
      discount_percentage=parseFloat($("#disc_code_id option:selected").attr('discount'));

      discount=(subtotal*discount_percentage)/100;

      $('#discount_per').val(discount_percentage); 
      $('#discount_amount').val(discount); 
  }
  else{
      $('#discount_amount').val(0); 
  }

  //calculate total
  var total=subtotal-discount;

  $('#total').val(total);

  //calculate due
  var paid=$('#paid').val();

  var due=total-paid;

  $('#due').val(due);
}

