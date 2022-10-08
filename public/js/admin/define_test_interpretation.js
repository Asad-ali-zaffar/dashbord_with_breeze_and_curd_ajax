(function($) {
    "use strict";
    //patients datatable
    var table = $('#table').DataTable({
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-4'i><'col-sm-8'p>>",
        buttons: [],
        "processing": true,
        "serverSide": true,
        "bSort": false,
        fixedHeader: true,
        "ajax": {
            url: db_url + "get_define_test_interpretation"
        },
        // orderCellsTop: true,
        fixedHeader: true,
        "columns": [
            { data: "status" },
            { data: "tr_no" },
            { data: "test_name_eng" },
            { data: "action", searchable: false, orderable: false, sortable: false } //action
        ],
        "language": {
            "sEmptyTable": trans("No data available in table"),
            "sInfo": trans("Showing") + " _START_ " + trans("to") + " _END_ " + trans("of") + " _TOTAL_ " + trans("records"),
            "sInfoEmpty": trans("Showing") + " 0 " + trans("to") + " 0 " + trans("of") + " 0 " + trans("records"),
            "sInfoFiltered": "(" + trans("filtered") + " " + trans("from") + " _MAX_ " + trans("total") + " " + trans("records") + ")",
            "sInfoPostFix": "",
            "sInfoThousands": ",",
            "sLengthMenu": trans("Show") + " _MENU_ " + trans("records"),
            "sLoadingRecords": trans("Loading..."),
            "sProcessing": trans("Processing..."),
            "sSearch": trans("Search") + ":",
            "sZeroRecords": trans("No matching records found"),
            "oPaginate": {
                "sFirst": trans("First"),
                "sLast": trans("Last"),
                "sNext": trans("Next"),
                "sPrevious": trans("Previous")
            },
        }
    });

    //active
    $('#define_test_interpretation').addClass('active');


    $('#form').validate({
        rules: {
            name_eng: {
                required: true
            },
            ph1: {
                required: true
            },
            address1: {
                required: true
            }

        },
        errorElement: 'span',
        errorPlacement: function(error, element) {
            error.addClass('invalid-feedback');
            element.closest('.form-group').append(error);
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass('is-invalid');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('is-invalid');
        }
    });

    //delete patient
    $(document).on('click', '.delete_patient', function(e) {
        e.preventDefault();
        var el = $(this);
        swal({
            title: trans("Are you sure to delete Product Registration  ?"),
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

$(document).ready(function() {
    $('table.display').DataTable();
});