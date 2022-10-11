{{-- @can('edit_patient')
    <a class="btn btn-primary btn-sm" href="{{route('admin.product_method_entry.edit',$patient->id)}}">
        <i class="fa fa-edit" aria-hidden="true"></i>
    </a>
@endcan

@can('delete_patient')
    <form method="POST" action="{{route('admin.product_method_entry.destroy',$patient->id)}}" class="d-inline">
        <input type="hidden" name="_method" value="delete">
        <button type="submit" class="btn btn-danger btn-sm delete_patient">
            <i class="fa fa-trash"></i>
        </button>
    </form>
@endcan --}}

<a href="javascript:void(0)" data-toggle="tooltip" onClick="editFunc({{ $patient->id }})" data-original-title="Edit" class="edit btn btn-outline-secondary ">
    Edit
    </a>
    <a href="javascript:void(0);" id="delete-compnay" onClick="deleteFunc({{ $patient->id }})" data-toggle="tooltip" data-original-title="Delete" class="delete btn btn-outline-danger">
    Delete
    </a>
