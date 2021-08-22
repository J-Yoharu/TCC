<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ReactionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('posts')->group(function () {
    Route::get('/', [PostController::class, 'index']);
    Route::get('/{id}', [PostController::class, 'find']);
    Route::post('/', [PostController::class, 'store']);
    Route::put('/{id}', [PostController::class, 'update']);
    Route::delete('/{id}', [PostController::class, 'delete']);
});

<<<<<<< HEAD
Route::get('/teste', function () {
    $ser = new FirebaseService();
=======
Route::prefix('comments')->group(function () {
    Route::get('/', [CommentController::class, 'index']);
    Route::post('/', [CommentController::class, 'store']);
});

Route::prefix('reactions')->group(function () {
    Route::get('/', [ReactionController::class, 'index']);
    Route::post('/', [ReactionController::class, 'store']);
>>>>>>> 4287c1d6354e66cea0b0750f1963f4ced5670fd6
});
