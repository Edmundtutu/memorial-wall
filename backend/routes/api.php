<?php

use App\Http\Controllers\Api\MemorialController;
use App\Http\Controllers\Api\MemoryController;
use App\Http\Controllers\Api\ReflectionController;
use Illuminate\Support\Facades\Route;

// Memorial routes
Route::get('/memorials/{slug}', [MemorialController::class, 'show']);

// Memory routes
Route::get('/memorials/{slug}/memories', [MemoryController::class, 'index']);
Route::post('/memorials/{slug}/memories', [MemoryController::class, 'store'])
    ->middleware('throttle:10,1'); // 10 requests per minute

// Reflection routes
Route::get('/memories/{memory}/reflections', [ReflectionController::class, 'index']);
Route::post('/memories/{memory}/reflections', [ReflectionController::class, 'store'])
    ->middleware('throttle:20,1'); // 20 requests per minute
