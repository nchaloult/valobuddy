<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StratController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/{map}/{agent}/strats', [StratController::class, 'index'])->name('strats.index');
    // TODO: Do the slug thing.
    // https://laracasts.com/series/build-a-forum-with-laravel/episodes/27
    Route::get('/{map}/{agent}/strats/{id}', [StratController::class, 'show'])->name('strats.show');
    Route::get('/{map}/{agent}/strats/{id}/edit', [StratController::class, 'edit'])->name('strats.edit');
    Route::patch('/{map}/{agent}/strats/{id}/edit', [StratController::class, 'update'])->name('strats.update');
});

require __DIR__ . '/auth.php';
