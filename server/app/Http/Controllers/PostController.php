<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Repositories\PostRepository;

class PostController extends Controller
{

    protected $repository;

    public function __construct(PostRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(Request $request)
    {
        try {
            if ($request->includes) {
                $this->repository->with($request->includes);
            }

            $posts = $this->repository->all();
            return response()->json($posts);
        } catch (Exception $exception) {
            return response()->json($exception->getMessage(), $exception->getCode());
        }
    }

    public function find($id)
    {
        try {
            $post = $this->repository->with('user')->find($id);
            return response()->json($post);
        } catch (Exception $exception) {
            return response()->json($exception->getMessage(), 501);
        }
    }

    public function store(Request $request)
    {
        try {
            $attributes = $request->only(['description', 'user_id']);
            $post = $this->repository->create($attributes);
            return response()->json($post);
        } catch (Exception $exception) {
            return response()->json($exception->getMessage(), $exception->getCode());
        }
    }

    public function update($id, Request $request)
    {
        try {
            $attributes = $request->only(['description']);

            $post = $this->repository->update($attributes, $id);

            return response()->json($post);
        } catch (Exception $exception) {
            return response()->json($exception->getMessage(), 501);
        }
    }

    public function delete($id)
    {
        try {
            $post = $this->repository->delete($id);
            return response()->json($post);
        } catch (Exception $exception) {
            return response()->json($exception->getMessage(), 501);
        }
    }
}
