<?php

namespace App\Repositories;

use App\Models\File;
use Prettus\Repository\Eloquent\BaseRepository;

class FileRepository extends BaseRepository
{
    function model()
    {
        return File::class;
    }
}
