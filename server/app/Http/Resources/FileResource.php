<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class FileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'path' => $this->path,
            'size' => $this->size,
            'url' => env('APP_URL') . Storage::url($this->path, now()->addHour()),
            'extension' => $this->extension,
            'mimeType' => $this->mime_type,
            'createdAt' => $this->created_at->format('d/m/Y'),
        ];
    }
}
