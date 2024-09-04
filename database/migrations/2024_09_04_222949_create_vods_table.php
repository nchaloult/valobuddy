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
        Schema::create('vods', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->string('title');
            // Link to a public or unlisted YouTube video.
            $table->string('url');
            // Optionally let users specify the calendar day they played this game.
            $table->date('game_date')->nullable();
            // Optionally let users specify the rank they were when they played this game.
            // Ex: "Emerald 2"
            $table->string('rank')->nullable();
            $table->unsignedTinyInteger('rounds_won')->nullable();
            $table->unsignedTinyInteger('rounds_lost')->nullable();
            $table->unsignedTinyInteger('kills')->nullable();
            $table->unsignedTinyInteger('deaths')->nullable();
            $table->unsignedTinyInteger('assists')->nullable();
            $table->string('valoplant_url')->nullable();
            $table->string('tracker_url')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vods');
    }
};
