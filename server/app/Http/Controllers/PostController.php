<?php

namespace App\Http\Controllers;

use App\Repositories\PostRepository;
use Illuminate\Http\Request;
use App\Services\FileService;
use App\Http\Resources\PostResource;

class PostController extends Controller
{

    private $repository;

    public function __construct(PostRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $this->repository->with(['user', 'comments', 'reactions', 'files']);
        $posts = $this->repository->all();

        return response()->json(PostResource::collection($posts));
    }

    public function store(Request $request, FileService $service)
    {
        $file = $service->attach($request->file);


        $attrs = $request->only(['description', 'user_id']);

        $post = $this->repository->create($attrs);

        $post->files()->attach($file);



        return response()->json($post);
    }

    public function update()
    {
    }
}
