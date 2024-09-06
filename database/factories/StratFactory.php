<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Strat>
 */
class StratFactory extends Factory
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
            'attacker_side_notes' => fake()->optional()->paragraphs(5, true),
            'defender_side_notes' => fake()->optional()->paragraphs(5, true),
            'num_images' => fake()->optional()->numberBetween(0, 6),
        ];
    }
}
