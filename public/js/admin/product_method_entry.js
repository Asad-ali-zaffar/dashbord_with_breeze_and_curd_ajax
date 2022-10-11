$(document).ready(function() {

    //active
    $('#product').addClass('active');
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('#ajax-crud-datatable').DataTable({
        processing: true,
        serverSide: true,
        ajax: " {{ route('admin.product.index') }}",
        columns: [{
                data: 'id',
                name: 'id'
            },
            {
                data: 'product_name',
                name: 'product_name'
            },

            {
                data: 'product_code',
                name: 'product_code'
            },

            {
                data: 'action',
                name: 'action',
                orderable: false
            },
        ],
        order: [
            [0, 'desc']
        ]
    });
});

function add() {
    $('#CompanyForm').trigger("reset");
    $('#CompanyModal').html("Add Product");
    $('#company-modal').modal('show');
    $('#id').val('');
}

function editFunc(id) {
    $.ajax({
        type: "POST",
        url: "{{ route('admin.product.edit') }}",
        data: {
            id: id
        },
        dataType: 'json',
        success: function(res) {
            $('#CompanyModal').html("Edit Company");
            $('#company-modal').modal('show');
            $('#id').val(res.id);
            $('#product_name').val(res.product_name);
            $('#product_code').val(res.product_code);
        }
    });
}

function deleteFunc(id) {
    if (confirm("Delete Record?") == true) {
        var id = id;
        // ajax
        $.ajax({
            type: "POST",
            url: "{{ route('admin.product.delete') }}",
            data: {
                id: id
            },
            dataType: 'json',
            success: function(res) {
                var oTable = $('#ajax-crud-datatable').dataTable();
                oTable.fnDraw(false);
            }
        });
    }
}
$('#CompanyForm').submit(function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: "{{ route('admin.product.store') }}",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: (data) => {
            $("#company-modal").modal('hide');
            var oTable = $('#ajax-crud-datatable').dataTable();
            oTable.fnDraw(false);
            $("#btn-save").html('Save changes');
            $("#btn-save").attr("disabled", false);
        },
        error: function(data) {
            console.log(data);
        }
    });
});
$('#CompanyForm').validate({
    rules: {
        product_name: {
            required: true
        },
        product_code: {
            required: true,
            number: true
        },

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