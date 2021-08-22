<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class PostResource extends JsonResource
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
            'description' => $this->description,
            'user' => $this->user,
            'comments' => $this->comments,
            'reactions' => $this->reactions,
            'files' => $this->files,
            'createdAt' => $this->created_at->format('d/m/Y H:i'),
            'updatedAt' => $this->updated_at->format('d/m/Y H:i')
        ];
    }
}
