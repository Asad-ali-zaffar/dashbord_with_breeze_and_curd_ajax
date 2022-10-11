<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{ProfileController, Admin\ProductController};

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
    //welcome
});

Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::middleware('auth')->group(function () {

        //profile
        Route::group(['prefix' => 'profile', 'as' => 'profile.'], function () {
            Route::get('edit', [ProfileController::class, 'edit'])->name('edit');
            Route::post('update', [ProfileController::class, 'update'])->name('update');
        });
        Route::group(['prefix' => 'product', 'as' => 'product.'], function () {
            Route::get('index', [ProductController::class, 'index'])->name('index');
            Route::post('store-company', [ProductController::class, 'store'])->name('store');
            Route::post('edit-company', [ProductController::class, 'edit'])->name('edit');
            Route::post('delete-company', [ProductController::class, 'destroy'])->name('delete');
        });
    });
});


require __DIR__ . '/auth.php';
