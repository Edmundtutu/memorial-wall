<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMemoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'type' => 'required|in:text,image,video,quote',
            'content' => 'required|string|max:5000',
            'author_name' => 'nullable|string|max:255',
            'media' => 'nullable|file|mimes:jpg,jpeg,png,gif,mp4,webm|max:51200', // 50MB max
        ];
    }
}
