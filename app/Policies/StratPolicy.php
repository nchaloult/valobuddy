<?php

namespace App\Policies;

use App\Models\Strat;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class StratPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, Strat $strat): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, Strat $strat): bool
    {
        return $strat->user()->is($user);
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Strat $strat): bool
    {
        return $this->update($user, $strat);
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Strat $strat): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Strat $strat): bool
    {
        //
    }
}
