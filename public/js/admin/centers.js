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
            url: db_url+"get_centers"
        },
        // orderCellsTop: true,
        fixedHeader: true,
        "columns": [
            {data:"id"},
            {data:"lab_name_eng"},
            {data:"name_eng"},
            {data:"name_local"},
            {data:"contact_name"},
            {data:"ph1"},
            {data:"province_name"},
            {data:"city_name"},
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
   $('#centers').addClass('active');


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
        }).then((willDelete) => {
			if (willDelete) {
			$(el).parent().submit();
		   }
	   })
    });

})(jQuery);



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeaderLinks");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$( "#country" ).change(function() {
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
				$('#province').html(response.province_html);
				$('#city').html(response.city_html);
			}
		}            
	});
});
$( "#province" ).change(function() {
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
				$('#city').html(response.city_html);
			}
		}            
	});
});
 