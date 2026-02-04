<?php

namespace App\Services;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MediaUploadService
{
    /**
     * Upload a media file to S3 and return the URL
     */
    public function upload(UploadedFile $file, string $folder = 'memories'): string
    {
        $disk = config('filesystems.default') === 's3' ? 's3' : 'public';
        
        $extension = $file->getClientOriginalExtension();
        $filename = Str::uuid() . '.' . $extension;
        $path = $folder . '/' . $filename;
        
        Storage::disk($disk)->put($path, file_get_contents($file), 'public');
        
        return Storage::disk($disk)->url($path);
    }

    /**
     * Validate file type
     */
    public function isValidMediaType(UploadedFile $file): bool
    {
        $allowedMimes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/gif',
            'video/mp4',
            'video/webm',
        ];
        
        return in_array($file->getMimeType(), $allowedMimes);
    }
}
