<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Strat extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $attributes = [
        'num_images' => 0,
    ];

    protected static function booted()
    {
        static::saving(fn(self $strat) => $strat->fill([
            'attacker_side_notes_html' => str($strat->attacker_side_notes)->markdown([
                // TODO: Consolidate this config based on Luke Downing's V: The
                // Comment Strikes Back Laracasts episode.
                'html_input' => 'strip',
                'allow_unsafe_links' => false,
                'max_nesting_level' => 6,
            ]),
            'defender_side_notes_html' => str($strat->defender_side_notes)->markdown([
                // TODO: Consolidate this config based on Luke Downing's V: The
                // Comment Strikes Back Laracasts episode.
                'html_input' => 'strip',
                'allow_unsafe_links' => false,
                'max_nesting_level' => 6,
            ]),
        ]));
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
