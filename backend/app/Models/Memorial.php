<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Memorial extends Model
{
    const UPDATED_AT = null;

    protected $fillable = [
        'name',
        'slug',
        'date_of_birth',
        'date_of_passing',
        'dedication',
        'cover_image',
    ];

    protected $casts = [
        'date_of_birth' => 'date',
        'date_of_passing' => 'date',
    ];

    public function memories(): HasMany
    {
        return $this->hasMany(Memory::class);
    }
}
