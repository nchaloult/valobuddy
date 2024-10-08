<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StratController;
use Illuminate\Http\Request;
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

    Route::get('/collection/{map}', function (Request $request, string $map) {
        return Inertia::render('AgentSelect', ['map' => $map]);
    })->name("collection.map");

    Route::get('/collection/{map}/{agent}', function (
        Request $request,
        string $map,
        string $agent
    ) {
        return Inertia::render('VodStratSelect', [
            'map' => $map,
            'agent' => $agent
        ]);
    })->name("collection.map.agent");

    Route::get('/collection/{map}/{agent}/vods', function () {
        return 'Vods browser goes here.';
    })->name('vods.index');

    Route::get('/collection/{map}/{agent}/strats', [StratController::class, 'index'])->name('strats.index');
    Route::get('/collection/{map}/{agent}/strats/create', [StratController::class, 'create'])->name('strats.create');
    Route::post('/collection/{map}/{agent}/strats', [StratController::class, 'store'])->name('strats.store');
    // TODO: Do the slug thing.
    // https://laracasts.com/series/build-a-forum-with-laravel/episodes/27
    Route::get('/collection/{map}/{agent}/strats/{id}', [StratController::class, 'show'])->name('strats.show');
    Route::get('/collection/{map}/{agent}/strats/{id}/edit', [StratController::class, 'edit'])->name('strats.edit');
    Route::patch('/collection/{map}/{agent}/strats/{id}/edit', [StratController::class, 'update'])->name('strats.update');
    Route::delete('/collection/{map}/{agent}/strats/{id}', [StratController::class, 'destroy'])->name('strats.destroy');
});

require __DIR__ . '/auth.php';
