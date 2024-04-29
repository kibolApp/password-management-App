<?php

namespace App\Http\Controllers;

use App\Models\Password;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PasswordController extends Controller
{
    public function save(Request $request)
    {
     
        $validatedData = $request->validate([
            'user_id' => 'required',
            'password' => 'required',
        ]);
    
        $userId = $validatedData['user_id'];
        $savedPassword = $validatedData['password'];
    
      
        $existingPassword = Password::where('user_id', $userId)
                                    ->where('saved_passwords',$savedPassword)
                                    ->first();
    
        if (!$existingPassword) {
            
            $password = new Password();
            $password->user_id = $userId;
            $password->saved_passwords = $savedPassword;
            $password->save();
        } else {
          
             return response()->json(['message' => 'Password already exists for this user'], 409);
        }
    }

    
    public function show(Request $request)
    {
     
        $validatedData = $request->validate([
            'user_id' => 'required',
        ]);
    
        $userId = $validatedData['user_id'];
        $passwords = Password::where('user_id', $userId)->pluck('saved_passwords')->toArray();

        return response()->json(['passwords' => $passwords], 200);
    }
}