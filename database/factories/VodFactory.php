<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vod>
 */
class VodFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'title' => fake()->sentence(),
            'url' => fake()->url(), // TODO: Hard code an unlisted YouTube video URL.
            'game_date' => fake()->optional()->date(),
            'rank' => fake()
                ->optional()
                ->randomElement([ // TODO: Get these from an enum.
                    'Gold 3',
                    'Platinum 1',
                    'Platinum 2',
                    'Platinum 3',
                    'Emerald 1',
                    'Emerald 2',
                ]),

            // TODO: Make numbers more realistic. For instance, never have 13
            // rounds won and 13 rounds lost, never have more deaths than the
            // total number of rounds played, etc.
            'rounds_won' => fake()->numberBetween(0, 13),
            'rounds_lost' => fake()->numberBetween(0, 13),
            'kills' => fake()->numberBetween(0, 30),
            'deaths' => fake()->numberBetween(0, 30),
            'assists' => fake()->numberBetween(0, 30),

            'valoplant_url' => fake()->optional()->url(),
            'tracker_url' => fake()->optional()->url(),
            'description' => fake()->optional()->paragraph(),
        ];
    }
}
