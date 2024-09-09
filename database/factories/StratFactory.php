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
        // TODO: Write logic to add num_images sometimes.
        // Faker's optional() method isn't good enough. If that optional() call
        // decides we shouldn't have num_images for a particular new strat, it
        // returns null --- not allowing the default value of 0 to take over.
        // When we try to write this to the database, this throws a "not null
        // violation".
        return [
            'user_id' => User::factory(),
            'title' => fake()->sentence(),
            'attacker_side_notes' => fake()->optional()->paragraphs(5, true),
            'defender_side_notes' => fake()->optional()->paragraphs(5, true),
        ];
    }
}
