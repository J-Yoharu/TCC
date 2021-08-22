<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\CommentRepository;

class CommentController extends Controller
{
    private $repository;

    public function __construct(CommentRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $this->repository->with(['user', 'post']);
        $comments = $this->repository->all();

        return response()->json($comments);
    }

    public function store(Request $request)
    {
        $attrs = $request->only(['description', 'user_id', 'post_id']);

        $comments = $this->repository->create($attrs);

        return response()->json($comments);
    }
}
