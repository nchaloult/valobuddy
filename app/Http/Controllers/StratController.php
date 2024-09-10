<?php

namespace App\Http\Controllers;

use App\Models\Strat;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StratController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, string $map, string $agent): Response
    {
        // TODO: Validate the provided map and agent against a whitelist/enum.

        // TODO: Only fetch strats for the provided map and agent.
        $strats = $request->user()
            ->strats()
            ->select(['id', 'title', 'num_images', 'created_at', 'updated_at'])
            ->orderBy('updated_at', 'desc')
            ->get();

        return Inertia::render('Strats', ['strats' => $strats]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $map, string $agent, string $id): Response
    {
        // TODO: Do the "self-healing" URL thing. If the map and the agent are
        // wrong, correct them and redirect to that URL.
        //
        // https://laracasts.com/series/build-a-forum-with-laravel/episodes/27

        $strat = $request->user()
            ->strats()
            ->where('id', $id)
            ->sole();

        return Inertia::render('Strat', ['strat' => $strat]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Strat $strat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Strat $strat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Strat $strat)
    {
        //
    }
}
