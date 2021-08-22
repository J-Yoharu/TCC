<?php

namespace App\Repositories;

use App\Models\Post;
use Prettus\Repository\Eloquent\BaseRepository;

class PostRepository extends BaseRepository
{
    function model()
    {
        return Post::class;
    }
}
