<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
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

        // TODO: Is there a more idiomatic way to fetch strats for the provided
        // map and agent?
        $strats = $request->user()
            ->strats()
            ->select(['id', 'title', 'num_images', 'created_at', 'updated_at'])
            ->where([
                ['map', $map],
                ['agent', $agent]
            ])
            ->orderBy('updated_at', 'desc')
            ->get();

        return Inertia::render('Strats', [
            'map' => $map,
            'agent' => $agent,
            'strats' => $strats,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request, string $map, string $agent)
    {
        return Inertia::render('CreateStrat', [
            'map' => $map,
            'agent' => $agent,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $map, string $agent): RedirectResponse
    {
        // TODO: Perform validation on the query parameters. Make sure the map
        // and the agent are in an enum, and that the ID is a positive integer.

        $validated = $request->validate([
            // TODO: Should we enforce a length >= 1 here?
            'title' => 'required|string',
            'attacker_side_notes' => 'sometimes|string',
            'defender_side_notes' => 'sometimes|string'
        ]);

        $newStrat = $request->user()->strats()->create($validated);

        return redirect(route('strats.show', [
            'map' => $map,
            'agent' => $agent,
            'id' => $newStrat->id,
        ]));
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

        // TODO: Perform validation on the query parameters. Make sure the map
        // and the agent are in an enum, and that the ID is a positive integer.
        // Perhaps also make sure that the strat with that ID is under the
        // provided map and agent.

        $strat = $request->user()
            ->strats()
            ->select([
                'id',
                'title',
                'attacker_side_notes_html',
                'defender_side_notes_html',
                'created_at',
                'updated_at'
            ])
            ->where('id', $id)
            ->sole();

        return Inertia::render('Strat', [
            'map' => $map,
            'agent' => $agent,
            'strat' => $strat,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $map, string $agent, string $id)
    {
        // TODO: Do we really have to fetch the strat from the database again?
        // That kinda sucks....

        $strat = $request->user()
            ->strats()
            ->select([
                'id',
                'title',
                'attacker_side_notes',
                'defender_side_notes',
                'created_at',
                'updated_at'
            ])
            ->where('id', $id)
            ->sole();

        return Inertia::render('EditStrat', [
            'map' => $map,
            'agent' => $agent,
            'strat' => $strat,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $map, string $agent, string $id)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string',
            'attacker_side_notes' => 'sometimes|string',
            'defender_side_notes' => 'sometimes|string'
        ]);

        // TODO: Do we really have to fetch the strat from the database again?
        // That kinda sucks....
        $strat = $request->user()
            ->strats()
            ->where('id', $id)
            ->sole();

        // TODO: And then are we doing _another_ redundant database query to
        // determine this? There has to be a better, more idiomatic way....
        Gate::authorize('update', $strat);

        $strat->update($validated);

        return redirect(route('strats.show', [
            'map' => $map,
            'agent' => $agent,
            'id' => $id
        ]));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $map, string $agent, string $id)
    {
        // TODO: Do we really have to fetch the strat from the database again?
        // That kinda sucks....
        $strat = $request->user()
            ->strats()
            ->where('id', $id)
            ->sole();

        // TODO: And then are we doing _another_ redundant database query to
        // determine this? There has to be a better, more idiomatic way....
        Gate::authorize('delete', $strat);

        $strat->delete();

        return redirect(route('strats.index', [
            'map' => $map,
            'agent' => $agent
        ]));
    }
}
