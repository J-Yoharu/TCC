<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\ReactionRepository;

class ReactionController extends Controller
{
    private $repository;

    public function __construct(ReactionRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $this->repository->with(['user', 'posts']);
        $reactions = $this->repository->all();

        return response()->json($reactions);
    }

    public function store(Request $request)
    {
        $attrs = $request->only(['post_id', 'user_id']);

        $reactions = $this->repository->create($attrs);

        return response()->json($reactions);
    }
}
