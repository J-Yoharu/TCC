<?php

namespace App\Services;

use App\Repositories\FileRepository;

class FileService
{
    private $repository;

    public function __construct(FileRepository $repository)
    {
        $this->repository = $repository;
    }

    public function attach($data)
    {
        if ($data != null) {
            return $this->repository->create([
                'name' => $data->getClientOriginalName(),
                'path' => $data->store('public'),
                'size' => $data->getSize(),
                'extension' => $data->getClientOriginalExtension(),
                'mime_type' => $data->getMimeType(),
            ]);
        }
    }
}
