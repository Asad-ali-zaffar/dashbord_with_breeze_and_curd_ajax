<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;
use Excel;
use DB;
class ProductController extends Controller
{
    //  /**
    //  * assign roles
    //  */
    // public function __construct()
    // {
    //     $this->middleware('can:view_patient',     ['only' => ['index', 'show', 'ajax']]);
    //     $this->middleware('can:create_patient',   ['only' => ['create', 'store']]);
    //     $this->middleware('can:edit_patient',     ['only' => ['edit', 'update']]);
    //     $this->middleware('can:delete_patient',   ['only' => ['destroy']]);
    // }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(request()->ajax()) {

            $getData =Product::select('*')->get();
        //     DB::table('product_method_entries')
		// ->join('tests', 'tests.id', '=', 'product_method_entries.test_id','left')
        //     ->select('product_method_entries.*','tests.name as test_name_eng', DB::raw('(CASE
		// WHEN product_method_entries.status = 0 THEN "In-Active"
		// WHEN product_method_entries.status = 1 THEN "Active"
		// WHEN product_method_entries.status = 2 THEN "Suspend"
		// ELSE "Close" END) AS status'))->get();
            return DataTables::of($getData)
            ->addColumn('action', function ($patient) {
                return view('admin.Products._action', compact('patient'));
            })->make(true);
        }
        return view('admin.Products.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'product_name'=>'required',
            'product_code'=>'required|integer',
        ]);
        $companyId = $request->id;

	    $company   =   Product::updateOrCreate(
	    	        [
	    	         'id' => $companyId
	    	        ],
	                [
	                'product_name' => $request->product_name,
	                'product_code' => $request->product_code,
	                ]);

	    return Response()->json($company);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $where = array('id' => $request->id);
	    $company  = Product::where($where)->first();

	    return Response()->json($company);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $company = Product::where('id',$request->id)->delete();

	    return Response()->json($company);
    }
}
