<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Memory extends Model
{
    const UPDATED_AT = null;

    protected $fillable = [
        'memorial_id',
        'type',
        'content',
        'media_url',
        'author_name',
    ];

    public function memorial(): BelongsTo
    {
        return $this->belongsTo(Memorial::class);
    }

    public function reflections(): HasMany
    {
        return $this->hasMany(Reflection::class);
    }
}
