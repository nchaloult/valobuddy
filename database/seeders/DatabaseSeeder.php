<?php

namespace Database\Seeders;

use App\Models\Strat;
use App\Models\User;
use App\Models\Vod;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()
            ->has(Vod::factory(3))
            ->has(Strat::factory(10))
            ->create([
                'name' => 'Todd Howard',
                'email' => 'todd@bethesda.net',
            ]);
    }
}
