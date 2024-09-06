<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Strat extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $attributes = [
        'num_images' => 0,
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
