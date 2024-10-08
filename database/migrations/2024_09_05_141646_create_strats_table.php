<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('strats', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->string('map');
            $table->string('agent');
            $table->string('title'); // TODO: Add a max length to this?
            $table->longText('attacker_side_notes')->nullable();
            $table->longText('attacker_side_notes_html')->nullable();
            $table->longText('defender_side_notes')->nullable();
            $table->longText('defender_side_notes_html')->nullable();
            $table->unsignedTinyInteger('num_images')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('strats');
    }
};
