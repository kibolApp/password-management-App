<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    public function register(SignupRequest $request) {
        $data=$request->validated();
        /** @var \App\Models\User $user */
        $user = User::create([
            'name'=>$data['name'],
            'email'=> $data['email'],
            'password'=>bcrypt($data['password']),
        ]);
        $token=$user->createToken((Int)['id' => (String)$user->id])->plainTextToken;

        $res=([
            'user'=>$user,
            'token'=>$token,
        ]);
        return response($res);
    }


public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    $credentials = $request->only('email', 'password');

    // Check if a user with the given email exists
    $user = User::where('email', $credentials['email'])->first();

    if (!$user) {
        return response()->json([
            'message' => 'Email does not exist.'
        ], Response::HTTP_NOT_FOUND); // Or use HTTP_UNAUTHORIZED as per your use case
    }

    // Attempt to authenticate the user
    if (!Auth::attempt($credentials)) {
        return response()->json([
            'message' => 'Unauthorized'
        ], Response::HTTP_UNAUTHORIZED);
    }

    // If authentication is successful, proceed to create token
    $user = Auth::user();
    $token = $user->createToken((int)['id' => (string)$user->id])->plainTextToken;

    $response = [
        'user' => $user,
        'token' => $token
    ];

    return response($response);
} 


    public function logout(Request $request)
    {
        /** @var \App\Models\User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete;
        return response('', 204);
    }
}