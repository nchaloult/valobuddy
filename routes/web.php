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

    Route::get('/collection', function () {
        return Inertia::render('MapSelect');
    })->name('collection');

    Route::get('/collection/{map}', function () {
        return "Agent selector goes here";
    })->name("collection.map");

    Route::get('/{map}/{agent}/strats', [StratController::class, 'index'])->name('strats.index');
    Route::get('/{map}/{agent}/strats/create', [StratController::class, 'create'])->name('strats.create');
    Route::post('/{map}/{agent}/strats', [StratController::class, 'store'])->name('strats.store');
    // TODO: Do the slug thing.
    // https://laracasts.com/series/build-a-forum-with-laravel/episodes/27
    Route::get('/{map}/{agent}/strats/{id}', [StratController::class, 'show'])->name('strats.show');
    Route::get('/{map}/{agent}/strats/{id}/edit', [StratController::class, 'edit'])->name('strats.edit');
    Route::patch('/{map}/{agent}/strats/{id}/edit', [StratController::class, 'update'])->name('strats.update');
    Route::delete('/{map}/{agent}/strats/{id}', [StratController::class, 'destroy'])->name('strats.destroy');
});

require __DIR__ . '/auth.php';
