<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Memorial;
use Illuminate\Http\JsonResponse;

class MemorialController extends Controller
{
    /**
     * Get memorial by slug
     */
    public function show(string $slug): JsonResponse
    {
        $memorial = Memorial::where('slug', $slug)->firstOrFail();
        
        return response()->json([
            'id' => $memorial->id,
            'name' => $memorial->name,
            'slug' => $memorial->slug,
            'dateOfBirth' => $memorial->date_of_birth?->format('Y-m-d'),
            'dateOfPassing' => $memorial->date_of_passing?->format('Y-m-d'),
            'dedication' => $memorial->dedication,
            'coverImage' => $memorial->cover_image,
            'avatar' => $memorial->avatar,
            'createdAt' => $memorial->created_at->toIso8601String(),
        ]);
    }
}
