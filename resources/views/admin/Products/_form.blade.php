<div class="row">
    <div class="col-lg-6">
       <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                  <i class="fa fa-user"></i>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="{{__('Id *')}}" name="id" id="id" @if(isset($patient)) value="{{$patient->id}}" @endif readonly>
        </div>
       </div>
    </div>

	<div class="col-lg-6">
       <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                  <i class="fa fa-user"></i>
              </span>
            </div>
            <input type="text" class="form-control" placeholder="{{__('Pattern Name')}}" name="pattern_name" id="pattern_name" @if(isset($patient)) value="{{$patient->pattern_name}}" @endif >
        </div>
       </div>
    </div>

	<div class="col-lg-4">
        <div class="form-group">
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fas fa-flag"></i>
                      </span>
                    </div>
                    <select class="form-control select2" name="test_id" placeholder="{{__('Test Name')}}" id="test_id" required>
						<option value="">Please Select Lab*</option>
						@foreach($data['test'] as $single)
							 <option value="{{$single['id']}}"  @if(isset($patient)&&$patient['test_id']==$single['id']) selected @endif >{{$single['name']}}</option>
						@endforeach
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="form-group">
         <div class="input-group">
             <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon1">
                   <i class="fa fa-user"></i>
               </span>
             </div>
             <input type="text" class="form-control" placeholder="{{__('Remarks')}}" name="remarks" id="remarks" @if(isset($patient)) value="{{$patient->remarks}}" @endif >
         </div>
        </div>
     </div>
	 <div class="col-lg-4">
        <div class="form-group">
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fas fa-flag"></i>
                      </span>
                    </div>
                    <select class="form-control" name="status" placeholder="{{__('Status')}}" id="status" required>
                       <option value="0"  @if(isset($patient)&&$patient['status']==0) selected @endif >In Active</option>
                       <option value="1"  @if(isset($patient)&&$patient['status']==1) selected @endif >Active</option>
                       <option value="2"  @if(isset($patient)&&$patient['status']==2) selected @endif >Suspend</option>
                       <option value="3"  @if(isset($patient)&&$patient['status']==3) selected @endif >Close</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</div>
