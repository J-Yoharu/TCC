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

    public function attach($data, $post)
    {
        if ($data != null) {
            if (is_array($data)) {
                foreach ($data as $attach) {
                    $post->files()->attach($this->repository->create([
                        'name' => $attach->getClientOriginalName(),
                        'path' => $attach->store('public'),
                        'size' => $attach->getSize(),
                        'extension' => $attach->getClientOriginalExtension(),
                        'mime_type' => $attach->getMimeType(),
                    ]));
                }
                return true;
            }

            $post->files()->attach($this->repository->create([
                'name' => $data->getClientOriginalName(),
                'path' => $data->store('public'),
                'size' => $data->getSize(),
                'extension' => $data->getClientOriginalExtension(),
                'mime_type' => $data->getMimeType(),
            ]));

            return true;
        }
    }
}
