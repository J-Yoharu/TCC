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
        $posts = $this->repository->orderByDesc('id')->paginate(10);

        return response()->json(PostResource::collection($posts));
    }

    public function store(Request $request, FileService $service)
    {

        $attrs = $request->only(['description', 'user_id']);

        $post = $this->repository->create($attrs);

        $service->attach($request->file('file'), $post);

        return response()->json($post);
    }

    public function update()
    {
    }
}
