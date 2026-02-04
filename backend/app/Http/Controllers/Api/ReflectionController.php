<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreReflectionRequest;
use App\Models\Memory;
use App\Models\Reflection;
use Illuminate\Http\JsonResponse;

class ReflectionController extends Controller
{
    /**
     * Get reflections for a memory
     */
    public function index(int $memoryId): JsonResponse
    {
        $memory = Memory::findOrFail($memoryId);
        
        $reflections = Reflection::where('memory_id', $memory->id)
            ->orderBy('created_at', 'asc')
            ->get()
            ->map(function ($reflection) {
                return [
                    'id' => $reflection->id,
                    'memoryId' => $reflection->memory_id,
                    'content' => $reflection->content,
                    'authorName' => $reflection->author_name,
                    'createdAt' => $reflection->created_at->toIso8601String(),
                ];
            });
        
        return response()->json(['data' => $reflections]);
    }

    /**
     * Store a new reflection
     */
    public function store(int $memoryId, StoreReflectionRequest $request): JsonResponse
    {
        $memory = Memory::findOrFail($memoryId);
        
        $data = $request->validated();
        $data['memory_id'] = $memory->id;
        
        $reflection = Reflection::create($data);
        
        return response()->json([
            'id' => $reflection->id,
            'memoryId' => $reflection->memory_id,
            'content' => $reflection->content,
            'authorName' => $reflection->author_name,
            'createdAt' => $reflection->created_at->toIso8601String(),
        ], 201);
    }
}
