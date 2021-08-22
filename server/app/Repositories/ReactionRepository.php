<?php

namespace App\Repositories;

use App\Models\Reaction;
use Prettus\Repository\Eloquent\BaseRepository;

class ReactionRepository extends BaseRepository
{
    function model()
    {
        return Reaction::class;
    }
}
