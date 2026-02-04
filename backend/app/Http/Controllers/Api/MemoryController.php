<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMemoryRequest;
use App\Models\Memorial;
use App\Models\Memory;
use App\Services\MediaUploadService;
use Illuminate\Http\JsonResponse;

class MemoryController extends Controller
{
    public function __construct(
        private MediaUploadService $mediaUploadService
    ) {}

    /**
     * Get memories for a memorial
     */
    public function index(string $slug): JsonResponse
    {
        $memorial = Memorial::where('slug', $slug)->firstOrFail();
        
        $memories = Memory::where('memorial_id', $memorial->id)
            ->withCount('reflections')
            ->orderBy('created_at', 'asc')
            ->get()
            ->map(function ($memory) {
                return [
                    'id' => $memory->id,
                    'type' => $memory->type,
                    'content' => $memory->content,
                    'mediaUrl' => $memory->media_url,
                    'authorName' => $memory->author_name,
                    'createdAt' => $memory->created_at->toIso8601String(),
                    'reflectionsCount' => $memory->reflections_count,
                ];
            });
        
        return response()->json(['data' => $memories]);
    }

    /**
     * Store a new memory
     */
    public function store(string $slug, StoreMemoryRequest $request): JsonResponse
    {
        $memorial = Memorial::where('slug', $slug)->firstOrFail();
        
        $data = $request->validated();
        $data['memorial_id'] = $memorial->id;
        
        // Handle media upload
        if ($request->hasFile('media')) {
            $file = $request->file('media');
            $data['media_url'] = $this->mediaUploadService->upload($file);
        }
        
        $memory = Memory::create($data);
        
        return response()->json([
            'id' => $memory->id,
            'type' => $memory->type,
            'content' => $memory->content,
            'mediaUrl' => $memory->media_url,
            'authorName' => $memory->author_name,
            'createdAt' => $memory->created_at->toIso8601String(),
            'reflectionsCount' => 0,
        ], 201);
    }
}
